const mongoose = require('mongoose')

const Schema = mongoose.Schema

const donationSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    campaign : {
        type : Schema.Types.ObjectId,
        ref : 'Campaign'
    },
    amount : {
        type : Number,
        required : true
    },
    donatedAt : {
        type : Date,
        default : Date.now
    }
})

const Donation = mongoose.model('Donation', donationSchema)

module.exports = {
    Donation
}