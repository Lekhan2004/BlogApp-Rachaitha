import React, { useEffect, useState, } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const BlogItem = () => {
  // const { id } = useParams();
  // const [blog, setBlog] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const { state } = useLocation();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!blog) {
  //   return <div>No blog found</div>;
  // }

  return (
    // <div className="max-w-3xl mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
    //   <img src={blog.image} alt={blogNew.title} className="w-full h-64 object-cover rounded-t-lg" />
    //   <div className="p-4">
    //     <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
    //     <p className="text-gray-700 mb-4">{blog.description}</p>
    //     <div className="flex items-center mt-4">
    //       <img
    //         src={blog.author.profileImg}
    //         alt={blog.author.user.user}
    //         className="w-12 h-12 rounded-full mr-4"
    //       />
    //       <div>
    //         <p className="text-lg font-semibold">{blog.author.user.user}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      {state.title}
    </div>
  );
};

export default BlogItem;
