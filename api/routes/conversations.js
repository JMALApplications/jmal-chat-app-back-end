const express = require('express')
const router = express.Router()

const ConversationsController = require('../controllers/conversations')

// return all conversations
router.get('/', ConversationsController.conversations_get_all)

router.route('/:id')
    // get a conversation
    .get((req, res) => {
        res.send(req.params)
    })
    // create a conversation
    .post(ConversationsController.conversations_create_conversation)
    // update a conversation
    .patch(ConversationsController.conversations_update_conversation)
    //delete a conversation
    .delete((req, res) => {
        res.send(req.params)
    })

module.exports = router