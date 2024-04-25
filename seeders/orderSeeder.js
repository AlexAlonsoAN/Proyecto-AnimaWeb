
const { Order ,Product} = require("../models");


async function orderSeeder() {
  const orders = [];
  const products = await Product.findAll()
  for (let i = 0; i < 10; i++) {
    const order ={
        
        userId : 1,
        productList:[{
        "id": 1,
          "name": products[0].name,
          "qty": 3
        },
        {
        "id":2,
          "name": products[1].name,
          "qty": 3
        }],
        "addrees": "Uruguay 1020",
        "status":"pending"
        }
      
    order.push(orders);
  }
  try {
    await Order.bulkCreate(orders);
    console.log("Se corrió el seeder de orders");
  } catch (err) {
    console.log(err);
  }
}

module.exports = orderSeeder;
