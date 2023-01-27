import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts"
import Form from "./components/Form"

import { useState } from 'react';
import uuid from 'react-uuid';


function App() {
  const [post, setPost] = useState(
    [
      {
        id: uuid(),
        title: 'What is  this',
        likes: 3,
        dislikes: 0,
      },
      {
        id: uuid(),
        title: 'How to do it',
        likes: 7,
        dislikes: 8,
      },
      {
        id: uuid(),
        title: 'Hwere to find',
        likes: 1,
        dislikes: 1,
      },
    ]
  );

  const handleAddPostClick = () => {
    // Wrong Way!!!!!
    // const newPost = setPost('created new post!');
    // post.push(newPost)
    const updatedPosts = [...post,
    {
      id: uuid(),
      title: 'new post',
      likes: 5,
      dislikes: 3
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
      <Form />
      <Footer />
    </>
  );
}

export default App;
