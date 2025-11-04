import express from 'express';
import postRoutes from './routes/postRoutes';
import cors from 'cors';
import dotenc from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('api/posts', postRoutes)

app.listen(port);

app.get('/', (req, res) => {
    res.send('hello world');
});

console.log('server on port', port);