const models = require("../models");

const Category = models.Cate;

exports.create = async (req, res) => {
  await Category.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      throw err;
    });
};

exports.findAll = async (req, res) => {
  await Category.findAll()
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};

exports.findOne = async (req, res) => {
  await Category.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = async (req, res) => {
  await Category.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = async (req, res) => {
  await Category.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
