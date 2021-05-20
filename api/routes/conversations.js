const express = require('express')
const router = express.Router()

const ConversationsController = require('../controllers/conversations')

router.route('/')
    // get all conversations
    .get(ConversationsController.conversations_get_all)
    // create a conversation
    .post(ConversationsController.conversations_create_conversation)
    // delete a conversation
    .delete(ConversationsController.conversations_delete_conversation)

router.route('/:visitor_id')
    // get a conversation
    .get(ConversationsController.conversations_get_conversation)
    // update a conversation
    .patch(ConversationsController.conversations_update_conversation)

module.exports = router