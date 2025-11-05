import express from 'express';
import { getUserProfile, updateUserProfile, purchaseCourse, updateCourseProgress, getWatchedVideos } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/purchase-course').post(protect, purchaseCourse);
router.route('/course-progress').put(protect, updateCourseProgress);
router.route('/watched-videos').get(protect, getWatchedVideos);

export default router;
