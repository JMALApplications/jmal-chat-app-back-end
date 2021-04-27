const express = require('express')
const router = express.Router()

// return all conversations
router.get('/', (req, res) => {
    res.send('return all conversations')
})

router.route('/:id')
    // get a conversation
    .get((req, res) => {
        res.send(req.params)
    })
    // create a conversation
    .post((req, res) => {
        res.send(req.params)
    })
    // update a conversation
    .patch((req, res) => {
        res.send(req.params)
    })
    //delete a conversation
    .delete((req, res) => {
        res.send(req.params)
    })


module.exports = router