import PostDetail from "../PostDetail"
import './styles.scss';
import { useSelector } from "react-redux";



export default function Posts() {

    const post = useSelector((state) => state.posts.posts);
    const { allowLikes, allowDislikes } = useSelector((state) => state.settings)

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
                    {...post} />
            ))}

            {(allowLikes || allowDislikes) && (
                <div className='total-rate'>
                    {allowLikes && (
                        <>Total Likes: {totalLikes}</>
                    )}

                    {allowLikes && allowDislikes && (
                        <> | </>
                    )}

                    {allowDislikes && (
                        <> Total Dislikes {totalDislikes}</>
                    )}
                </div>
            )}

        </main >
    )
}