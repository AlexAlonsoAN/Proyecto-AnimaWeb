const { Order } = require("../models");

const orderController = {
  index: async (req, res) => {
    const order= await Order.findAll();
    return res .json (orders)
  },
  show: async (req, res) => { 
const {id}=req.params;
const order=await Order. findByPk(id);
return res.json(order);
  },
  store: async (req, res) => {
    const { status, productList} = req.body;
    await Order.create({ status, productList });
    
  },

  update: async (req, res) => {
    const { id } = req .params;
  },

  destroy: async (req, res) => {},
};

module.exports = orderController;
