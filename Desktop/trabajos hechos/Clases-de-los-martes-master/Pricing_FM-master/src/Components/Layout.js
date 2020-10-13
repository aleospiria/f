import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
    return(
        <>
        <Header 
              companyName="ADLTP"
              navBar={[
              ]}
              />
              {props.children}
        <Footer />
        </>
    )
}

export default Layout