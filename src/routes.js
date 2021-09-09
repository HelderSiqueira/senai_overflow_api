const routes = require("express").Router();
const controller = require("./controllers/posts")
const sessionController = require("./controllers/sessions")
const userController = require("./controllers/user")
const authMiddleware = require("./middlewares/auth")

routes.post('/sessions',sessionController.store)
routes.post('/users',userController.store)
routes.use(authMiddleware)


routes.get('/posts', controller.index,);

module.exports = routes
