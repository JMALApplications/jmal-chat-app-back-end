const express = require('express')
const router = express.Router()
const apiAuth = require('../middleware/api-auth')

const ConversationsController = require('../controllers/conversations')

router.route('/')
    // get all conversations
    .get(apiAuth, ConversationsController.conversations_get_all)
    // delete a conversation
    .delete(apiAuth, ConversationsController.conversations_delete_conversation)

router.route('/:visitor_id')
    // create a conversation
    .post(apiAuth, ConversationsController.conversations_create_conversation)
    // get a conversation
    .get(apiAuth, ConversationsController.conversations_get_conversation)
    // update a conversation
    .patch(apiAuth, ConversationsController.conversations_update_conversation)

module.exports = router