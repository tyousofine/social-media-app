import { getCategoryText, getStatusText } from "../../includes/variables";
import './styles.scss'

export default function PostDetail({ title, likes, dislikes, onPostLike, id, onPostDislike, description, category, promote, status, picture }) {

    const handleLikeClick = () => {
        onPostLike(id);
    }

    const handleDislikeClick = () => {
        onPostDislike(id)
    }

    const promoteStyle = promote ? 'promote-yes' : 'promote-no'

    const highlightDislikes = dislikes >= 10 ? 'too-many-dislikes' : ''

    return (
        <div className="post-item">
            <h3>{title}</h3>
            <img src={picture} alt={title} width={100} />
            <div className="post-text">{description}</div>
            <div >Category: {getCategoryText(category)}</div>
            <div className="post-text">Status: {getStatusText(status)}</div>
            <div className={promoteStyle}>Promote: <strong>{promote ? "Yes" : "No"}</strong></div>

            <div>Likes: {likes} Likes </div>
            <button onClick={handleLikeClick}>Like</button>

            <div className={highlightDislikes}
                style={{ fontSize: 10 + dislikes }}

            >Dislikes: {dislikes} Dislikes</div>
            <button onClick={handleDislikeClick}>Dislike</button>
        </div>

    )
}

