const dbconfig = require('../database/dbconfig')

async function getClientes() {
    return new Promise((resolve, reject) => {
        dbconfig.query('SELECT * FROM tbl_clientes', (err, result) => {
            err ? reject(err) : resolve(result)
        })

    })
}

async function postClientes(data) {
    return new Promise((resolve, reject) => {
        dbconfig.query('CALL sp_insertclient(?,?,?,?,?,?)', [data.id_clie, data.nom_clie, data.ape_clie, data.cel_clie, data.fech_nac_clie, data.id_autos], (err, result) => {
            err ? reject(err) : resolve(result)
        })

    })
}
async function finById(id) { console.log(id)
    return new Promise((resolve, reject) => {
        dbconfig.query('SELECT * FROM tbl_clientes WHERE id_clie = ?', [id], (err, result)=>{
            result ? resolve(result) : reject(err)
        })

    })
}

const putClientes = async (req, res) => {
    const [rows] = await dbconfig.query('UPDATE tbl_clientes SET nom_clie = ?, ape_clie = ?, cel_clie = ?, fech_nac_clie = ?, id_autos = ? WHERE id_clie = ?', [req.body.nom_clie, req.body.ape_clie, req.body.cel_clie, req.body.fech_nac_clie, req.body.id_autos, req.params.id_clie])
    res.json(rows)
}

const deleteClientes = async (req, res) => {
    const [rows] = await dbconfig.query('DELETE FROM tbl_clientes WHERE id_clie = ?', [req.params.id_clie])
    rows.affectedRows == 1 ? res.json({ success: true, message: 'Cliente eliminado' }) : res.json({ success: false, message: 'Cliente no encontrado' })
    res.json(rows)
}

module.exports = {
    getClientes: getClientes,
    postClientes: postClientes,
    putClientes: putClientes,
    deleteClientes: deleteClientes,
    finById: finById
}