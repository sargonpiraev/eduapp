module.exports = (sequelize, DataTypes) => {
	return sequelize.define('User', {
		fullName: { type: DataTypes.TEXT, field: 'full_name' },
		email: DataTypes.TEXT,
		password: DataTypes.TEXT,
		isEmailConfirmed: DataTypes.BOOLEAN,
		token: DataTypes.UUID
	}, {
		tableName: 'user',
		paranoid: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: 'deleted_at',
	});
};