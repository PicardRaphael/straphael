import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        // @ts-ignore
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <header>
        <MDBNavbar color="black" dark expand="md">
          <MDBNavbarBrand href="/">
            <strong>Appartement St Raphaël</strong>
          </MDBNavbarBrand>
    
          { 
            // @ts-ignore 
            !this.state.isWideEnough 
            && 
            <MDBNavbarToggler onClick={this.onClick} />
          }
            
          <MDBCollapse isOpen={
            // @ts-ignore
            this.state.collapse
          } navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="/">Accueil</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/galerie">Galerie</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;