import { model, Schema, SchemaTypes } from 'mongoose'

const OrderSchema = new Schema({
    productName: {
      type: SchemaTypes.String,
      required: true,
    },
    quantity: {
        type: SchemaTypes.Number,
        required: true,
    }
  })
  
  const Order = model('order', OrderSchema)
  
  export default Order