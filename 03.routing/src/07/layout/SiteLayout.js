import React, { Fragment, useEffect } from 'react';
import styles from '../assets/scss/layout/Content.scss';
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";

export default function SiteLayout({children}) {
    return (
        <Fragment>
            <Header/>
            <div className={styles.Content}>
                {children}
            </div>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}