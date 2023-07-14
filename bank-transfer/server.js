// const express = require('express');
// const app = express();
// const {getAllCustomer, getCustomer, createCustomer} = require('./src/models/customer');

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//   res.status(200).send('Bank App is Ready');
// });

// app.get('/customers', getAllCustomer);
// app.get('/customer/:id', getCustomer);
// app.post('/customer', createCustomer);

// app.post('/transactions', (req, res) => {
//   try {
//     const {sourceAccount, destinationAccount, amount} = req.body;
//     if (!sourceAccount || !destinationAccount || !amount) {
//       throw new Error('Insufficient Parameter');
//     }
//     transfer(sourceAccount, destinationAccount, amount);
//     res.status(201).json({message: 'Transaction created successfully'});
//   } catch (e) {
//     //For example we'll always use code 500 (Internal Server Error)
//     res.status(500).json({error: e.message});
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
