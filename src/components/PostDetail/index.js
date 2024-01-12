import { getCategoryText, getStatusText } from "../../includes/variables";
import './styles.scss'
import { BiLike, BiDislike } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { likePost, dislikePost, removePost } from "../../redux/postSlice";
import { Link } from 'react-router-dom';
import * as database from '../../database'


export default function PostDetail({ title, likes, dislikes, id, description, category, promote, status, picture }) {
    const { allowLikes, allowDislikes, } = useSelector((state) => state.settings);
    const dispatch = useDispatch()




    const handleLikeClick = async (e) => {
        e.preventDefault();
        dispatch(likePost(id));

        const data = { likes: likes + 1 }
        const updated = await database.update(id, data);


        if (!updated) {
            alert('Failed to update likes')
            // TODO improve the message to the user
            // TODO create a redux action to remove one like
        }
    };

    const handleDislikeClick = async (e) => {
        e.preventDefault();
        dispatch(dislikePost(id));

        const data = { dislikes: dislikes + 1 }
        const updated = await database.update(id, data);

        if (!updated) {
            alert('Failed to update likes')
            // TODO improve the message to the user
            // TODO create a redux action to remove on like
        }
    };

    const handleRemoveClick = async (e) => {
        e.preventDefault();


        //remove from db
        const removed = await database.remove(id);
        if (removed) {
            //Remove from redux store
            dispatch(removePost(id));
        } else {
            alert('failed to remove item')
        }
    }

    const promoteStyle = promote ? 'promote-yes' : 'promote-no'

    // const highlightDislikes = dislikes >= 10 ? 'too-many-dislikes' : ''

    let rateClassName = 'rate';
    if (!allowLikes || !allowDislikes) {
        rateClassName += ' rate-single-button'
    }


    return (
        <Link to={'/posts/' + id} className="post-component">

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
            <button onClick={handleRemoveClick}>Remove</button>
        </Link >

    )
}

