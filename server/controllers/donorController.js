const expressAsyncHandler = require("express-async-handler");
const Donor = require("../models/DonorModel");
const cloudinary = require("../utils/cloudinaryHandler");

exports.addDonors = expressAsyncHandler(async (req, res) => {
    

  let result = {};

  if (req.file) {
    result = await cloudinary.uploader.upload(req.file?.path, {
      folder: "NDAS/images",
    });
  }

  // const { user_type } = req.user;
  // if (user_type === "admin") {
  const addDonors = await new Donor({
    ...req.body,
    topicAvatar: result.secure_url,
    topicAvatarCloudinaryId: result.public_id,
  }).save();

  if (addDonors) {
    return res.status(201).json({
      success: true,
      message: "Donor added successfully",
      Donor: addDonors,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Donor not added",
    Donor: addDonors,
  });
  // }
  res.status(403).json({
    success: false,
    message: "Unauthorized access",
    Donor: null,
  });
});

exports.getDonors = expressAsyncHandler(async (req, res) => {
  const allDonors = await Donor.find();

  if (allDonors) {
    return res.status(200).json({
      success: true,
      message: "Donors found",
      Donor: allDonors,
    });
  }

  res.status(200).json({
    success: false,
    message: "Donors not found",
    Donor: null,
  });
});

exports.deleteDonorController = expressAsyncHandler(async (req, res) => {
  const { donorId } = req.params;

  const deletedDonor = await Donor.findByIdAndDelete(tipId);

  if (deletedDonor) {
    return res.status(200).json({
      success: true,
      deletedDonor,
    });
  }

  res.status(500).json({
    success: false,
    deletedDonor: null,
  });
});
