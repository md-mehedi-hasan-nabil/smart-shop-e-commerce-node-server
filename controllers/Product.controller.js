const ProductModel = require("../models/Product.model");

// get all books
async function getProducts(req, res, next) {
  try {

    const products = await ProductModel.find({}).populate([
      "review",
  ]);;
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getProduct(req, res, next) {
  try {
    const { productId } = req.params || {};
    const product = await ProductModel.findById(productId);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function addProduct(req, res, next) {
  try {
    const { productName, productImage, productDesc, price, star, country } = req.body || {};

    // create new book
    const newProduct = new ProductModel({
      productName, productImage, productDesc, price, star, country
    });

    await newProduct.save();

    res.status(201).json({
      book: newProduct,
      success: {
        message: "Product add success",
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const { productId } = req.params || {};

    const product = await ProductModel.findByIdAndDelete(productId);

    res.status(200).json({
      success: {
        message: "Product Delete Successfully.",
        product,
      }
    });

  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function editProduct(req, res, next) {
  try {

    const { productId } = req.params || {};
    console.log(productId)
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json({
      success: {
        message: "Product Update Successfull.",
        product: updatedProduct,
      }
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
};
