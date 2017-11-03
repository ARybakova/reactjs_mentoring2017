import * as React from 'react';
import { Footer } from './Footer';

export const NotFound = () => (
    <div className="page_container">
        <div className="not_found">
            <p className="not_found_error">404</p>
            <p className="not_found_text">Sorry, this page doesn't exist :(</p>
        </div>
        <Footer/>
    </div>
);