const { category } = require("../controllers");

const router = require("express").Router();

router.get("/category", category.findAll);

router.get("/category/:id", category.findOne);

router.post("/category", category.create);
router.patch("/category/:id", category.update);
router.delete("/category/:id", category.delete);

module.exports = router;
