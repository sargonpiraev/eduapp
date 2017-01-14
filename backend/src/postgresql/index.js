var sequelize = require('sequelize');

var postgresql = new sequelize('postgres://postgres@localhost:5432/postgres', {
	dialect: 'postgres',
	logging: false
});

postgresql.import('./model/user');

Object.keys(postgresql.models).forEach((modelName) => {
	let model = postgresql.models[modelName];
	model.hasOwnProperty('associate') && model.associate(postgresql.models);
});

module.exports = postgresql;