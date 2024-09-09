import Users from "../model/UsersModel.js";

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

export const Login = async (req, res) => {
  return res.json({ status: "success" });
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
