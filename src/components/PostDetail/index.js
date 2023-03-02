import { getCategoryText, getStatusText } from "../../includes/variables";
import './styles.scss'
import { BiLike, BiDislike } from "react-icons/bi";


export default function PostDetail({ title, likes, dislikes, onPostLike, id, onPostDislike, description, category, promote, status, picture }) {

    const handleLikeClick = () => {
        onPostLike(id);
    }

    const handleDislikeClick = () => {
        onPostDislike(id)
    }

    const promoteStyle = promote ? 'promote-yes' : 'promote-no'

    // const highlightDislikes = dislikes >= 10 ? 'too-many-dislikes' : ''

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

            <div className="rate">
                <button
                    title='I like this'
                    className="like"
                    onClick={handleLikeClick}>
                    <BiLike />
                    {likes}
                </button>
                <button
                    title='I dislike this'
                    className="dislike"
                    onClick={handleDislikeClick}>
                    <BiDislike />
                    {dislikes}
                </button>


            </div>
        </div>

    )
}

