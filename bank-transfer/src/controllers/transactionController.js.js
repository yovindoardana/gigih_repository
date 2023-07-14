const {transfer} = require('../services/transactionService');
const {getCustomer, getAllCustomers} = require('../models/customerModel');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/transactions', (req, res) => {
  try {
    const {sourceAccount, destinationAccount, amount} = req.body;

    if (!sourceAccount || !destinationAccount || !amount) {
      throw new Error('Insufficient Parameter');
    }

    transfer(sourceAccount, destinationAccount, amount);
    res.status(201).json({message: 'Transaction created succesfully'});
  } catch (e) {
    res.status(500).json({error: e.message});
  }
});

//Uncomment below code if you want to test get customer. NOTE: this is not the right separation of concerns since getcustomer is handled in transcationController.
//Below code intended just for validating our transfer logic, not demonstrate how layered architecture should be. This is not a good example to combine customer handler and transaction in the same file transactionController.
//Don't forget to uncomment the import part
// app.get('/customers/:id', (req, res) => {
//   const customerId = req.params.id;

//   const customer = getCustomer(customerId);

//   if (!customer) {
//     return res.status(404).json({error: 'Customer not found'});
//   }

//   res.json(customer);
// });

app.get('/customers', (req, res) => {
  res.json(getAllCustomers());
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
