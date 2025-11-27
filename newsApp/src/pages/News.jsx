import React, { useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const News = ({ country, category, articles, setArticles }) => {
  
const fetchAllNews = async () => {
  // https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}
  // `https://newsdata.io/api/1/latest? apikey=${import.meta.env.VITE_API_KEY}&country=${country}&language=az&category=${category}`
  
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    );
      
    setArticles(res.data.results);
    console.log(res.data.results);
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
  fetchAllNews();
  }, []);

    // useEffect(()=>{
    //     const getDate = async()=>{
    //         const {data} = await axios.get(`https://newsdata.io/api/1/latest? apikey=${import.meta.env.VITE_API_KEY}&country=${country}&language=az&category=${category}`)
    //         console.log(data.results)
    //     }
    // getDate()
    // },[])

  return (
    <div className=" bg-gray-200 dark:bg-gray-800 py-24 px-4 md:px-0">
<div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-4 gap-7">
{
  articles.map((article,index)=>{
    return <NewsCard key={index} article = {article} />
  })
}
</div>
    </div>
  );
};

export default News;
