
/*
 * Package Import
 */
import React, { FunctionComponent } from 'react';
import { MDBContainer, MDBRow } from 'mdbreact';


/*
 * Local Import
 */
import Header from './Header';
import './layout.scss'

const Layout: FunctionComponent= ({children}) => {

  return ( 
    <>   
      <Header />
      <MDBContainer className="container fluid">
        <MDBRow>
          {children}
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Layout