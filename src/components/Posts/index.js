import PostDetail from "../PostDetail"


export default function Posts({ post, onPostLike, onPostDislike }) {


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
                    onPostLike={onPostLike}
                    onPostDislike={onPostDislike}

                />
            ))}

            <div>
                Total Likes: {totalLikes} |
                Total Dislikes {totalDislikes}
            </div>
        </main>
    )
}