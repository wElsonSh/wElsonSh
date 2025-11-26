import styles from '@/styles/components/sections/Welcom.module.scss';
import { Card } from '/components/ui/Card';

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
            <span className={styles.waves}>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path d="M 0,400 L 0,175 C 100.00956937799043,192.2918660287081 200.01913875598086,209.58373205741626 302,201 C 403.98086124401914,192.41626794258374 507.93301435406704,157.9569377990431 595,150 C 682.066985645933,142.0430622009569 752.2488038277512,160.58851674641147 852,168 C 951.7511961722488,175.41148325358853 1081.0717703349283,171.68899521531102 1184,171 C 1286.9282296650717,170.31100478468898 1363.4641148325359,172.6555023923445 1440,175 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#4c3a69" fill-opacity="0.53"></path><path d="M 0,400 L 0,275 C 100.96650717703349,283.9856459330143 201.93301435406698,292.9712918660287 302,284 C 402.066985645933,275.0287081339713 501.23444976076553,248.10047846889955 584,246 C 666.7655502392345,243.89952153110045 733.129186602871,266.6267942583732 841,273 C 948.870813397129,279.3732057416268 1098.248803827751,269.39234449760767 1205,267 C 1311.751196172249,264.60765550239233 1375.8755980861245,269.8038277511962 1440,275 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#4c3a69" fill-opacity="1" ></path></svg>
            </span>
        </section>
    );
}