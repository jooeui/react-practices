import React, { Fragment } from 'react';
import styles from '../assets/scss/layout/Content.scss';
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

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