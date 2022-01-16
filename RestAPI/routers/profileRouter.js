const { profileController, postController, commentController, messageController } = require('../controllers');

module.exports = (router) => {
    router.get('/profile', profileController.get.profile);
    router.get('/profile/followers', profileController.get.followers);
    router.get('/profile/following', profileController.get.following);

    router.get('/profile/edit', profileController.get.edit);

    router.get('/profile/:postId/comment', commentController.get.comments);

    router.get('/profile/post', postController.get.post);

    router.get('/profile/messages', messageController.get.messages);
    router.get('/profile/messages/:messageId', messageController.get.message);


    // router.put('/profile/edit', profileController.put.edit);
    router.post('/profile/post', postController.post.create);
    router.post('/profile/:postId/comment', commentController.post.comment);
    router.post('/profile/:postId/comment/:commentId', commentController.post.replyComment);
    // router.put('/profile/:postId',profileController.put.post);

    return router;
};