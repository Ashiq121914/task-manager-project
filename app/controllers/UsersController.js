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

export const ProfileDetails = async (req, res) => {
  return res.json({ status: "success" });
};

export const ProfileUpdate = async (req, res) => {
  return res.json({ status: "success" });
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
