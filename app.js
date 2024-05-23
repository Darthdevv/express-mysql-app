import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
import revenueRoutes from './routers/revenue.routes.js'
import memberRoutes from './routers/member.routes.js'
import trainerRoutes from './routers/trainer.routes.js'

app.use(cors());
app.use('/api/revenues', revenueRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/members', memberRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('app is rnning on port :', PORT)
})