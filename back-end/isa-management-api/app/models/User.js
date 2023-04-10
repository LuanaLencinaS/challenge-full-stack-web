module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define('User',{
            id: {
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            type_user: {
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:1
            },
            name:{
                type:DataTypes.STRING(120),
                allowNull:false
            },
            email:{
                type:DataTypes.STRING(120),
                allowNull:false
            },
            password:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            status_active:{
                type:DataTypes.INTEGER,
                allowNull:false,
                defaultValue:1
            },
        },{
            tableName:'users'
        }
        
    )
    User.associate = (listModels)=>{
        User.hasOne(listModels.Patient,{
            foreignKey:'id_user',
            as:'patient'
        })
    }
    return User;
}