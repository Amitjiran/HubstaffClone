const screenshotSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    screenshotPath: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Screenshot', screenshotSchema);
  