module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define('Pet', {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        species: DataTypes.STRING,
        origin: DataTypes.STRING,
        color: DataTypes.STRING,
        weight: DataTypes.STRING,
        character: DataTypes.STRING,
        price: DataTypes.STRING
    })
    return Pet;
   }