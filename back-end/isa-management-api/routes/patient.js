const express = require("express");
const router = express.Router();
const patientController = require("../app/controllers/patientController");

/* GET home page. */
router.get("/", patientController.list);
router.get("/:id", patientController.get);
router.post("/", patientController.insert);
router.put("/:id", patientController.update);
router.put("/:id/delete", patientController.delete);
router.put("/:id/restore", patientController.restore);

// router.put('/{id}/delete', function(req, res, next) {
//     console.log(req.body)
//     console.log(req.query)
//     return res.status(200).json({
//         status:"Api funcionando",
//         version:"1.0.0"
//     })
// });
module.exports = router;
