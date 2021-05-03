const express = require('express')
const router = express.Router()

const ConversationsController = require('../controllers/conversations')

// return all conversations
router.get('/', ConversationsController.conversations_get_all)

// create a conversation
router.post('/', ConversationsController.conversations_create_conversation)

router.route('/:visitor_id')
    // get a conversation
    .get(ConversationsController.conversations_get_conversation)
    // update a conversation
    .patch(ConversationsController.conversations_update_conversation)
    //delete a conversation
    .delete((req, res) => {
        res.send(req.params)
    })

module.exports = router