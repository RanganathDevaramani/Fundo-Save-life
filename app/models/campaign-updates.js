const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {Campaign} = require('../models/campaign')

const campaignUpdatesSchema = {
    campaign: {
        type: Schema.Types.ObjectId,
        ref: 'Campaign'
    },
    updatedBody: {
        type: String
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}

const CampaignUpdates = mongoose.model('CampaignUpdates', campaignUpdatesSchema)
module.exports = {
    CampaignUpdates
}