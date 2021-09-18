const { Router } = require('express');
const path = require("path");
const router = Router()

const ruta = path.join(__dirname, "../public/");

router.get( '/', (req,res) => {
    res.sendFile(ruta + '/index.html')
});
router.get( '/index', (req,res) => {
    res.sendFile(ruta + 'index.html')
});
router.get( '/login', (req,res) => {
    res.sendFile(ruta + 'login.html')
});
router.get( '/usuarios', (req,res) => {
    res.sendFile(ruta + 'usuarios.html')
});
router.get( '/proveedores', (req,res) => {
    res.sendFile(ruta + 'proveedores.html')
});
router.get( '/compras', (req,res) => {
    res.sendFile(ruta + 'compras.html')
});
router.get( '/clientes', (req,res) => {
    res.sendFile(ruta + 'clientes.html')
});
router.get( '/pagos', (req,res) => {
    res.sendFile(ruta + 'pagos.html')
});
router.get( '/remitos', (req,res) => {
    res.sendFile(ruta + 'remitos.html')
});
router.get( '/productos', (req,res) => {
    res.sendFile(ruta + 'productos.html')
});

// rutas a backend clientes
router.get( '/panelClientes/:id', (req,res) => {
    res.render('panelClientes')
});


module.exports = router;