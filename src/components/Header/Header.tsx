import type { JSX } from 'react';

import logo from '../../assets/header/logo.svg';
import styles from './Header.module.css';

const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles['header__title']}>
                    <a className={styles['header__logo']} href="/"><img src={logo} alt="logo" /></a>
                    <div className={styles['header__description']}>
                        <span className={styles['header__description-title']}>SkyWings</span>
                        <span className={styles['header__description-text']}>Ваше путешествие начинается здесь</span>
                    </div>
                </div>
                <div className={styles['header__info']}>
                    <a className={styles['header__user-link']} href="/">Иван Иванов</a>
                    <span className={styles['header__line']}></span>
                    <span className={styles['header__user-flight-info']}>рейс SW-2049</span>
                </div>
            </div>
        </header>
    )
}

export default Header;