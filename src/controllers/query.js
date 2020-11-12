const querys = {
    CREATE_USER: `INSERT INTO users (name, email) VALUES($1, $2)`,
    DELETE_USER: `DELETE FROM users WHERE id = $1`,
    ALL_USERS: `SELECT * FROM users`,
    USER_BY_ID: `SELECT * FROM users WHERE id = $1`,
    UPDATE_USER: `UPDATE users SET name=$1, email=$2 WHERE id = $3`
}


module.exports = querys;