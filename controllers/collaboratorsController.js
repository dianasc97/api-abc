const { Router } = require('express');
const { Collaborator } = require('../models');

const router = Router();

function validateRegistration(registration) {
  let complete = ""
  if(registration.length < 16) {
    for(let i = 0; i < 16 - registration.length; i++) {
      complete = complete + "0"
    }
    return complete + registration;
  }
  else {
    return registration;
  }
}

router.get('/', async (req, res) => {
  const collaborator = await Collaborator.findAll();
  res.status(200).json(collaborator);
});

router.get('/:id', async (req, res) => {
  const collaborator = await Collaborator.findByPk(req.params.id);
  res.status(200).json(collaborator);
});

router.post('/', async (req, res) => {
  let { name, id, pis, registration} = req.body;

  registration = validateRegistration(registration);

  const newCollaborator = Collaborator.create({ name, pis, registration });

  res.status(200).json({ message: 'cadastrado com sucesso' });
});

router.delete('/:id', async (req, res) => {
  await Collaborator.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: 'excluido com sucesso' });
});

router.put('/:id', async (req, res) => {
  const { name, pis, registration } = req.body;

  await Collaborator.update(
    { name, pis, registration },
    {
      where: { id: req.params.id },
    }
  );

  res.status(200).json({ message: 'atualizado com sucesso' });
});

module.exports = router;