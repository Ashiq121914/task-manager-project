import mongoose, { Mongoose } from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    user_id: { type: Mongoose.Schema.Types.ObjectId, required: true },
    password: { type: String, unique: true, required: true },
  },
  {
    // to automatically update time in the database table
    timestamps: true,
    versionKey: false,
  }
);

const Tasks = mongoose.model("Users", TaskSchema);

export default Tasks;
