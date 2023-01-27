export default function PostDetail({ title, likes, dislikes, onPostLike, id, onPostDislike, description, category, promote, status, picture }) {

    const handleLikeClick = () => {
        onPostLike(id);
    }

    const handleDislikeClick = () => {
        onPostDislike(id)
    }

    return (
        <div>
            <h3>{title}</h3>
            <img src={picture} alt={title} width={100} />
            <div>{description}</div>
            <div>Category: {category}</div>
            <div>Status: {status}</div>
            <div>Promote: {promote ? "Yes" : "No"}</div>
            <div>Likes: {likes} Likes </div>
            <button onClick={handleLikeClick}>Like</button>
            <div>Dislikes: {dislikes} Dislikes</div>
            <button onClick={handleDislikeClick}>Dislike</button>
        </div>

    )
}

