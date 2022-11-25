const db = require("./../model/index");
const Roles = db.Roles; // constant and not the roles model
const User = db.user;

let checkDuplicateUserName = async (req, res, next) => {
  let user = await User.findOne({
    where: {
      username: req.body.username,
    },
  });

  if (user) {
    res.status(400).json({
      message: "User already exist",
    });
    return;
  }

  next();
};

let checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    // supernova
    // Roles = ['admin', 'user']
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!Roles.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i],
        });
        return;
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUserName: checkDuplicateUserName,
  checkRolesExisted: checkRolesExisted,
};
module.exports = verifySignUp;
