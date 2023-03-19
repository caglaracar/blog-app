import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} href={'/'}>
                <span >Blog</span>
            </Link>
            <nav>
                <Link target={"_blank"} href={'https://github.com/caglaracar'} >
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;