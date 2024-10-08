const moongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const userSchema =  new Schema(
{
  name: {type: String , required: true },
  email: { type: String, required: true },
  password: { type: string , required: true }, //* we have to remember to hash the password with bcrypt library 
  // purchases: [{ type: }], //* we have to remember to connect this field with the purchases collection
  moneySpent: { type: Number },
  paymentMethods: [{ type: String }],
  addresses: [{ type: String }],
  vatNumber: { type: String },
  lastConnection: { type: String },
},
{
  timestamps: true,
}
);

const User = mongoose.model('User', userSchema);
module.exports = User;