import express from 'express';
import { createSosAlert, getAllAlerts } from '../controllers/sosController.js';

const router = express.Router();

// This maps a POST and GET request directly to the base path /
router.route('/')
  .post(createSosAlert) // Handles citizens sending an SOS
  .get(getAllAlerts);   // Handles loading alerts for the admin view

export default router;