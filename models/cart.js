const mongoose = require('mongoose');
const { Schema } = mongoose;

  const CartSchema = new Schema({
 
    userID: { type: String, required: true, unique: true },
    products: [
        {
            productID: {type: String},
            title: { type: String, required: true },
            img: { type: Schema.Types.Mixed, required: true},
            size: { type: String},
            color: { type: String },
            price: { type: Number, required: true},
            quantity: {type: Number},
        }
    ]
    
  },{timestamps: true}
  ); 
 

  const Cart = mongoose.model('Cart', CartSchema)
  module.exports = Cart