const express = require('express')
const router = express.Router()
const { Donation } = require('../models/donation')
const { authenticateUser } = require ('../middlewares/authenticate')
const { User } = require('../models/user')
const { Campaign } = require('../models/campaign')

router.get('/', function(req, res){
  Donation.find()
  .then(function(donation) {
    res.send(donation)
  })
  .catch(function(err){
    res.send(err)
  })
})

router.post('/:id', authenticateUser, function(req, res){
  const campaignId = req.params.id
  const donation = new Donation({
    amount : req.body.amount,
    campaign: campaignId
  })
  donation.user = req.user._id
  donation.save()
    .then(function(donation){
      const { user, campaign } = donation
      
      // pushing donation id into user schema
      User.findById(user)
        .then((user) => {
          user.donation.push(donation._id)
          user.save()
            .then((user) => {
              console.log(user)
            })
        })
      Campaign.findById(campaign)
      .then((campaign) => {
        campaign.donation.push(donation._id)
        campaign.save()
          .then((campaign) => {
            console.log(campaign)
          })
      })

      res.send(donation)
    })
    .catch(function(err){
      res.send(err)
    })
  })

module.exports = {
    donationController : router
}