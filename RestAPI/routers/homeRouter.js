const { homeController } = require('../controllers');

module.exports = (router) => {
    router.get('/', homeController.get.unauthhome);
    router.get('/home', homeController.get.authhome);
    router.get('/home/map', homeController.get.map);
    router.get('/home/map/tag', homeController.get.tag);

    // router.post('/home/map/tag', homeController.post.tag);

    // router.put('/home/map/tag', homeController.put.tag);

    // router.delete('/home/map/tag', homeController.delete.tag);


    return router;
};