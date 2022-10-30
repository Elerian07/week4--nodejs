import q from '../../../DB/connecttion.js'
const getAllUsers = (req, res) => {

    q.execute('select * from users', (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }

    })
}

const addUsers = (req, res) => {
    let { Name, Age, Email, Password } = req.body
    q.execute(`INSERT INTO users (Name,Age,Email,Password) VALUES ( '${Name} ' ,'${Age} ' , ' ${Email} ' , '${Password}')`, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }

    })
}


const updatUser = (req, res) => {
    let { ID } = req.params;
    let { Name } = req.body;


    q.execute(`UPDATE users SET Name= '${Name}'  WHERE ID ='${ID}'`, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const deleteUser = (req, res) => {
    let { ID } = req.params;
    q.execute(`DELETE FROM users WHERE ID = '${ID}'`, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const getUser = (req, res) => {
    let { searchKey } = req.query;
    q.execute(`select * from users where ID = '${searchKey}'`, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } if (result.affectedraw) {
            res.json({ message: "Done", result })
        } else {
            res.json({ message: "invalid id", result })
        }
    })

}

const search = (req, res) => {

    let { searchKey } = req.query;
    q.execute(`select * from users where Name like '${searchKey}%'`, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}



const searchAge = (req, res) => {

    let { searchKey } = req.query;
    let { Key } = req.query;


    q.execute(`SELECT * FROM users WHERE Age BETWEEN ${searchKey} AND ${Key} `, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const searchOld = (req, res) => {

    let { searchKey } = req.query;
    q.execute(`SELECT * FROM users WHERE Age > ${searchKey} `, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}



const searchYoung = (req, res) => {

    let { searchKey } = req.query;
    q.execute(`SELECT * FROM users WHERE Age < ${searchKey} `, (err, result) => {

        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const getAllProducts = (req, res) => {

    q.execute('SELECT * FROM users INNER JOIN products on users.ID = products.userID ', (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }

    })
}

const addProduct = (req, res) => {
    let { name, price, description, userID } = req.body
    q.execute(`INSERT INTO products (name, price, description, userID) VALUES ( '${name} ' ,'${price} ' , ' ${description} ' , '${userID}')`, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }

    })
}

const deleteProduct = (req, res) => {
    let { ID } = req.params;
    q.execute(`DELETE FROM products WHERE ID = '${ID}'`, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const updatProduct = (req, res) => {
    let { ID } = req.params;
    let { Name } = req.body;


    q.execute(`UPDATE products SET Name= '${Name}'  WHERE ID ='${ID}'`, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const searchProduct = (req, res) => {

    let { searchKey } = req.query;
    q.execute(`select * from products where Name = '${searchKey}'`, (err, result) => {
        if (err) {
            res.json({ message: "sql error", err })
        } else {
            res.json({ message: "Done", result })
        }
    })
}

const getProducts_USers = (req, res) => {
    let { ID } = req.params;

    q.execute(`select u.ID as u_id , u.Name as u_name , u.Email as u_email , p.id,p.name,p.price,p.description
    from users as u INNER join products as p on u.id = p.userID WHERE p.id = '${ID}' `, (err, result) => {
        if (err) {
            res.json({ message: "sql Error", err })
        } else {
            res.json({ message: "Done", result })
        }

    })
}
export {
    getAllUsers,
    addUsers,
    updatUser,
    deleteUser,
    getUser,
    search,
    searchAge,
    searchOld,
    searchYoung,
    getAllProducts,
    addProduct,
    deleteProduct,
    updatProduct,
    searchProduct,
    getProducts_USers,
}
