import React from 'react';
import styled from 'styled-components';
import NavBt from './NavBt';
// import {Link} from 'react-router-dom';
// import {ReactComponent as Logo} from '../../assets/images/logo.svg';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  .side-menu{
    margin-top: 6rem;
    visibility: hidden;
    position: absolute;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #272626; // BG COLOR
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 65vw;
    padding-top: 10rem;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    .side-menu{
      visibility: visible;
      position: relative;
    }
  }
    
`;

const navContainer = {
  /* backgroundColor: "green", */
  marginTop: '1rem',
  padding: '.5rem',
  color: 'white',
  position: 'absolute',
  right: '6rem'

}

// const logoStyle = {
//   width: "6rem",
//   height: "6rem",
//   cursor: "pointer",
//   marginTop: ".3rem",
// }

const barStyle = {
  display:'flex',
  width: '100vw',
  padding: '.5rem'
}

const RightNav = ({ open }) => {
  return (

    <div style={barStyle}>

      {/* <Link to='/'> */}
        {/* <Logo style={logoStyle}/>       */}
      {/* </Link> */}

      <div style={navContainer}>
        <Ul open={open}>
            <NavBt path="Header" name="HOME"/>
            <NavBt path="S1" name="ABOUT ME"/>
            <NavBt path="S2" name="PROJECTS"/>
            <NavBt path="S3" name="CONTACT"/>

            <div className="side-menu">
              <div className="flex-container-column ">
                {/* <p style={{fontSize: "2rem"}}>Alguma Soisa</p>
                <p>Something</p>
                <h2 >ANYTHING</h2> */}
              </div>
            </div>

        </Ul>

      </div>

    </div>
  )
}

export default RightNav;