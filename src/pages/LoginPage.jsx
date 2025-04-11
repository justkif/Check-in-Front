import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginUser from '../apis/loginUser';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            localStorage.setItem('token', await loginUser(username, password));
            setError('');
            navigate(`/`);
        } catch (err) {
            setError(err);
        }
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <form onSubmit={handleLogin} className='bg-white p-6 rounded shadow-lg'>
                <div>
                    <label className='block font-medium'>Username</label>
                    <input 
                        type='text' 
                        value={username} 
                        onChange={(text) => setUsername(text.target.value)} 
                        className='p-2 border rounded mt-1 w-full'
                        placeholder='Enter your username'                         
                        required 
                    />
                </div>
                <div>
                    <label className='block font-medium'>Password</label>
                    <input 
                        type='password' 
                        value={password} 
                        onChange={(text) => setPassword(text.target.value)} 
                        className='p-2 border rounded mt-1 w-full'
                        placeholder='Enter your password'                           
                        required 
                    />
                </div>
                {error && <p className='text-red-500'>{error}</p>}
                <button 
                    type='submit' 
                    className='w-full py-2 px-4 bg-blue-500 text-black font-semibold rounded mt-4'
                    >Submit
                </button>
            </form>
        </div>
    );
}
