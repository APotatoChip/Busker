const { homeController, locationController } = require('../controllers');

module.exports = (router) => {
    router.get('/', homeController.get.unauthhome);
    router.get('/home', homeController.get.authhome);
    router.get('/home/map', homeController.get.map);

    router.get('/map/tag', locationController.get.currentLocation);
    router.get('/map/all', locationController.get.allCurrentlyPerforming);
    router.get('/map/exact/:userId', locationController.get.userById);
    router.get('/map/users', locationController.get.allTaggedUsers);
    router.post('/map/tag', locationController.post.markerPosition);

    // router.put('/home/map/tag', homeController.put.tag);

    router.delete('/map/tag', locationController.delete.currentMarker);


    return router;
};