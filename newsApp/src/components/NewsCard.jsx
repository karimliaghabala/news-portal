import React from 'react'

const NewsCard = ({article}) => {
    const {source,author, title , description, url, image_url} = article
  return (
    <div className='max-w-md mx-auto bg-white dark:bg-gray-900 hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300'>
      <img src={image_url} alt={title} className='w-full h-48 object-cover bg-gray-400' />
    </div>
  )
}

export default NewsCard
