const mongoose =require('mongoose');
const {Schema} = mongoose;

const franchiseSchema = new Schema({
    name : String,
    category : String,
    logo : String,
    description : String,
    initial_fee : String,
    work_capital : String,
    sixMonthWorth_work_capital : String,
    investment_range: String,
    investment_approximation: String,
    franchise_fee: String,
    royalty_fee : String,
    advertising_fee : String,
    copyRight_fee : String,
    growth_rate: String,
    additional_info : String
})

mongoose.model('franchises', franchiseSchema);