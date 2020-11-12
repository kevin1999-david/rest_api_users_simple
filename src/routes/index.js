const { Router } = require('express');
const router = Router();
const {
    getUsers,
    getUsers2,
    createUser,
    getUserById,
    deleteUser,
    updateUser
} = require('../controllers/index.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);



router.get('/users2', getUsers2);
router.get('/test', (req, res) => {
    res.send('Test works!').status(200);
});

module.exports = router;