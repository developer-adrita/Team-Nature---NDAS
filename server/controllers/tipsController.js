const expressAsyncHandler = require("express-async-handler");
const Tip = require("../models/TipsModel");
const cloudinary = require("../utils/cloudinaryHandler");

exports.addTips = expressAsyncHandler(async (req, res) => {
console.log(req.file, req.files)
  let result = {};
  if (req.file) {
    result = await cloudinary.uploader.upload(req.file.path, {
      folder: "NDAS/images",
    });
  }

  // const { user_type } = req.user;
console.log(req.body)
  // if (user_type === "admin") {
    const addTips = await new Tip({
      ...req.body,
      topicAvatar: result.secure_url,
      topicAvatarCloudinaryId: result.public_id,
    }).save();

    if (addTips) {
      return res.status(201).json({
        success: true,
        message: "Tip added successfully",
        Tip: addTips,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Tip not added",
      Tip: addTips,
    });
  // }
  res.status(403).json({
    success: false,
    message: "Unauthorized access",
    Tip: null,
  });
});

exports.getTips = expressAsyncHandler(async (req, res) => {
  const allTips = await Tip.find();

  if (allTips) {
    return res.status(200).json({
      success: true,
      message: "Tipses found",
      Tip: allTips,
    });
  }

  res.status(200).json({
    success: false,
    message: "Tipses not found",
    Tip: null,
  });
});
