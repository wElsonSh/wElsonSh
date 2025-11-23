import { Card } from '@/components/ui/Card';
import styles from '@/styles/components/sections/Welcom.module.scss';

export function Welcom() {
    return (
        <section className={styles.welcom}>
            <span className={styles.welcom_background}></span>
            <div className={styles.welcomContainer}>
                <Card />
                <div className={styles.welcom_textContainer}>
                    <div className={styles.welcom_text}>
                        <p>
                            👋
                            <span>Hi <b>,</b> I<b>'</b> m wElsonSh</span>
                        </p>
                        <h1>
                            I like making <a href="#">fun</a>, interactive things with code. I can also <a href="#">make</a> & <a href="#">fix</a> a website for you.
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}