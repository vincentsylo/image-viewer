import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/status', (req, res) => {
  res.json({ success: true });
});

app.listen(8081);
