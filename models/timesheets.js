const timesheetSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    stopTime: { type: Date },
    duration: { type: Number } // in seconds
  }, { timestamps: true });
  
  module.exports = mongoose.model('Timesheet', timesheetSchema);
  