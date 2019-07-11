import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Welcome to Way Farer API',
  });
});

// app.use('/api/v1/auth', Users);
// app.use('/api/v1/accounts', Accounts);
// app.use('/api/v1/transactions', Transactions);

app.use((req, res, next) => {
  const error = new Error('resource not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    status: error.status || 500,
    error: error.message,
  });
});

export default app;