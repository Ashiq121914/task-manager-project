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

// update task by status
export const UpdateTaskStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let status = req.params.status;
    let user_id = req.headers["user_id"];
    await TasksModel.updateOne(
      { _id: id, user_id: user_id },
      {
        status: status,
      }
    );
    return res.json({ status: "success", message: "Task Update successfully" });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

// task list by status
export const TaskListByStatus = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let status = req.params.status;
    let data = await TasksModel.find({ user_id: user_id, status: status });
    return res.json({ status: "success", message: "Task List", data: data });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

export const DeleteTask = async (req, res) => {
  return res.json({ status: "success" });
};

export const CountTask = async (req, res) => {
  return res.json({ status: "success" });
};
