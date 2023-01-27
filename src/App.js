import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts"
import Form from "./components/Form"

import { useState } from 'react';
import uuid from 'react-uuid';


function App() {
  const [post, setPost] = useState([]);

  const handleAddPost = (title, description, category, promote, status, picture) => {
    // Wrong Way!!!!!
    // const newPost = setPost('created new post!');
    // post.push(newPost)
    const updatedPosts = [...post,
    {
      id: uuid(),
      title,
      description,
      category,
      promote,
      status,
      picture,
      likes: 0,
      dislikes: 0
    }]

    setPost(updatedPosts)
  }

  //update number of likes
  const handlePostLike = (id) => {
    const updatedPost = [...post];
    updatedPost.forEach((post) => {
      if (post.id === id) {
        post.likes++
      }
    });
    setPost(updatedPost)
  }

  //update number of dislikes
  const handlePostDislike = (id => {
    const updatedPost = [...post];
    updatedPost.forEach((post) => {
      if (post.id === id) {
        post.dislikes++
      }
    })
    setPost(updatedPost)
  })

  return (
    <>
      <Header />
      <Posts
        post={post}
        onPostLike={handlePostLike}
        onPostDislike={handlePostDislike}
      />
      <Form
        onAddPost={handleAddPost}
      />
      <Footer />
    </>
  );
}

export default App;
