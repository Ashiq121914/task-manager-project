import express from "express";
const router = express.Router();

import * as TaskController from "../app/controllers/TaskController.js";
import * as UserController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

//users
router.post("/Registration", UserController.Registration);
router.post("/login", UserController.Login);
router.get("/ProfileDetails", AuthMiddleware, UserController.ProfileDetails);
router.post("/ProfileUpdate", UserController.ProfileUpdate);
router.post("/EmailVerify", UserController.EmailVerify);
router.post("/CodeVerify", UserController.CodeVerify);
router.post("/ResetPassword", UserController.ResetPassword);

//task
router.post("/CreateTask", TaskController.CreateTask);
router.get("/UpdateTaskStatus", TaskController.UpdateTaskStatus);
router.get("/TaskListByStatus", TaskController.TaskListByStatus);
router.get("/DeleteTask", TaskController.DeleteTask);
router.get("/CountTask", TaskController.CountTask);

export default router;
