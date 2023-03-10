import { getCategoryText, getStatusText } from "../../includes/variables";
import './styles.scss'
import { BiLike, BiDislike } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { likePost, dislikePost } from "../../redux/postSlice";

export default function PostDetail({ title, likes, dislikes, id, description, category, promote, status, picture }) {
    const { allowLikes, allowDislikes } = useSelector((state) => state.settings);


    const dispatch = useDispatch()

    const handleLikeClick = () => {
        dispatch(likePost(id))
    };

    const handleDislikeClick = () => {
        dispatch(dislikePost(id));
    };

    const promoteStyle = promote ? 'promote-yes' : 'promote-no'

    // const highlightDislikes = dislikes >= 10 ? 'too-many-dislikes' : ''

    let rateClassName = 'rate';
    if (!allowLikes || !allowDislikes) {
        rateClassName += ' rate-single-button'
    }


    return (
        <div className="post-component">
            <h3>{title}</h3>

            <div className="description">
                <img src={picture} alt={title} />
                <span>{description}</span>
            </div>

            <div className="info">
                <div>
                    Category:
                    <strong>{getCategoryText(category)}</strong>
                </div>

                <div>
                    Status:
                    <strong>{getStatusText(status)}</strong>
                </div>
                <div className={promoteStyle}>
                    Promote:
                    <strong>{promote ? "Yes" : "No"}</strong>
                </div>
            </div>

            {(allowLikes || allowDislikes) && (
                <div className={rateClassName}>
                    {allowLikes && (
                        <button
                            title='I like this'
                            className='like'
                            onClick={handleLikeClick}>
                            <BiLike />
                            {likes}
                        </button>
                    )}

                    {allowDislikes && (
                        <button
                            title='I dislike this'
                            className='dislike'
                            onClick={handleDislikeClick}>
                            <BiDislike />
                            {dislikes}
                        </button>
                    )}
                </div>
            )
            }

        </div >

    )
}

