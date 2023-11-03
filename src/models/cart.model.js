import mongoose from 'mongoose';


const productQuantitySchema = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const productOrderSchema = new mongoose.Schema({
  id: { type: String, required: true },
  products: [productQuantitySchema],
}, { timestamps: true });

export default mongoose.model('Cart', productOrderSchema);
