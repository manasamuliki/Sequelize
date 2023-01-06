module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("reviews", {
        rating: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
        
    })
    return Review
}