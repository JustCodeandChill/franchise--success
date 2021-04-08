const mongoose = require('mongoose');
const {Schema} = mongoose;

const subscriberSchema = new Schema({
    recipientName : String,
    email : String
})

mongoose.model('subscribers', subscriberSchema);