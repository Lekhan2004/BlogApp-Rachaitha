import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/slices/authSlice';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const {isAuthenticated, user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">Rachayitha</Link>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {/* SVG Icon */}
                    </button>
                </div>
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
                    {isAuthenticated ? (
                        <>
                            <Link to="/blogs" className="block px-4 py-2 rounded hover:bg-gray-700">View Posts</Link>
                            <Link to="/createblog" className="block px-4 py-2 rounded hover:bg-gray-700">Create Post</Link>
                            <button onClick={handleLogout} className="px-4 py-2 rounded hover:bg-gray-700">Logout</button>
                            <Link to="/user">{user.user}</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/about" className="block px-4 py-2 rounded hover:bg-gray-700">About</Link>
                            <Link to="/login" className="block px-4 py-2 rounded hover:bg-gray-700">Login</Link>
                            <Link to="/signup" className="block px-4 py-2 rounded hover:bg-gray-700">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;
