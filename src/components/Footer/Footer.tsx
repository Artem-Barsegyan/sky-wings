import type { JSX } from "react";

import styles from './Footer.module.css';

const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <span className={styles['footer__copyright']}>&copy;&nbsp;2025 SkyWings Airlines.</span>
        </footer>
    )
}

export default Footer;