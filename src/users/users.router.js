const router = require('express').Router()
const passportJWT = require('../middleware/auth.middleware')

const userServices = require('./users.services')

router.get("/", userServices.getAllUsers)
router.post("/", userServices.postUser)

router.get("/:id", userServices.getUserById)
router.patch('/:id', passportJWT.authenticate('jwt', {session: false}) , userServices.patchUser)
router.delete('/:id', passportJWT.authenticate('jwt', {session: false}) , userServices.deleteUser)

module.exports = router