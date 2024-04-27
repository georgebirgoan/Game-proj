const express = require("express");
const axios = require("axios");
const cors = require("cors");
const cookieParser=require("cookie-parser");
const app = express();


app.use(cookieParser());
    
app.use(cors({
  origin: 'http://localhost:5173',
}));

const API_KEY = '2948fdf4d7be470fb2eaa5206b6d404f';
const BASE_URL = 'https://api.rawg.io/api/games';
app.get("/api/rawg/games", async (req, res) => {
  try {
    const { genres, platforms, sortOrder, searchText } = req.query;
    console.log("in server");

    const params = {
      key: API_KEY,
      genres: genres,
      platforms: platforms,
    };
    
    console.log(params.sortOrder);


    const response = await axios.get(BASE_URL, { params });
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
