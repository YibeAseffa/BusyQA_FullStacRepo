
import React, { useEffect } from 'react';
import Post from './Post';

const Feed = () => {
 
  useEffect(() => {
    console.log('Feed component  mounted');
  }, []); 

  return (
    <div className="feed">
      <h1><i className='fa-solid fa-users'></i> Social Feed</h1>
     
      <Post message="React is the best front end library" />
      <Post message="Blockchain is better" />
    </div>
  );
};

export default Feed;