import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    // to automatically update time in the database table
    timestamps: true,
    versionKey: false,
  }
);

const Tasks = mongoose.model("tasks", TaskSchema);

export default Tasks;
