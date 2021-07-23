module.exports = (sequelize, type) => {
    return sequelize.define('___table_name____', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },


    }, {
      timestamps: false
    })
}
