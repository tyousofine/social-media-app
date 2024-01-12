import PostDetail from "../PostDetail"
import './styles.scss';
import { useSelector } from "react-redux";



export default function Posts({ showOnlyPromoted }) {

    let post = useSelector((state) => state.posts.posts);
    const { allowLikes, allowDislikes } = useSelector((state) => state.settings)

    if (showOnlyPromoted) {
        post = post.filter((post) => post.promote)
    }

    // validate if there are posts to displau
    if (post.length === 0) {
        return (
            <div>No post found.</div>
        );
    }

    // sum up total of likes and dislikes
    let totalLikes = 0;
    let totalDislikes = 0;

    post.forEach((post) => {
        totalLikes += post.likes;
        totalDislikes += post.dislikes;
    })

    return (

        <div className='post-list full-width'>
            {post.map((post, index) => (
                <PostDetail
                    key={index}
                    {...post} />
            ))}

            {(allowLikes || allowDislikes) && !showOnlyPromoted && (
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

        </div >
    )
}