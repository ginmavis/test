const models = require("../models");

const Album = models.Album;
// const Album_Img = models.Album_Img;
const Album_Cate = models.Album_Cate;
const Category = models.Cate;

// exports.create = async (req, res) => {
//   // const paths = await req.files.map((file) => ({ image: file.filename }));

//   const result = await Album.create(
//     {
//       name: req.body.name,
//       Album_Imgs: req.body.Album_Imgs,
//       Album_Cates: req.body.category,
//     },
//     { include: [Album_Img, Album_Cate] }
//   )
//     .then((data) => res.send(data))
//     .catch((err) => {
//       throw err;
//     });

//   return result;

//   //   res.send({ data: paths });
// };

exports.create = async (req, res) => {
  const result = await Album.create(req.body, {
    include: [Album_Cate],
  })
    .then((data) => res.send(data))
    .catch((err) => {
      throw err;
    });

  return result;

  //   res.send({ data: paths });
};

exports.find_all = async (req, res) => {
  const result = Album.findAll({
    include: [Category],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((er) => {
      res.send({ message: er.message });
    });
  return result;
};
