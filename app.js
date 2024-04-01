const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from the server', app: 'natours' });
});

app.post("/",(req,res)=>{
  res.send("send data to the end point.......")
})

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});
