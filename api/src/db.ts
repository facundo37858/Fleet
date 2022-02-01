//generar nuestra conexion con la db!
require('dotenv').config();
import { Sequelize } from 'sequelize-typescript';
import config from '../lib/config';
const {
	DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
  } = process.env;
   
config; 
export const sequelize = process.env.NODE_ENV === "production"?
new Sequelize({
   database: "dag2dar01hgifc",
   dialect: "postgres",
   host: "ec2-54-208-139-247.compute-1.amazonaws.com",
   port: 5432,
   username:  "nrpptykgyvluzb" ,
   password: "e7994fdbdb17240c130651e39b5a7aeb4dd4624de7f8e322615f984d7bc55f17",
   models: [__dirname + '/models'],
   pool: {
	 max: 3,
	 min: 1,
	 idle: 10000,
   },
   dialectOptions: {
	 ssl: {
	   require: true,
	   // Ref.: https://github.com/brianc/node-postgres/issues/2009
	   rejectUnauthorized: false,
	 },
	 keepAlive: true,
   },
   ssl: true,
 })
:new Sequelize({
	dialect: 'postgres',
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	username: process.env.DB_USER,
	storage: ':memory:',
	models: [__dirname + '/models'],
});


