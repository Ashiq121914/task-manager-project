import Users from "../model/UsersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";

// user registration
export const Registration = async (req, res) => {
  try {
    let reqBody = req.body;
    await Users.create(reqBody);
    return res.json({
      status: "success",
      Message: "User registered successfully",
    });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

// user login
export const Login = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await Users.findOne(reqBody);

    if (data == null) {
      return res.json({ status: "fail", Message: "User not found" });
    } else {
      // Login Success
      let token = TokenEncode(data["email"], data["_id"]);
      return res.json({
        status: "success",
        Message: "User login successfully",
        data: { token: token },
      });
    }
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

// user profile details
export const ProfileDetails = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let data = await Users.findOne({ _id: user_id });
    return res.json({
      status: "success",
      message: "User profile successfully",
      data: data,
    });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

// user profile update
export const ProfileUpdate = async (req, res) => {
  try {
    let reqBody = req.body;
    let user_id = req.headers["user_id"];
    await Users.updateOne({ _id: user_id }, reqBody);
    return res.json({ status: "success", Message: "User Update successfully" });
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

export const EmailVerify = async (req, res) => {
  return res.json({ status: "success" });
};

export const CodeVerify = async (req, res) => {
  return res.json({ status: "success" });
};

export const ResetPassword = async (req, res) => {
  return res.json({ status: "success" });
};
