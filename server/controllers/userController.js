const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel");
const { generateToken, verifyToken } = require("../controllers/jwtController");

exports.registerUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const isEmailExits = await User.exists({ email });

  if (isEmailExits) {
    return res.status(401).json({
      success: false,
      message: "Email already in use",
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const newUser = await new User({ ...req.body, password: hashedPass }).save();

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: newUser,
  });
});

exports.loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select(
    "name email user_type +password"
  );

  if (user) {
    const isPswMatch = await bcrypt.compare(password, user.password);

    if (isPswMatch) {
      const token = generateToken({
        id: user._id,
        email: user.email,
        user_type: user.user_type,
      });

      res.cookie("auth", token, {
        httpOnly: true,
      });

      return res.status(200).json({
        success: true,
        message: "Login successful!",
        token,
      });
    }
    return res.status(401).json({
      success: false,
      message: "Wrong credentials!",
    });
  }

  res.status(401).json({
    success: false,
    message: "Wrong credentials!",
  });
});

exports.logoutUser = expressAsyncHandler(async (req, res) => {
  res.clearCookie("auth");
  res.status(200).json({
    success: true,
    message: "Logout successful",
  });
});

exports.isLoggedIn = expressAsyncHandler(async (req, res) => {
  if (req.cookies && req.cookies.auth) {
    return res.status(200).json({
      status: true,
      user: verifyToken(req.cookies.auth),
    });
  }

  return res.status(200).json({
    status: false,
    user: null,
  });
});

exports.getLoggedInUser = expressAsyncHandler(async (req, res) => {
  const token = req.cookies.auth;
  const user = verifyToken(token);

  if (user) {
    const userInfo = await User.findById(user.id);
    return res.status(200).json({
      status: true,
      user: userInfo,
    });
  }

  res.status(200).json({
    status: false,
    user: null,
  });
});

exports.isTeacher = expressAsyncHandler(async (req, res) => {
  const user = verifyToken(req.cookies?.auth);

  if (user) {
    const userInfo = await User.findById(user.id);
    return res.status(200).json({
      status: true,
      user: userInfo,
    });
  }

  res.status(200).json({
    status: false,
    user: null,
  });

  // if (user) {
  // 	const userInfo = await User.findById(user.id);
  // 	return res.status(200).json({
  // 		status: true,
  // 		user: userInfo,
  // 	});
  // }

  // res.status(200).json({
  // 	status: false,
  // 	user: null,
  // });
});

exports.addAdmin = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const isEmailExits = await User.exists({ email });

  if (isEmailExits) {
    return res.status(401).json({
      success: false,
      message: "Email already in use",
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const newAdmin = await new User({ ...req.body, password: hashedPass }).save();

  res.status(201).json({
    success: true,
    message: "User created successfully",
    user: newUser,
  });
});

exports.logoutController = (req, res) => {
  res.clearCookie("auth");
  res.status(200).json({ success: true, message: "Logout successful" });
};
