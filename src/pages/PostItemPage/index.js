import PageContainer from '../../components/PageContainer';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as database from './../../database';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading'
import './styles.scss'
import React from 'react'
import NotFoundPage from '../NotFountPage';

export default function PostItemPage() {
    const params = useParams();
    const [post, setPost] = useState('');
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        (async () => {
            const loadedPost = await database.loadByID(params.id);
            setPost(loadedPost);
            setIsLoading(false);
        })();
    }, []);

    if (isLoading) {
        return <Loading />
    }

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
