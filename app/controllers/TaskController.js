import TasksModel from "../model/TasksModel.js";
import mongoose from "mongoose";

// create task
export const CreateTask = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let requestBody = req.body;
    requestBody.user_id = user_id;
    await TasksModel.create(requestBody);
    return res.json({ status: "success", message: "Task successfully" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

export const UpdateTaskStatus = async (req, res) => {
  return res.json({ status: "success" });
};

export const TaskListByStatus = async (req, res) => {
  return res.json({ status: "success" });
};

export const DeleteTask = async (req, res) => {
  return res.json({ status: "success" });
};

export const CountTask = async (req, res) => {
  return res.json({ status: "success" });
};
