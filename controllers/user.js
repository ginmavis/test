const models = require("../models");
const User = models.User;
const User_Role = models.User_Role;
const Role = models.Role;
// exports.create = async (req, res) => {
//   await User.create(req.body)
//     .then((user) => {
//       if (req.body.roles) {
//         Role.findAll({
//           where: {
//             name: req.body.roles,
//           },
//         })
//           .then((roles) => {
//             user.setRoles(roles).then(() => {
//               res.send({ message: "User was registered successfully!" });
//             });
//           })
//           .catch(res.send("role don't exists "));
//       } else {
//         //user role = 1
//         user.setRoles([1]).then(() => {
//           res.send({ message: "User was registered successfully!" });
//         });
//       }
//     })
//     .catch((err) => {
//       throw err;
//     });

//   const result = await User.findOne({
//     where: { username: req.body.username },
//     include: [Role],
//   })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       throw err;
//     });
//   return result;
// };

exports.create = async (req, res) => {
  await User.create(req.body, { include: [User_Role] })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
};

//  input
// {
//   "username":"g",
//   "password":"1",
//   "User_Roles":[
//       {
//          "RoleId":2
//       }
//   ]

// }

exports.findAll = (req, res) => {
  User.findAll({ include: [Role] })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};

exports.findOne = (req, res) => {
  User.findOne({ where: { id: req.params.id }, include: [Role] })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.delete = (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.update = (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
exports.addRole = (req, res) => {
  User_Role.create(req.body)
    .then((data) => {
      res.json({ data: data });
    })
    .catch((er) => {
      throw er;
    });
};
