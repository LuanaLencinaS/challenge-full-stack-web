module.exports = (sequelize, DataTypes)=>{
    const Patient = sequelize.define('Patient',{
            id: {
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            id_user: {
                type:DataTypes.INTEGER,
                allowNull:false
              },
              register_number:{
                type:DataTypes.STRING(120),
                allowNull:false
              },
              gender:{
                type:DataTypes.STRING(120),
                allowNull:false
              },
              birthdate:{
                type:DataTypes.DATEONLY,
                allowNull:false
              },
        },{
            tableName:'patients'
        })
        Patient.associate = (listModels)=>{
            Patient.belongsTo(listModels.User,{
                foreignKey:'id_user',
                as:'user'
            })
        }
    return Patient;
}