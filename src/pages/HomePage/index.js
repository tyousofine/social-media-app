import React from 'react'
import PageContainer from '../../components/PageContainer'
import Posts from '../../components/Posts'

export default function HomePage() {
    return (
        <PageContainer title={'Welcome to my App!'} >
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia doloribus error autem eius, ut vel reprehenderit, vitae, ad voluptatibus totam voluptas magnam. Sapiente qui numquam similique officiis ex iure molestiae!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum velit enim voluptatibus atque praesentium nostrum omnis aut inventore. Quaerat, sequi. Fugiat provident consectetur quia vero nihil aut nisi fugit! Commodi!</p>
            <h2>Promoted Posts:</h2>
            { }
            <Posts showOnlyPromoted={true}></Posts>

        </PageContainer>
    )
}
