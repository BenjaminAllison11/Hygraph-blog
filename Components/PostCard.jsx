import React from 'react'
import moment from 'moment';
import Link from 'next/link'

const PostCard = ({post}) => {
  console.log(post);
  return (
    <div className="bg-indigo-600 shadow-lg rounded-lg p-0 lg:p-8 pb-5 mb-8 bg-indigo-600">
      <div className="relative overflow-hidden pb-40 rounded-full object-left w-50">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-80 object-cover shadow-lg rounded-full lg:rounded-full ml-20"
        />
         <h1 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-bold text-green-600">
        <Link href={`/post/${post.slug}`}>
            {post.title}
        </Link>
      </h1>
         <p className="text-center text-lg text-green-600 font-bold px-4 lg:px-20 mb-8">{post.excerpt}</p>
         </div>
      <div className="block lg:flex text-center items-center justify-left mb-8 w-full font-bold text-green-600">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 font-bold text-green-600">
            <img 
                alt={post.author.name}
                height="50px"
                width="50px"
                className="align.middle rounded-full"
                src={post.author.photo.url}
            />
            <p className="inline align-middle font-bold text-black-700 ml-2 text-lg">{post.author.name}</p>
        </div>
        <div className="font-bold text-green-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration=500 transform hover:-translate-y-1 inline-block bg-amber-500 text-lg font-bold rounded-full text-green-600 px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard