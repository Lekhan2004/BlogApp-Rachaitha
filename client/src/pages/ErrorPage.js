import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found.</h1>
      <p className="text-lg text-gray-600 mb-8">We can't seem to find the page you're looking for.</p>
      <Link to="/" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
