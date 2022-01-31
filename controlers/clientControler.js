const req = require("express/lib/request");
const { Promise } = require("mongoose");
const client = require("../models/client");

const getAllClients = () => {
  return new Promise((resolve, reject) => {
    client
      .find()
      .then((client) => resolve(client))
      .catch((err) => reject(err));
  });
};
exports.getAllClients = getAllClients;





const updateaClient = () => {
return new Promise((resolve, reject) => {
client
.findByIdAndUpdate({_id: req.params.id}, {$set:req.body})
.then((client) => resolve(client))
.catch((err) => reject(err));
});
};
exports.updateaClient = updateaClient;