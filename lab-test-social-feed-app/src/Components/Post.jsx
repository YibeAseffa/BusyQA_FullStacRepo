import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'

const Post = ({ message }) => {
  
  const [comments, setComments] = useState([]); // JSX array forn storing comments
  const [newComment, setNewComment] = useState(''); // for new arriving comments
  const [likes, setLikes] = useState(0); // Likes satrts from 0
  const [dislikes, setDisLikes] = useState(0); // Dis-Likes satrts from 0
  const [countComments, setCountComments] = useState(0); // Comment counts satrts from 0
  



  //Event handler for like button to increment by one
  const handleLike = () => {
    setLikes(likes + 1); 
  };
  //Event handler for dis-like button to increment by one
  const handleDisLike = () => {
    setDisLikes(dislikes + 1); 
  };

   //Event handler for like button to submit comment
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const timestamp = new Date().toLocaleString(); 
      setComments([...comments, { text: newComment, time: timestamp }]);  // set comments with their respective timestamp using Date() function
      setNewComment(''); 

      setCountComments(countComments + 1);  //increment number of comments

    }
  };

  return (
    <div className="post">
    
      <h4>{message}</h4>

    
      {/* <p>{likes} Likes</p> */}
      

      <button className="like-button" onClick={handleLike}><i className='fa-solid fa-thumbs-up'></i> {likes}</button> 
      <button className="dislike-button" onClick={handleDisLike}><i className='fa-solid fa-thumbs-down'></i> {dislikes}</button>
    
     
      <h4><i className='fa-solid fa-comments'></i> {countComments}</h4>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          aria-label="Comment input"
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>

   
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {/* Display comments with time stamp */}
            <strong>{comment.time}:</strong> {comment.text}  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;