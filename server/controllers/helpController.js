const expressAsyncHandler = require("express-async-handler");
const cloudinary = require("../utils/cloudinaryHandler");
const Help = require("../models/HelpModel");

exports.addHelps = expressAsyncHandler(async (req, res) => {
  let result = {};
  if (req.file) {
    result = await cloudinary.uploader.upload(req.file.path, {
      folder: "NDAS/images",
    });
  }

  // const { user_type } = req.user;
  // if (user_type === "admin") {
  const addHelps = await new Help({
    ...req.body,
    helpAvatar: result.secure_url,
    helpAvatarCloudinaryId: result.public_id,
  }).save();

  if (addHelps) {
    return res.status(201).json({
      success: true,
      message: "Help added successfully",
      Help: addHelps,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Help not added",
    Help: addHelps,
  });
  // }
  res.status(403).json({
    success: false,
    message: "Unauthorized access",
    Help: null,
  });
});

exports.getHelps = expressAsyncHandler(async (req, res) => {
  const allHelps = await Help.find();

  if (allHelps) {
    return res.status(200).json({
      success: true,
      message: "Helpers found",
      Help: allHelps,
    });
  }

  res.status(200).json({
    success: false,
    message: "Helpers not found",
    Help: null,
  });
});

exports.deleteHelpController = expressAsyncHandler(async (req, res) => {
  const { helpId } = req.params;

  const deletedHelp = await Help.findByIdAndDelete(helpId);

  if (deletedHelp) {
    return res.status(200).json({
      success: true,
      deletedHelp,
    });
  }

  res.status(500).json({
    success: false,
    deletedHelp: null,
  });
});
