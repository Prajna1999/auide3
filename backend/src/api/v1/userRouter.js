const express = require('express');

const UserController=require('../../controllers/userController')

const router = express.Router();

// create a staff user
router.post('/', UserController.createUser);

// get a tenant by staff id
router.get('/:id', UserController.getUser);

// update tenant by tenant id
router.put('/:id', UserController.updateUser);

// delete tenant by tenant id
router.delete('/:id', UserController.deleteUser);

module.exports = router;
