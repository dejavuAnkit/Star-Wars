import React from 'react';

import * as header from './Header.css';

const HeaderComponent = () => {
    const title = 'STAR WARS'
    return(
        <h3 className="header">
        {title}
        </h3>
    )
}

export default HeaderComponent;