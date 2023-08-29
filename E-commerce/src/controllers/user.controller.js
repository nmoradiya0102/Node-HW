const { userService, emailService } = require("../services");

/* CREATE USER */
const createuser = async (req, res) => {
  try {
    const reqBody = req.body;
    const userExists = await userService.getuserbyemail(reqBody.email);
    if (userExists) {
      throw new Error("User already created by this email ");
    }
    const user = await user_Service.createuser(reqBody);
    if (!user) {
      throw new Error("Something went wrong");
    }
    res.status(200).json({
      success: true,
      message: "User create successfully",
      data: reqBody,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* USER LIST */
const getuserlist = async (req, res) => {
  try {
    const userlist = await userService.getuserlist();
    if(!userlist){
      throw new Error("User list data not found ");
    }
    res.status(200).json({
      success: true,
      message: "Get user list successfully..!",
      data: userlist,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get user details by id */
const getUserDetails = async (req, res) => {
  try {
    const getDetails = await userService.getuserbyid(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** user details update by id */
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getuserbyid(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await user_Service.updatedetails(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!"
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* DELETE USER */
const deleteuser = async (req, res) => {
  try {
    const userid = req.params.userId;
    const userExists = await userService.getuserbyid(userid);
    if (!userExists) {
      throw new Error("User does not exist ");
    }
    await user_Service.deleteuser(userid);
    res.status(200).json({
      success: true,
      message: "User deleted successfully ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/** Send mail to reqested email */
const sendMail = async (req, res) => {
  try {
    const reqBody = req.body;
    const sendEmail = await emailService.sendMail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );
    if (!sendEmail) {
      throw new Error("Something went wrong, please try again or later.");
    }

    res
      .status(200)
      .json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createuser,
  getuserlist,
  getUserDetails,
  updateDetails,
  deleteuser,
  sendMail,
};