const express = require('express')
const router = express.Router()
const { Campaign } = require('../models/campaign')
const { User } = require('../models/user')
const { CampaignUpdates} = require('../models/campaign-updates')
const { authenticateUser } = require('../middlewares/authenticate')

router.get('/campaigns-list', (req, res) => {
    Campaign.find()
        .then(function(campaigns){
            res.send(campaigns)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.post("/new", authenticateUser, (req, res) => {
    const { title, description, targetAmount, imageUrl, categoryId, briefStory, benificiary, accountDetails} = req.body
    const campaign = new Campaign({
        title,
        description,
        targetAmount,
        briefStory,
        benificiary,
        accountDetails,
        imageUrl,
        categoryId
    })
    campaign.user = req.user._id
    campaign.save()
        .then(function(campaign){
            const { user } = campaign
            User.findById(user)
                .then((user) => {
                    user.campaign.push(campaign._id)
                    user.save()
                        .then((user) => {})
                })
                res.send(campaign)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    Campaign.findById(id)
        .then((campaign => res.send(campaign)))
        .catch((err => res.send(err)))
})

router.post("/updates/:id", (req, res) => {
    const campaign = req.params.id
    console.log(campaign)
    const { updatedBody } = req.body
    const campaignUpdates = new CampaignUpdates({
        campaign,
        updatedBody
    })

    campaignUpdates.save()
        .then((campaignUpdate) => {
            const campaignId = campaignUpdate.campaign
            Campaign.findById(campaignId)
                .then((campaign) => {
                    if(campaign){
                        campaign.updates.push(campaignUpdate._id)
                            campaign.save()
                                .then((campaign) => {})
                            }else{
                        res.send('Campaign Record Not found')
                    }
                })
            res.send(campaignUpdate)
        })
        .catch((err) => {
            res.send(err)
        })
    })                                 

module.exports = {
    campaignController : router
}