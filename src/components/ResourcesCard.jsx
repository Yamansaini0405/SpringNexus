import React, { useState } from "react";

// Card Component
const ResourcesCard = () => {
  const [title, setTitle] = useState("Building a RESTful Web Service");
  const [description, setDescription] = useState("This guide walks you through creating a simple 'Hello, World' RESTful web service using Spring Boot, covering the basics of setting up a REST controller and defining an endpoint to return a 'Hello, World' message. ");
  const [tag, setTag] = useState("REST APIs");

  return (
    <div className="w-80 bg-gray-900 text-white rounded-lg shadow-lg p-4 m-2">
      
      <p className="text-gray-400 text-sm mb-2">30mn</p>

      
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      
      <p className="text-gray-300 mb-4">{description}</p>

      
      <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
        {tag}
      </span>
    </div>
  );
};

export default ResourcesCard;
