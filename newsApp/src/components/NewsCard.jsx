import { Link } from "lucide-react";
import React from "react";

const NewsCard = ({ article }) => {
  const { source, source_name, title, description, link, image_url } = article;
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300">
      <img
        src={image_url}
        alt={title}
        className="w-full h-48 object-cover bg-gray-400"
      />
      <div className="p-4">
        <Link to={link} className=" text-gray-500">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
            {title}
          </h2>
        </Link>
        <p className=" text-gray-500">
          {description?.lenght > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            <span>By {source_name||"Adsız"}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
