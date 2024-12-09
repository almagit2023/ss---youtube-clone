import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaYoutube, FaSearch } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Video from '../Video/Video';
import SideBar from '../Sidebar/SideBar';
import axios from 'axios';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Fetch videos from API
  const fetchVideos = (params = {}) => {
    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: { part: 'id,snippet', type: 'video', maxResults: '50', ...params },
      headers: {
        'x-rapidapi-key': process.env.RAPID_API_YT_KEY,
        // 'e8ce9c09b4mshccfe3fbbc62f864p1630e1jsn68bbae2d8317',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response) => {
        setVideos(response.data.items); // Update the state with fetched videos
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Fetch videos when the selected category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      fetchVideos(); // Fetch all videos for the default category
    } else {
      fetchVideos({ q: selectedCategory }); // Fetch videos based on category
    }
  }, [selectedCategory]);

  // Fetch videos when the search term changes
  const handleSearch = () => {
    if (searchTerm.trim() === '') return; // Ignore empty searches
    fetchVideos({ q: searchTerm });
  };

  return (
    <div>
      <Row className='d-flex border-bottom'>
        <Col lg={2} xs={10} md={3} className='d-flex align-items-center justify-content-start' style={{ minHeight: '5rem' }}>
          <FaYoutube style={{ color: 'red', fontSize: '4.5rem' }} />
          <p className='m-2' style={{ fontSize: '1.2rem' }}>YOU TUBE</p>
        </Col>
        <Col lg={10} xs={10} md={9} className='d-flex align-items-center justify-content-end' style={{ minHeight: '5rem' }}>
          <input
            type="text"
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='p-2 rounded border-0 m-2'
          />
          <button className='p-2 rounded border-0 m-2' id='searchBtn' onClick={handleSearch}>
            <FaSearch />
          </button>
        </Col>
      </Row>
      <Row className='d-flex border-right'>
        <Col lg={2} xs={10} md={3}>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </Col>
        <Col lg={10} xs={10} md={9} className='text-center'>
          <p className='h1'>{selectedCategory} Videos</p>
          <Video videos={videos} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
