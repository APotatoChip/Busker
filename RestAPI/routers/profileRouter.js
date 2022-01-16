const { profileController } = require('../controllers');

module.exports = (router) => {
    router.get('/profile', profileController.get.profile);
    router.get('/profile/followers', profileController.get.followers);
    router.get('/profile/following', profileController.get.following);
    router.get('/profile/edit', profileController.get.edit);
    router.get('/profile/post', profileController.get.post);
    router.get('/profile/messages', profileController.get.messages);
    router.get('/profile/messages/:messageId', profileController.get.message);

    // router.put('/profile/edit', profileController.put.edit);
    router.post('/profile/post', profileController.post.create);
    router.post('/profile/:postId/comment', profileController.post.comment);
    router.post('/profile/:postId/comment/:commentId', profileController.post.replyComment);
    // router.put('/profile/:postId',profileController.put.post);

    return router;
};