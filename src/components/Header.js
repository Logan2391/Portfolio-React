import React, { useState } from 'react';
import HeadImg from '../images/Delete.png'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Header({ currentPage, handlePageChange }) {
    const [showNavRight, setShowNavRight] = useState(false);

    return (
        <header>
            <MDBNavbar expand='lg' className='pt-0'>
            <MDBContainer fluid className='ps-0'>
            <img className='text-center bg-image' alt='' src={HeadImg} />
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarRightAlignExample'
                    aria-controls='navbarRightAlignExample'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavRight(!showNavRight)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavRight}>
                    <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0 text-white'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About'}>
                                About Me
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio'}>
                                Portfolio</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume'}>
                                Resume</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact'}>
                                Contact Me</MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
            
        </header>
    );
}