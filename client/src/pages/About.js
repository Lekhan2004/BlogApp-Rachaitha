import React from 'react';
import { Link } from 'react-router-dom';
import HERO from "../assests/hero3.jpg"
const About = () => {
    return (
        <div className="bg-gray-100">
            

            <div className="container mx-auto px-4 md:px-20 py-10">
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                    <p className="text-gray-600 mt-4">
                        Our blog aims to provide insightful, reliable, and engaging content that empowers our readers. Whether you're looking for the latest trends, deep dives into subjects, or expert opinions, we're here to cover it all with integrity and enthusiasm.
                    </p>
                </section>

                <section className="mb-10 flex flex-col md:flex-row items-center">
                    <img src={HERO} alt="Team Photo" className="md:w-1/2 rounded-lg shadow-lg"/>
                    <div className="md:ml-10 mt-4 md:mt-0">
                        <h2 className="text-3xl font-bold text-gray-800">Meet the Team</h2>
                        <p className="text-gray-600 mt-4">
                            Our team is a diverse group of writers, editors, and creatives who bring a broad range of perspectives to the table. Each member is dedicated to bringing you content that makes a difference.
                        </p>
                        <Link to="/team" className="mt-4 inline-block bg-blue-500 text-white px-5 py-3 rounded hover:bg-blue-700 transition-colors">Learn More About Our Team</Link>
                    </div>
                </section>

                
            </div>

        
        </div>
    );
}

export default About;
