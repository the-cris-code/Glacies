var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});
router.get("/listarUltimaEmpresa", function (req, res) {
    usuarioController.listarUltimaEmpresa(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar_empresa", function (req, res) {
    usuarioController.cadastrar_empresa(req, res);
});

router.get("/empresaslista", function(req,res){
    usuarioController.listEmpresa(req,res);
});

router.post("/cadastrar_funcionario", function (req, res) {
    usuarioController.cadastrar_funcionario(req, res);
});
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;