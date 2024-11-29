const organizationSchema = new mongoose.Schema({
    organizationId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    website: { type: String, required: true },
    adminUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    teamMembers: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        email: { type: String },
        role: { type: String, enum: ['manager', 'user'] },
        status: { type: String, enum: ['pending', 'joined'], default: 'pending' }
      }
    ]
  }, { timestamps: true });
  
  module.exports = mongoose.model('Organization', organizationSchema);
  