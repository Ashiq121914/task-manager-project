import Users from "../model/UsersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";
import SendEmail from "../utility/emailUtility.js";

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

// email verification
export const EmailVerify = async (req, res) => {
  try {
    let email = req.params.email;
    let data = await Users.findOne({ email: email });
    if (data == null) {
      return res.json({ status: "fail", Message: "User email does not exist" });
    } else {
      // Send OTP To Email
      let code = Math.floor(100000 + Math.random() * 900000);
      let EmailTo = data["email"];
      let EmailText = "Your Code is " + code;
      let EmailSubject = "Task Manager Verification Code";
      await SendEmail(EmailTo, EmailText, EmailSubject);

      // Update OTP In User
      await Users.updateOne({ email: email }, { otp: code });
      return res.json({
        status: "success",
        Message: "Verification successfully,check email",
      });
    }
  } catch (e) {
    return res.json({ status: "fail", Message: e.toString() });
  }
};

export const CodeVerify = async (req, res) => {
  return res.json({ status: "success" });
};

export const ResetPassword = async (req, res) => {
  return res.json({ status: "success" });
};
