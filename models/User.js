// a sequelize model for the User table with the following attributes: id, username, password, created_at, updated_at and deleted_at

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define(
		"User",
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			createdAt: DataTypes.DATE,
			updatedAt: DataTypes.DATE,
			deletedAt: DataTypes.DATE,
		},
		{
			classMethods: {
				associate: function (models) {
					User.hasMany(models.Post);
				},
			},
		}
	);

	return User;
};
