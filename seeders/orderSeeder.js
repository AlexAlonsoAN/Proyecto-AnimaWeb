const { Order, Product } = require("../models");

async function orderSeeder() {
  const orders = [];
  const products = await Product.findAll();
  for (let i = 0; i < 10; i++) {
    const order = {
      userId: 1,
      productList: [
        {
          id: 1,
          name: "Producto prueba 1",
          qty: 3,
        },
        {
          id: 2,
          name: "Producto prueba 1",
          qty: 3,
        },
      ],
      address: "Uruguay 1020",
      status: "pending",
    };

    orders.push(order);
  }
  try {
    await Order.bulkCreate(orders);
    console.log("Order seeder is running!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = orderSeeder;
