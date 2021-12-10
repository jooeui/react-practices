import React from 'react';
import { Outlet } from 'react-router';
import Navigation from './Navigation';
import SiteLayout from "../../layout/SiteLayout";

export default function About() {
    return (
        <SiteLayout>
            <Navigation />
            <Outlet />
        </SiteLayout>
    );
}