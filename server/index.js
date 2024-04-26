const express=require("express");
const axios=require("axios");
const cors=require("cors");

const app = express();
app.use(cors());

const API_KEY = '2948fdf4d7be470fb2eaa5206b6d404f';
const BASE_URL = 'https://api.rawg.io/api/games';


app.get("/",(req,res)=>{
  res.send("Server is running");
})

app.get('/api/rawg', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {//sau games
      params: { key: API_KEY },
    });
    res.json(response.data);

  } catch (error) {
    console.error('Error fetching data from Rawg API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
