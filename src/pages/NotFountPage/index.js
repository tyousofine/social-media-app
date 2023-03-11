import PageContainer from "../../components/PageContainer";
import { Link } from 'react-router-dom';



import React from 'react'

export default function NotFoundPage() {
    return (
        <PageContainer title='Page Not Found' >
            <p>Please check the address</p>
            <p>
                <Link to='/'>click here</Link> to go to the initial page
            </p>
        </PageContainer>
    )
}
