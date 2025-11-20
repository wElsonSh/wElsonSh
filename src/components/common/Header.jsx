import { Radio } from '@/components/ui/Radio';
import styles from '@/styles/components/common/Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.header_logo}>
                    <a href="/">
                        <h1>wElsonSh</h1>
                    </a>
                </div>
                <div className={styles.header_menu}>
                    <ul className={styles.header_menu_navList}>
                        <li className={styles.header_menu_navList_item}><a href="#"><p>lorem</p></a></li>
                        <li className={styles.header_menu_navList_item}><a href="#"><p>lorem</p></a></li>
                        <li className={styles.header_menu_navList_item}><a href="#"><p>lorem</p></a></li>
                    </ul>
                    <Radio />
                </div>
            </div>
        </header>
    );
}