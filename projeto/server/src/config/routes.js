const express = require('express');

module.exports = server => {
    const router = express.Router();
    server.use('/api', router);

    const cursosService = require('../api/cursos/service');
    cursosService.register(router, '/cursos');

    const contatoService = require('../api/contatos/service');
    contatoService.register(router, '/contatos');

    const compromissoService = require('../api/compromissos/service');
    compromissoService.register(router, '/compromissos');
}