import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('week5', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export const table = () => {
    return sequelize.sync().then(result => {
        console.log('connected');
    }).catch(err => {

    })

}