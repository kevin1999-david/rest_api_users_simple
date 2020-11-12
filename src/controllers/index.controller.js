const { Pool } = require('pg');
const querys = require('./query');
const query = require('./query');
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'kevin',
    database: 'usersdb',
    port: '5432'
})

const getUsers = async(req, res) => {
    const usersResponse = await pool.query(query.ALL_USERS);
    res.json(usersResponse.rows).status(200);
};

const getUserById = async(req, res) => {
    const { id } = req.params;
    const { rows: user } = await pool.query(query.USER_BY_ID, [id]);
    return res.json({ user: user });
}

const updateUser = async(req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const result = await pool.query(query.UPDATE_USER, [name, email, id]);
    console.log(result);
    res.json({ message: 'Updated user Succesfully' });
}

const deleteUser = async(req, res) => {
    const { id } = req.params;
    const result = await pool.query(query.DELETE_USER, [id]);
    res.json({ 'User deleted': id });
}

const createUser = async(req, res) => {
    const { name, email } = req.body;

    const response = await pool.query(querys.CREATE_USER, [name, email]);

    res.json({
        'message': 'User Added Successfully',
        'body': {
            'user': { name, email }
        }
    }).status(200);
}


const getUsers2 = (req, res) => {
    pool.query('SELECT * FROM users', (req2, response) => {
        const users = response.rows;
        res.json(users).status(200);
    });

}

module.exports = {
    getUsers,
    getUsers2,
    createUser,
    getUserById,
    deleteUser,
    updateUser
}