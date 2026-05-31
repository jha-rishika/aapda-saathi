import mongoose from 'mongoose';

const sosAlertSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Citizen name is required'],
    trim: true
  },
  phone: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true
  },
  disasterType: {
    type: String,
    required: [true, 'Disaster classification is required'],
    enum: ['Flood', 'Earthquake', 'Cyclone', 'Fire', 'Medical Emergency', 'Other'] // Enforces valid types
  },
  location: {
    type: String,
    required: [true, 'Location details are required'],
    trim: true
  },
  message: {
    type: String,
    trim: true,
    default: 'Emergency! Immediate assistance required.'
  },
  status: {
    type: String,
    enum: ['Pending', 'Dispatched', 'Resolved'],
    default: 'Pending' // New alerts default to Pending until admin takes action
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically tracks exactly when the SOS was triggered
  }
});

const SosAlert = mongoose.model('SosAlert', sosAlertSchema);

export default SosAlert;