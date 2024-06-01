import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../assests/hero3.jpg'
import { useSelector } from 'react-redux';
function CreateBlog() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    // const [image, setImage] = useState(null);

    const handleSubmit = async () =>{
      const formData = {
        "title": title,
        "description": description,
        "image":image,
        author :{
            "user":user,
            "profileImg":"sjn",
        }
      }
      try{
        let res = await axios.post('http://localhost:5000/users/createblog', formData)
        if(res.data.acknowledged){
          alert("Blog added successfully")
          navigate('/blogs');
        }
        else{
          alert("Blog creation failed")
        } 
      } catch{
        console.log("err")
      }
    }

    return (
        <div className="max-w-4xl mx-auto p-8">

            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 shadow rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 p-4 text-center ">Create a Blog</h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                
                {/* <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    />
                </div> */}
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create Blog
                </button>
            </form>
        </div>
    );
}

export default CreateBlog;
