let customers = [
  {
    customerId: '12345',
    name: 'John Doe',
    email: 'johndoe@example.com',
    balance: 5000.0
  },
  {
    customerId: '67890',
    name: 'John da',
    email: 'johnda@example.com',
    balance: 5000.0
  }
];

function getAllCustomers() {
  return customers;
}

function getCustomer(customerId) {
  return customers.find((c) => c.customerId == customerId);
}

function createCustomer(name, email, initialBalance) {
  let newCustomer = {
    customerId: generateCustomerId(),
    name: name,
    email: email,
    balance: initialBalance
  };

  return newCustomer;
}

function generateCustomerId() {
  return Math.random().toString(10).substring(2, 6);
}

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer
};
