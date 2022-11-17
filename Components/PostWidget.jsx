import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  
  useEffect(() => {
    if (slug) {
        getSimilarPosts(categories, slug)
            .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
            .then((result) => setRelatedPosts(result))
    }  
  }, [slug])

  console.log(
    relatedPosts)
  
  return (
    <div className="bg-gradient-to-b opacity-100 from-sky-200 via-sky-300 to-sky-400 shadow-lg rounded-lg p-8 mb-8">
        <h3 className="text-xl mb-8 font-bold border-b pb-4 text-white">
          {slug ? 'Related Posts' : "Recent Posts"}
        </h3>
        {relatedPosts.map((post) => (
            <div key={post.title} className="flex items-center w-full mb-4 text-white font-bold">
                <div className="w-16 flex-none">
                    <img
                      alt={post.title}
                      height="60px"
                      width="60px"
                      className="align-middle rounded-full"
                      src={post.featuredImage.url}
                    />
                </div>
                <div className="flex-grow ml-4">
                    <p className="text-white font-bold ">
                      {moment(post.createdAt).format('MMM DD, YYYY')}
                    </p>
                    <Link href={`/post/${post.slug}`} key={post.title} className="text-md" >
                        {post.title}
                    </Link>
                </div>
            </div>
          ))}
    </div>
  )
}

export default PostWidget