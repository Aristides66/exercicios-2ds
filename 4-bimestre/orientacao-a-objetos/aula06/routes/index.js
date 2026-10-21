const express = require('express');
const router = express.Router();

const alunosRouter = require('./alunos');

router.get('/', (req, res) => {
  res.status(200).json({ mensagem: "API da Escola" });
});

router.use('/alunos', alunosRouter);

module.exports = router;