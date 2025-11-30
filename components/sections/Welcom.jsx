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
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,75 C 114.69856459330143,94.49282296650718 229.39712918660285,113.98564593301435 336,102 C 442.60287081339715,90.01435406698565 541.11004784689,46.55023923444976 624,46 C 706.88995215311,45.44976076555024 774.1626794258374,87.8133971291866 864,106 C 953.8373205741626,124.1866028708134 1066.2392344497607,118.19617224880382 1166,109 C 1265.7607655502393,99.80382775119618 1352.8803827751196,87.4019138755981 1440,75 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#4c3a69" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><path d="M 0,400 L 0,175 C 114.21052631578945,157.70813397129186 228.4210526315789,140.41626794258372 314,140 C 399.5789473684211,139.58373205741628 456.52631578947364,156.04306220095697 545,159 C 633.4736842105264,161.95693779904303 753.4736842105264,151.4114832535885 862,145 C 970.5263157894736,138.5885167464115 1067.578947368421,136.311004784689 1162,142 C 1256.421052631579,147.688995215311 1348.2105263157896,161.3444976076555 1440,175 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#4c3a69" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><path d="M 0,400 L 0,275 C 117.20574162679424,279.8995215311005 234.41148325358847,284.79904306220095 315,278 C 395.5885167464115,271.20095693779905 439.5598086124403,252.70334928229667 529,243 C 618.4401913875597,233.29665071770333 753.3492822966507,232.38755980861248 871,243 C 988.6507177033493,253.61244019138752 1089.043062200957,275.74641148325355 1181,283 C 1272.956937799043,290.25358851674645 1356.4784688995214,282.62679425837325 1440,275 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#4c3a69" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
            </span>
        </section>
    );
}