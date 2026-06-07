import mongoose from 'mongoose';

const SosAlertSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  disasterType: { type: String, required: true },
  message: { type: String, default: "Urgent assistance requested." },
  location: {
    latitude: { type: String, required: true },
    longitude: { type: String, required: true }
  },
  medicalContext: {
    age: { type: String },
    bloodGroup: { type: String },
    allergies: { type: String },
    historicalInjuries: { type: String }
  },
  voiceLogUrl: { type: String, default: null },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('SosAlert', SosAlertSchema);