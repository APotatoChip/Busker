const { homeController, locationController } = require('../controllers');

module.exports = (router) => {
    router.get('/', homeController.get.unauthhome);
    router.get('/home', homeController.get.authhome);
    router.get('/home/map', homeController.get.map);

    router.get('/map/tag', locationController.get.currentLocation);
    router.post('/map/tag', locationController.post.markerPosition);

    // router.put('/home/map/tag', homeController.put.tag);

    router.delete('/map/tag', locationController.delete.currentMarker);


    return router;
};