import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <div className="container mx-auto flex flex-col items-center justify-center space-y-2">
                <div>
                    <Link to="/about" className="px-4 py-2 hover:text-gray-300">About Us</Link>
                    <Link to="/privacy" className="px-4 py-2 hover:text-gray-300">Privacy Policy</Link>
                    <Link to="/terms" className="px-4 py-2 hover:text-gray-300">Terms of Service</Link>
                </div>
                <div>
                    © 2024 Rachayitha. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
