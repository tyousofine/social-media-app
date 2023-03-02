import PostDetail from "../PostDetail"
import './styles.scss'


export default function Posts({ post, onPostLike, onPostDislike }) {


    // sum up total of likes and dislikes
    let totalLikes = 0;
    let totalDislikes = 0;

    post.forEach((post) => {
        totalLikes += post.likes;
        totalDislikes += post.dislikes;
    })


    return (

        <main className='post-list'>

            {post.map((post, index) => (
                <PostDetail
                    key={index}
                    {...post}
                    onPostLike={onPostLike}
                    onPostDislike={onPostDislike}
                />
            ))}

            <div className='total-rate'>
                Total Likes: {totalLikes} |
                Total Dislikes {totalDislikes}
            </div>
        </main >
    )
}