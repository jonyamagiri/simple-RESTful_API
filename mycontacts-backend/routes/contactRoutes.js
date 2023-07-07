const express = require("express");
const router = express.Router();
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactController.js");
const validateToken = require("../middleware/validateTokenHandler.js");


// adds protection to all the routes below
// router.use(validateToken);

// routes aggregated due to similar endpoints
router.route('/').get(validateToken, getContacts);
router.route('/').post(validateToken, createContact);
router.route('/:id').get(validateToken, getContact);
router.route('/:id').put(validateToken, updateContact);
router.route('/:id').delete(validateToken, deleteContact);

/* alternative way of writing
router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
*/

/*
router.route('/').get(getContacts);
router.route('/').post(createContact);
router.route('/:id').get(getContact);
router.route('/:id').put(updateContact);
router.route('/:id').delete(deleteContact);
*/


module.exports = router;
