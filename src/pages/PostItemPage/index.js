import PageContainer from '../../components/PageContainer';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.scss'
import React from 'react'
import NotFoundPage from '../NotFountPage';

export default function PostItemPage() {
    const params = useParams();
    const post = useSelector(
        (state) => state.posts.posts.find((post) => post.id === params.id)
    );

    if (!post) {
        return <NotFoundPage />
    }

    console.log(post);

    return (
        <PageContainer title={post.title} className='post-item-page' >
            <div className="picture">
                <img src={post.picture} alt={post.title} />
            </div>
            <div className="description">
                {post.description}
            </div>
            <Link to='/posts' className='back-link'>Back</Link>

        </PageContainer>
    )
}
