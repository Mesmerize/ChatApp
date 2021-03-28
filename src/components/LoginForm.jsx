import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': 'b7799fa4-cdab-4dff-b1f8-0c19f4a34cf6', 'User-Name': username, 'User-Secret': password }

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            // Login successful => chatengine loads messages

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            // Error => try again with correct info
            setError('Sheeeeesh, Incorrect credentials');
        }
    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting!</span>
                        </button>
                    </div>
                    <div className='cent'>
                        <h2 className='error'>{error}</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
