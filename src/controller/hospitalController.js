const express = require('express');
import * as doctorService from '../service/doctor';

const router = express();

router.get('/getDoctors', (req, res, next) => {
  doctorService
    .getAllUsers()
    .then(data => res.status(201).send({ data: data.rows }))
    .catch(err => next(err));
});

export default router;
