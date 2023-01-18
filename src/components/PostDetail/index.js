export default function PostDetail({ title, likes, dislikes, onPostLike, id, onPostDislike }) {

    const handleLikeClick = () => {
        onPostLike(id);
    }

    const handleDislikeClick = () => {
        onPostDislike(id)
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>Likes: {likes} Likes </div>
            <button onClick={handleLikeClick}>Like</button>
            <div>Dislikes: {dislikes} Dislikes</div>
            <button onClick={handleDislikeClick}>Dislike</button>
        </div>

    )
}

