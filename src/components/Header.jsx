import React from 'react';

const Header = () => {
    return (
        <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'white',
                margin: 0
            }}>
                To do list with Category
            </h1>
        </header>
    );
};

export default Header;
