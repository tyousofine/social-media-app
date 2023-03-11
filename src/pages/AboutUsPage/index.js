import React from 'react'
import PageContainer from '../../components/PageContainer'
import { NavLink, Outlet } from 'react-router-dom'
import './styles.scss'

export default function AboutUsPage() {
    return (
        <PageContainer title={'About Us'} className='about-us-page' >
            <article>


                <Outlet />
            </article>
            {/* Side Menu */}
            <aside>
                <NavLink to='/about' end>About Us</NavLink>
                <NavLink to='/about/mission'>Our Mission</NavLink>
                <NavLink to='/about/policy'>Privacy Policy</NavLink>
            </aside>
        </PageContainer>
    )
}
