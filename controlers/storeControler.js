const { Promise } = require("mongoose");
const Store = require("../models/store"); 
const getAllStores = () => {
  return new Promise((resolve, reject) => {
    Store.find()
      .then((store) => resolve(store))
      .catch((err) => reject(err));
  });
};
exports.getAllStores =getAllStores