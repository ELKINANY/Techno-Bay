const Brands = require("../models/brands.model");
const asyncHandler = require("express-async-handler");

exports.createBrand = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const newBrand = new brands({ title });
  await newBrand.save();
  res.status(201).json(newBrand);
});

exports.getAllBrands = asyncHandler(async (req , res)=>{
  const brands = await Brands.find({});
  res.json({ results: brands.length, data: brands });
});

exports.getBrand = asyncHandler(async (req, res) => {
  const brand = await Brands.findById(req.params.id);
  res.json(brand);
});

exports.updateBrand = asyncHandler(async (req, res) => {
  const brand = await Brands.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(brand);
});

exports.deleteBrand = asyncHandler(async (req, res) => {
  await Brands.findByIdAndDelete(req.params.id);
  res.status(204).send();
});