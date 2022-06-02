const express = require('express');

const producerController=require('../Controllers/producer.js');
const router = express.Router();

router.post('/producer',producerController.postcreateProducer);
module.exports  = router;
