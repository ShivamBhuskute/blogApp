// import React, { useState, useEffect } from 'react'
// import { Container, PostCard } from '../components'
// import appwriteService from "../appwrite/config";

// function AllPosts() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {
//         appwriteService.getPosts([]).then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])

//     // return (
//     //     <div className='w-full py-8'>
//     //         <Container>
//     //             <div className='flex flex-wrap'>
//     //                 {posts.map((post) => (
//     //                     <div key={post.$id} className='p-2 w-1/4'>
//     //                         <PostCard {...post} />
//     //                     </div>
//     //                 ))}
//     //             </div>
//     //         </Container>
//     //     </div>
//     // )
//     return posts ? (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     ) : (<h1> Share some posts!!! </h1>)
// }

// export default AllPosts

import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    appwriteService.getPosts([])
      .then((response) => {
        setPosts(response.documents);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className='w-full py-8'>
      <Container>
        {posts.length > 0 ? (
          <div className='flex flex-wrap'>
            {posts.map((post) => (
              <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        ) : (
          <h1 className='font-bold text-2xl'>Share some posts!!!</h1>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
