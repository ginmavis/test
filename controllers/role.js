const models = require("../models");

const Role = models.Role;

const defaultRole = ["user", "admin", "moderator"];

exports.create_one = async (req, res) => {
  const { name } = req.body;
  const checkRole = defaultRole.includes(name);
  if (!checkRole) return res.send("role không hợp lệ");
  const newRole = await Role.create({
    name: name,
  })
    .then((role) => {
      res.json({ role: role });
    })
    .catch((err) => {
      res.send({ message: err.message });
    });
  return newRole;
};

exports.find_all = async (req, res) => {
  const result = Role.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((er) => {
      res.send({ message: er.message });
    });
  return result;
};

exports.find_one = async (req, res) => {
  const result = await Role.findOne({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
  return result;
};

exports.update_one = async (req, res) => {
  const { name } = req.body;
  const checkRole = defaultRole.includes(name);
  if (!checkRole) return res.send("role không hợp lệ");
  const result = await Role.update(req.body, {
    where: { id: req.params.id },
  })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
  return result;
};
exports.delete_one = async (req, res) => {
  const result = await Role.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });

  return result;
};
