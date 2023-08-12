const clienteController = require('../controller/clienteController');
const express = require('express');
const dbconfig = require('../database/dbconfig')
const router = express.Router();

/* TODO: METODO GET */
router.get('/listar', async (req, res) => {
    try {
        const data = await clienteController.getClientes()
        console.log(data)
        res.status(200).json(data)
    } catch (error) {
        throw error
    }
})

/* TODO: METODO POST */
router.post('/registrar', async (req, res) => {
    try {
        const data = await clienteController.postClientes(req.body)
        console.log(data)
        res.status(200).json(req.body)
    } catch (error) {
        throw error
    }
})

router.get('/buscar/:id', async (req, res) => {
    const id = req.params.id;
    const data = await clienteController.finById(id)
    res.status(200).json(data)
})

module.exports = router;

/* 
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

module.exports = app; */