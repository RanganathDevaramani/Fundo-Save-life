const mongoose = require('mongoose')
const Schema = mongoose.Schema

const campaignScehma = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    categoryId: {
        type : Schema.Types.ObjectId,
        ref : 'Category'
    },
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    briefStory: {
        type: String,
        required: true
    },
    imageUrl: [{
        type : String
    }],
    video: {},
    documentFiles: {},
    targetAmount: {
        type: Number,
        required: true
    },
    recievedAmount: {
        type: Number,
        default: 0
    },
    createdAt : {
        type  : Date,
        default : Date.now
    },
    benificiary : {
            beneficiaryType : {
                type : String
            },
            name: {
                type: String
            },
            address: {
                type: String
            }
    }
    ,
    startDate: {},
    endDate: {},
    donation: [{}],
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
    updates: [{
        type: Schema.Types.ObjectId,
        ref: 'CampaignUpdates'
    }],
    status: {},
    accountDetails: {
        accountName: {
            type:  String
        },
        bankName: {
            type: String
        },
        accountNo: {
            type: Number
        },
        branchName: {
            type: String
        },
        ifscCode: {
            type: String
        }
    }
})

const Campaign = mongoose.model('Campign', campaignScehma)

module.exports = {
    Campaign
}