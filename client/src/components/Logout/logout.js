// function Logout() {
//   function isAuthenticated(req, res, next) {
//     if (!(req.headers && req.headers.authorization)) {
//       return res.status(400).send({
//         message:
//           "You did not provide a JSON web token in the authorization header",
//       });
//     }
//   }
//   var User = require("../../models/user");
//   var express = require("express");
//   var app = express();
//   app.get("/api/logout", isAuthenticated, function (req, res) {
//     console.log("User Id", req.user._id);
//     User.findByIdAndRemove(req.user._id, function (err) {
//       if (err) res.send(err);
//       res.json({ message: "User Logged out!" });
//     });
//   });
// }

// export default Logout;
