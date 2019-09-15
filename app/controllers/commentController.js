const express = require('express')
const router = express.Router()
const { Comment } = require('../models/comment')
const { Campaign } = require('../models/campaign')
const { authenticateUser } = require('../middlewares/authenticate')

router.post('/new/:id', authenticateUser, (req, res) => {
    const campaign = req.params.id
    const user = req.user._id
    const { commentBody } = req.body
    const comment = new Comment({
        user,
        campaign,
        commentBody
    })
 
    
    comment.save()
        .then((comment) => {
            Campaign.findById(comment.campaign)
                .then((campaign) => {
                    campaign.comments.push(comment._id)
                        campaign.save()
                            .then((campaign) => {})
                            .catch((err => console.log(err)))
                })
            res.send(comment)
        })
        .catch((err) => {
            res.send(err)
        })
})

module.exports = {
    commentController: router
}