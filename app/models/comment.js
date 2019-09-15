const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
    },
    campaign: {
        type: Schema.Types.ObjectId
    },
    commentBody: {
        type: String
    },
    commentAt: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
    Comment
}