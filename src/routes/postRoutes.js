import express from 'express';

import{
    createPost,
    deletePost,
    getAllPosts,
    updatePost,
} from '../controllers/postController.js'

const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.delete('/:id', deletePost);
router.delete('/:id', updatePost);


export default router;