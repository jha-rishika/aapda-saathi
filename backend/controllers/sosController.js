import SosAlert from '../models/SosAlert.js';

// @desc    Create a new SOS emergency alert
// @route   POST /api/sos
// @access  Public
export const createSosAlert = async (req, res) => {
  try {
    const { name, phone, disasterType, location, message } = req.body;

    const newAlert = await SosAlert.create({
      name,
      phone,
      disasterType,
      location,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'SOS Alert transmitted successfully to headquarters!',
      data: newAlert,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// @desc    Get all SOS alerts
// @route   GET /api/sos
// @access  Public
export const getAllAlerts = async (req, res) => {
  try {
    const alerts = await SosAlert.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: alerts.length,
      data: alerts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error: Unable to retrieve emergency logs',
    });
  }
};