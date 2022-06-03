import React, { useState, useEffect } from 'react'

// import '../../assets/dist/app.css'
// import '../../assets/bootstrap/css/bootstrap.css'
import './nav.css'
import { Link } from 'react-router-dom'
import { loadWeb3, } from '../../apis/api';
import { GiHamburgerMenu } from 'react-icons/gi'
import { Navbar, Container, Nav, } from 'react-bootstrap'


export default function Navbarnav() {

    let [btnTxt, setBtTxt] = useState("Connect")

    const getAccount = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            setBtTxt("No Wallet")
        }
        else if (acc == "Wrong Network") {
            setBtTxt("Wrong Network")
        } else {
            let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setBtTxt(myAcc);

        }
    }
    useEffect(() => {
        setInterval(() => {
            getAccount();
        }, 1000);
    }, []);
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" className='navbarmain'>
                <Container>
                    <Link to="/">  <Navbar.Brand href="#home" class="navbar-brand"><img src="logo.png" alt="" width="40%" /></Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav_icon' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className=' menu-item ms-2' > <Link to="/">  Home</Link></Nav.Link>
                            <Nav.Link href="#features" className=' menu-item ms-2' ><Link to="/about">About</Link></Nav.Link>

                            <Nav.Link href="#features" className=' menu-item ms-2' >    <Link to="/Collections"> Collections</Link> </Nav.Link>

                            <Nav.Link href="#features" className=' menu-item ms-2' >                    <Link to="/MainBinefits"> Benefits</Link></Nav.Link>

                            <Nav.Link href="#features" className=' menu-item ms-2' > <Link to="/Attributes">    Attributes</Link></Nav.Link>
                            <Nav.Link href="#features" className=' menu-item ms-2' > <Link to="/Roadmap">Roadmap</Link></Nav.Link>

                            <Nav.Link href="#features" className=' menu-item ms-3' ><Link to="/Mint"> Mint</Link></Nav.Link>


                            {/* <span class="navbar-toggler-icon"><GiHamburgerMenu /></span></Navbar.Toggle> */}

                            <div class="button ms-3 ">
                                <a class="btn-action" href="#">
                                    {btnTxt}
                                </a>
                            </div>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
