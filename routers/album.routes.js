const { album } = require("../controllers");

const router = require("express").Router();
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, `${__dirname}/../../frontend/public/uploads/`);
    cb(null, `${__dirname}/../public/`);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

router.post("/album", upload.array("album", 100), album.create);

router.get("/album", album.find_all);

module.exports = router;
