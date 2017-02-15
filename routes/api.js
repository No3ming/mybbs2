let express = require('express');
let router = express.Router();
let user = require('../mongodb/controllers/user.js');

/*router.param('id', user.load);

router.get('/user',user.list);

router.post('/user-create',user.create);

router.post('/user/:id',user.update);

router.delete('/user/:id',user.delete);*/

router.post('/user-register', user.register)
router.post('/user-login', user.login)
module.exports = router;
