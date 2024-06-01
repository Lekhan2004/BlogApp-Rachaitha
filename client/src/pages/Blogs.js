import React from 'react';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Blogs = () => {

const [blogsData, setBlogsData] = useState([]);
const navigate = useNavigate();
// const [comment, setComment] = useState(false);
useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/blogs/allblogs");
      setBlogsData(response.data); // Assuming the server returns the blogs array
      console.log(response.data); // This will log the fetched blogs data
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
    }
  };

  fetchBlogs();
}, []); 

// const handleComment = () =>{
//   setComment(!comment);

// }
  if (blogsData.length === 0) {
    return <div className="text-center mt-10 text-xl">No blogs yet.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
        blogsData.map((blog) => (
          <div key={blog._id} className="bg-white rounded-lg p-3 border-2 border-black border-opacity-50 shadow-xl overflow-hidden" 
          onClick={(e) => 
          {e.stopPropagation();
          navigate(`/blogs/${blog._id}`,{state:blog})}}>
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <div className="flex items-center">
                <img src={blog.author.profileImg} alt={blog.author.user.user} className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="text-sm font-semibold">{blog.author.user.user}</p>
                  <p className="text-xs text-gray-500">2 min ago</p>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
