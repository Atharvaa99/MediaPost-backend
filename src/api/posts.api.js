const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadFile = require('../services/storage.service');
const postModel = require('../models/post.model');

const upload = multer({ storage: multer.memoryStorage() })

router.post('/create-post', upload.single("image"), async (req, res) => {
    try {
        // Check if file exists
        if (!req.file) {
            return res.status(400).json({ message: "No image uploaded" });
        }
        const result = await uploadFile(req.file.buffer);
        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })
        res.status(201).json({
            message: "Post created successfully",
            post
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating post" });
    }
})

router.get('/posts', async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json({
            message: 'Post displayed successfully',
            posts
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching posts" });
    }
})

router.delete('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await postModel.findByIdAndDelete(id);
        
        if (!deleted) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({
            message: 'Post deleted successfully',
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting post" });
    }
})

module.exports = router;