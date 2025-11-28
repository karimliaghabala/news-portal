import { Link } from "react-router-dom";
import React from "react";

const NewsCard = ({ article }) => {
  const { pubDate, source_id, title, description, link, image_url,source_url } = article;
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
          {description?.lenght > 80
            ? description.slice(0,80) + "..."
            : description}
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span>By {source_id || "Mənbə göstərilməyib"}</span>
          <p>{new Date(pubDate).toLocaleDateString()}</p>
        </div>
        <div className="mt-1 text-xs text-blue-500 font-medium">
            Keçid: {source_url}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
