const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  //it uses the kubernates service names
  //posts
  axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
    console.log(err.message);
  });
  //comments
  axios.post('http://comments-srv:4001/events', event).catch((err) => {
    console.log(err.message);
  });
  //query
  axios.post('http://query-srv:4002/events', event).catch((err) => {
    console.log(err.message);
  });
  //moderation
  axios.post('http://moderation-srv:4003/events', event).catch((err) => {
    console.log(err.message);
  });

  //pre-nodejs 15
  // axios.post('http://posts-cluster-srv:4000/events', event);
  // axios.post('http://localhost:4001/events', event);
  // axios.post('http://localhost:4002/events', event);
  // axios.post('http://localhost:4003/events', event);

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
