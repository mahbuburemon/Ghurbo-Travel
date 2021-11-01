import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faBus } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth'

const Header = () => {
    const { user, logOut } = useAuth();
    const element1 = <FontAwesomeIcon icon={faEnvelopeOpen} />
    const element2 = <FontAwesomeIcon icon={faBus} />
    return (
        <>
            <Navbar bg="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/home" className="text-white fs-2 fw-bold">{element2} GhurboTravel</Navbar.Brand>
                    <Nav.Link href="#home"><h5 className="text-white fw-normal fs-5">Hot-Line: <span>0973625638245</span></h5></Nav.Link>
                    <Nav.Link href="#home " className=" text-white fw-normal fs-5"><span> {element1} :</span>ghurbotravel13@gmail.com</Nav.Link>


                </Container>
            </Navbar>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-start">
                        <Nav.Link as={HashLink} className=" text-black  fw-bold" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className=" text-black  fw-bold" to="/home#packages">Destination</Nav.Link>
                        <Nav.Link as={HashLink} className=" text-black  fw-bold" to="/addpackage">Add Package</Nav.Link>
                        <Nav.Link as={HashLink} className=" text-black  fw-bold" to="/managepackage">My Booking</Nav.Link>
                        <Nav.Link as={HashLink} className=" text-black  fw-bold" to="/contact">Contract</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">LouOut</Button> :
                            <Nav.Link as={Link} className=" text-black fs-5 fw-bold" to="/login">Log in</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in : <a href="#login" className=" p-2">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
