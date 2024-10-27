import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Agent() {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const accessKey = 'YOUR_ACCESS_KEY'; // Replace with your Unsplash Access Key
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

    try {
      const response = await axios.get(url);
      setImages(response.data.results);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <div>
        <h1>Search Images</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a place"
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {images.map(image => (
            <li key={image.id}>
              <img src={image.urls.small} alt={image.description} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
