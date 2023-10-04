import React, { useState } from 'react';
import axios from 'axios';
import "../styles/chat.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Chatbot = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiKey = "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"; // Replace this with your actual API key

    const apiUrl = 'https://api.openai.com/v1/chat/completions'; // Use the Chatbot API endpoint

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                apiUrl,
                {
                    messages: [
                        { role: 'system', content: 'You are a helpful assistant.' },
                        { role: 'user', content: inputText },
                    ],
                    model: 'gpt-3.5-turbo-0613', // Specify the model you want to use (e.g., 'gpt-3.5-turbo')
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );

            setOutputText(response.data.choices[0].message.content.trim());
        } catch (error) {
            setError('Error making the request. Please try again later.');
            console.error('Error making the request:', error);
            console.error('Error response:', error.response.data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="chatbot-container p-4 bg-light rounded shadow">
                        <h1 className="mb-4">Kisan Sathi</h1>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                value={inputText}
                                onChange={handleInputChange}
                                placeholder="Type your message..."
                                rows="4"
                                className="form-control mb-3"
                                disabled={loading}
                            />
                            <button type="submit" className="btn btn-success" disabled={loading}>
                                Send
                            </button>
                        </form>
                        {loading && <p className="mt-3">Loading...</p>}
                        {error && <p className="mt-3 text-danger">Error: {error}</p>}
                        {outputText && (
                            <div className="response mt-3 p-3 bg-white rounded shadow">
                                <h3>Response:</h3>
                                <p>{outputText}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;