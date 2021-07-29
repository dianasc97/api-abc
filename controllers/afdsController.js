const { Router } = require('express');
const { Afd } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const afd = await Afd.findAll();
  res.status(200).json(afd);
});

router.get('/:id', async (req, res) => {
  const afd = await Afd.findByPk(req.params.id);
  res.status(200).json(afd);
});

router.post('/', async (req, res) => {
  let { afd } = req.body;

  for(let i = 0; i < afd.length; i=i+36){
    let number = afd.substr(0+i,9);
    let fixed = afd.substr(9+i,1);
    let date = afd.substr(10+i,8);
    let hour = afd.substr(18+i,4);
    let pis = afd.substr(22+i,12);

    const newafd = Afd.create({ number, fixed, date, hour, pis });
  }

  res.status(200).json({ message: 'cadastrado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  await Afd.destroy({
    where: {
      pis: req.params.id,
    },
  });

  res.status(200).json({ message: 'excluido com sucesso' });
});

module.exports = router;