module.exports = (sequelize, DataTypes) => {
	return sequelize.define('User', {
		fullName: { type: DataTypes.TEXT, field: 'full_name' },
		email: DataTypes.TEXT,
		password: DataTypes.TEXT,
		isEmailConfirmed: { type: DataTypes.BOOLEAN, field: 'is_email_confirmed' },
		token: DataTypes.UUID,
		emailConfirmToken: { type: DataTypes.UUID, field: 'email_confirm_token' }
	}, {
		tableName: 'user',
		paranoid: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: 'deleted_at',
	});
};