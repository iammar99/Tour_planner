import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ReactMarkdown from 'react-markdown';
import '../SCSS/Pages/agent.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Agent = () => {
    const [destination, setDestination] = useState('');
    const [response, setResponse] = useState('');
    const [images, setImages] = useState({});
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef(null);

    const handleInputChange = (e) => {
        setDestination(e.target.value);
    };

    const handleChat = async () => {
        if (!destination) {
            return;
        }
        setLoading(true);
        try {
            const result = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        { role: "system", content: "You are a helpful travel guide." },
                        { role: "user", content: `I want to travel to ${destination}. Can you suggest the best places to visit, top restaurants, and activities I can enjoy there?` },
                    ],
                }),
            });

            const data = await result.json();
            const responseText = data.choices[0].message.content;
            setResponse(responseText);
            setLoading(false);
            setDestination("");
            await fetchImages(responseText);
        } catch (error) {
            setResponse("Error occurred. Please try again.");
        } finally {
            setDestination("");
            setLoading(false);
        }
    };

    const fetchImageWithRetry = async (keyword, retries = 3) => {
        const unsplashAccessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY; // Unsplash API key
        try {
            const result = await fetch(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(keyword)}&per_page=1&client_id=${unsplashAccessKey}`
            );

            if (!result.ok) {
                throw new Error(`Error: ${result.status}`);
            }

            const data = await result.json();
            if (data.results && data.results.length > 0) {
                const firstResult = data.results[0];
                return { keyword, imageUrl: firstResult.urls.small || '' }; // Use the appropriate size of the image
            } else {
                return { keyword, imageUrl: '' };
            }
        } catch (error) {
            console.error(`Error fetching image for ${keyword}:`, error);
            if (retries > 0) {
                await new Promise(resolve => setTimeout(resolve, 60000)); // Wait for 60 seconds before retrying
                return fetchImageWithRetry(keyword, retries - 1);
            }
            return { keyword, imageUrl: '' };
        }
    };

    const fetchImages = async (text) => {
        const keywords = extractKeywords(text);
        const imagePromises = keywords.map(keyword => fetchImageWithRetry(keyword));

        const imagesData = await Promise.all(imagePromises);
        const imagesObject = imagesData.reduce((acc, item) => {
            acc[item.keyword.trim()] = item.imageUrl; // Trim whitespace for matching
            return acc;
        }, {});

        setImages(imagesObject);
    };

    const extractKeywords = (text) => {
        const lines = text.split('\n');
        return lines
            .filter(line => line.startsWith('1.') || line.startsWith('-') || line.includes(':'))
            .map(line => line.replace(/^\d+\.\s|-/, '').trim().split(':')[0]);
    };

    const renderers = {
        listItem: ({ children }) => {
            const keyword = children[0]?.props?.children[0]?.trim() || ''; // Trim for safety
            const imageUrl = images[keyword];

            return (
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                    <span>{children}</span>
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={keyword}
                            style={{ width: '100px', marginLeft: '10px', display: 'block', height: 'max-content', borderRadius: '12px' }}
                            onError={(e) => {
                                console.warn(`Failed to load image for ${keyword}. Error: ${e}`);
                                e.target.style.display = 'none';
                            }}
                        />
                    ) : (
                        <span style={{ marginLeft: '10px', color: 'red' }}>Image not found</span>
                    )}
                </li>
            );
        },
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleChat();
        }
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [response]);


    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can set the duration here
    }, []);

    return (
        <div className='agent-page'>
            <Link to={"/"}>
                <img src={logo} style={{ width: "60px", margin: "41px 0px 11px 41px", borderRadius: "50%" }} alt="logo" />
            </Link>
            <main>
                <h1 className={`text-center my-3 fw-bolder text-light d-${response.length === 0 ? "block" : "none"}`}>
                    Your Virtual Tour Guide
                </h1>
                <p className={`chat-msg d-${response?"none":""}`} data-aos="fade-right">
                    Hello ! How are you ? Please tell me your destination to travel
                </p>
                <div className="chat-container" ref={chatContainerRef}>
                    <ReactMarkdown components={renderers} style={{ color: 'white' }}>{response}</ReactMarkdown>
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        onKeyPress={handleKeyPress}
                        value={destination}
                        onChange={handleInputChange}
                        placeholder="Enter your travel destination..."
                        className="form-control"
                    />
                    <button onClick={handleChat} disabled={loading}>
                        {
                            loading ?
                                <i className="spinner-grow spinner-grow-sm"></i>
                                :
                                "Send"
                        }
                    </button>
                </div>
            </main>
        </div>
    );
}

export default Agent;
