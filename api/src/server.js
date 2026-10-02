const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    projeto: 'DevJobs API',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`DevJobs API rodando em http://localhost:${PORT}`);
});

const vagasRoutes = require('./routes/vagas.routes');
app.use('/api/vagas', vagasRoutes);