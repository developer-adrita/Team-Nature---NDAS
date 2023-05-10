const expressAsyncHandler = require("express-async-handler");
const Tips = require("../models/TipsModel");

exports.addTips = expressAsyncHandler(async (req, res) => {
  const { user_type } = req.user;

  if (user_type === "admin") {
    const addTips = await new Tips(req.body).save();

    if (addTips) {
      return res.status(201).json({
        success: true,
        message: "Tips added successfully",
        Tips: addTips,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Tips not added",
      Tips: addTips,
    });
  }
  res.status(403).json({
    success: false,
    message: "Unauthorized access",
    Tips: null,
  });
});

exports.getTips = expressAsyncHandler(async (req, res) => {
  const allTips = await Tips.find();

  if (allTips) {
    return res.status(200).json({
      success: true,
      message: "Tipses found",
      Tips: allTips,
    });
  }

  res.status(200).json({
    success: false,
    message: "Tipses not found",
    Tips: null,
  });
});
