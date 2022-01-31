const gerAllOrders = () => {
  return new Promise((resolve, reject) => {
    Order.find()
      .then((order) => resolve(order))
      .catch((err) => reject(err));
  });
};
exports.gerAllOrders=gerAllOrders


