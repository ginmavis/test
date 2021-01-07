const { user } = require("../controllers");
const router = require("express").Router();

router.post("/user", user.create);
router.get("/user", user.findAll);
router.get("/user/:id", user.findOne);
router.delete("/user/:id", user.delete);
router.patch("/user/:id", user.update);
router.post("/UserRole", user.addRole);

module.exports = router;
