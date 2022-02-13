import cors from 'cors';
import Express from 'express';

import routes from 'routes';
import getEnv from 'utils/getEnv';

const app = new Express();
const PORT = getEnv('PORT') || 7000;

app.use(cors());
app.use(Express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routes);

app.listen(PORT, () => console.log(`backend listening on port ${PORT}!`));
