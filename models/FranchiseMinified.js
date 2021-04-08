const mongoose =require('mongoose');
const {Schema} = mongoose;

const franchiseSchema = new Schema({
    id : String,
    name : String,
    category : String,
    logo : String,
    description : String,
    work_capital : String,
    sixMonthWorth_work_capital : String,
    maxFee: Number
})

mongoose.model('top-franchises', franchiseSchema);