import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUsersController";
import { ReceivedComplimentsController } from "./controllers/ReceivedComplimentsController";
import { SendComplimentsController } from "./controllers/SendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const sendComplimentsController = new SendComplimentsController();
const receivedComplimentsController = new ReceivedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.get("/listusers", ensureAuthenticated, listUsersController.handle);
router.get("/listtags", ensureAuthenticated, listTagsController.handle);
router.get("/sentcompliments", ensureAuthenticated, sendComplimentsController.handle);
router.get("/receivedcompliments", ensureAuthenticated, receivedComplimentsController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/users", createUserController.handle);

export { router };