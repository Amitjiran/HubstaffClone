const projectSchema = new mongoose.Schema({
    projectId: { type: String, unique: true, required: true },
    organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true },
    name: { type: String, required: true },
    teamMembers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    toDos: [
      {
        task: { type: String, required: true },
        completed: { type: Boolean, default: false }
      }
    ],
    budget: { type: Number },
    status: { type: String, enum: ['active', 'archived'], default: 'active' }
  }, { timestamps: true });
  
  module.exports = mongoose.model('Project', projectSchema);
  