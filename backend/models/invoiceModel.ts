import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    products: [{
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        rate: { type: Number, required: true },
        total: { type: Number, required: true },
        gst: { type: Number, default: 0.18 }
    }],
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Invoice', invoiceSchema);
