const express = require('express');
const router = express.Router();
const controller = require('../controller/livroController');

router.get('/nomeLivro', controller.getAllNomeLivro)
router.post('/livro', controller.postLivros)
router.delete('/:id', controller.deleteLivro)
router.get('/:genero', controller.getLivrosByGenero)


module.exports = router;