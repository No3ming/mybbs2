let express = require('express');
let router = express.Router();
let user = require('../mongodb/controllers/user.js');
let article = require('../mongodb/controllers/article.js');
let upload = require('../mongodb/controllers/fileuploads.js');

/*router.param('id', user.load);

router.get('/user',user.list);

router.post('/user-create',user.create);

router.post('/user/:id',user.update);

router.delete('/user/:id',user.delete);*/

router.post('/user-register', user.register)
router.post('/user-login', user.login)
router.post('/user-logout', user.logout)
router.post('/article/add', article.add)
router.post('/article/thumbnail', upload.single('thumbnail'), article.thumbnail)

module.exports = router;
