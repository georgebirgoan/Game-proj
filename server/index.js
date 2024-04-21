import express from 'express'
import axios from 'axios';
import cors from 'cors'

const app = express();
app.use(cors());

const API_KEY = '2948fdf4d7be470fb2eaa5206b6d404f';
const BASE_URL = 'https://api.rawg.io/api';


app.get('/api/rawg/games', async (req, res) => {
  try {
    console.log("ajunge in games")
    const response = await axios.get(`${BASE_URL}/games`, {//sau games
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
