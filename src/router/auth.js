const Router = require('express');
const controller = require('../controller/auth');

const router = new Router();

router.post('/registration', controller.registration);

module.exports = router
