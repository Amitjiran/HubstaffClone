const activitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    keyboardUsage: { type: Number, default: 0 }, // Number of keypresses
    mouseUsage: { type: Number, default: 0 },   // Number of mouse clicks
    screenshots: [
      {
        screenshotPath: { type: String, required: true },
        timestamp: { type: Date, default: Date.now }
      }
    ],
    browserActivity: [
      {
        title: { type: String, required: true },
        application: { type: String, required: true },
        timeSpentPercentage: { type: Number, required: true }, // In percentage
        date: { type: Date, required: true },
        time: { type: String, required: true }
      }
    ]
  }, { timestamps: true });
  
  module.exports = mongoose.model('Activity', activitySchema);
  