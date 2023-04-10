const { User, Patient, sequelize } = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = {
  get: async (req, res) => {
    const idUser = req.params.id;
    const patient = await User.findByPk(idUser, {
      include: [{ model: Patient, as: "patient" }],
    });
    return res.status(200).json({ data: { patient } });
  },
  list: async (req, res) => {
    try {
      const perPage = req.query.perPage || 5;
      const page = req.query.page || 1;

      const list = await User.findAndCountAll({
        include: [{ model: Patient, as: "patient" }],
        where: { type_user: { [Op.eq]: 2 } },
        limit: page * perPage,
        offset: (page - 1) * perPage,
        order: [["createdAt", "DESC"]],
      });
      let meta = {
        total: list.count,
        page: +page,
        perPage: +perPage,
        lastPage: Math.ceil(list.count / perPage),
      };
      return res.status(200).json({ meta, data: list.rows });
    } catch (error) {
      console.log(error.message);
    }
  },
  insert: async (req, res) => {
    const trans = await sequelize.transaction();

    try {
      const { name, email, password, birthdate, register_number, gender } =
        req.body;

      // cria usuario
      const dataUser = {
        type_user: 2,
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 10),
      };
      const user = await User.create(dataUser, { transaction: trans }); // vincula transaction

      // cria paciente
      const dataPacient = {
        id_user: user.id,
        register_number: register_number,
        gender: gender,
        birthdate: birthdate,
      };
      const patient = await Patient.create(dataPacient, { transaction: trans }); // vincula transaction

      // se tudo correto confirma
      await trans.commit();

      return res.status(201).json({
        data: { user: { ...user.dataValues, patient } },
        message: "created with success",
      });
    } catch (error) {
      console.log(error.message);

      // caso erro desfaz a tentativa
      await trans.rollback();
    }
  },
  update: async (req, res) => {
    try {
      const idUser = req.params.id;
      const { name, email, birthdate, register_number, gender } = req.body;

      const user = await User.findByPk(idUser, {
        include: [{ model: Patient, as: "patient" }],
      });

      user.name = name;
      user.email = email;
      await user.save();

      const dataPacient = {
        register_number: register_number,
        gender: gender,
        birthdate: birthdate,
      };

      await Patient.update(dataPacient, { where: { id: user.patient.id } });

      const userUpdate = await User.findByPk(idUser, {
        include: [{ model: Patient, as: "patient" }],
      });

      return res
        .status(200)
        .json({ data: { user: userUpdate }, message: "updated with success" });
    } catch (error) {
      console.log(error.message);
    }
  },
  delete: async (req, res) => {
    try {
      const idUser = req.params.id;

      const user = await User.findByPk(idUser);
      user.status_active = 0;
      await user.save();

      return res
        .status(200)
        .json({ data: { user: user }, message: "deleted with success" });
    } catch (error) {
      console.log(error.message);
    }
  },
  restore: async (req, res) => {
    try {
      const idUser = req.params.id;

      const user = await User.findByPk(idUser);
      user.status_active = 1;
      await user.save();

      return res
        .status(200)
        .json({ data: { user: user }, message: "restore with success" });
    } catch (error) {
      console.log(error.message);
    }
  },
};
