const { Schema, model } = require('mongoose')

module.exports = model(
  'Cart',
  new Schema(
    {
      customer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Cart customer id  is required'],
      },
      products: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
      },
    },
    {
      timestamps: true,
      versionKey: false,
    },
  ),
)
