//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = ((req, res) => {
    res.status(200).json({ message: 'get all contacts'});
});

//@desc create new contact
//@route POST /api/contacts
//@access public
const createContact = ((req, res) => {
    res.status(201).json({ message: 'create contact'});
});

//@desc get a contact
//@route GET /api/contacts/:id
//@access public
const getContact = ((req, res) => {
    res.status(200).json({ message: `get contact for id ${req.params.id}`});
});

//@desc update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = ((req, res) => {
    res.status(200).json({ message: `update contact for id ${req.params.id}`});
});


//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = ((req, res) => {
    res.status(200).json({ message: `delete contact for id ${req.params.id}`});
});


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };