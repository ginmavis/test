const { role } = require("../controllers");

const router = require("express").Router();

router.get("/role", role.find_all);

router.get("/role/:id", role.find_one);

router.post("/role", role.create_one);
router.patch("/role/:id", role.update_one);
router.delete("/role/:id", role.delete_one);

router.get("/role", role.create_one);

module.exports = router;
