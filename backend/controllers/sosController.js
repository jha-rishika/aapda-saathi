import SosAlert from '../models/SosAlert.js';

export const triggerSosAlert = async (req, res) => {
  try {
    const { 
      name, phone, disasterType, message, 
      latitude, longitude, 
      age, bloodGroup, allergies, historicalInjuries 
    } = req.body;

    let voiceLogUrl = null;
    if (req.file) {
      voiceLogUrl = `/uploads/${req.file.filename}`;
    }

    const newAlert = new SosAlert({
      name,
      phone,
      disasterType,
      message,
      location: {
        latitude: latitude || 'Unknown Node',
        longitude: longitude || 'Unknown Node'
      },
      medicalContext: {
        age,
        bloodGroup,
        allergies,
        historicalInjuries
      },
      voiceLogUrl
    });

    const savedAlert = await newAlert.save();

    return res.status(201).json({
      success: true,
      message: "Crisis transmission loop anchored into central command base database registry.",
      alertId: savedAlert._id
    });

  } catch (error) {
    console.error(`[CONTROLLER EXCEPTION FAULT]: ${error.message}`);
    return res.status(500).json({
      success: false,
      error: "Emergency Server internal loop failure. Operational telemetry rejected."
    });
  }
};