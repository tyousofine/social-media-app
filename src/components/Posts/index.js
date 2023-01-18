import PostDetail from "../PostDetail"
import { useState } from 'react'
import uuid from "react-uuid";

export default function Posts(props) {
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
        console.log(updatedPosts)
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

    // sum up total of likes and dislikes
    let totalLikes = 0;
    let totalDislikes = 0;

    post.forEach((post) => {
        totalLikes += post.likes;
        totalDislikes += post.dislikes;
    })


    return (

        <main>
            <h2>List of Posts:</h2>
            {post.map((post, index) => (
                <PostDetail
                    key={index}
                    id={post.id}
                    title={post.title}
                    likes={post.likes}
                    dislikes={post.dislikes}
                    onPostLike={handlePostLike}
                    onPostDislike={handlePostDislike}
                />
            ))}
            <button onClick={handleAddPostClick}>Add Post</button>
            <div>
                Total Likes: {totalLikes} |
                Total Dislikes {totalDislikes}
            </div>
        </main>
    )
}