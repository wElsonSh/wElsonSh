import styles from '@/styles/components/sections/Aboutme.module.scss';

export function Aboutme() {
    return (
        <section className={styles.aboutme}>
            <span className={styles.aboutme_background}></span>
            <div className={styles.aboutmeContainer}>
                <div className={styles.aboutme_title}>
                    <div className={styles.aboutme_titleText}>
                        <h1>Coding.</h1>
                        <p>I first became interested in web development when I was about 13 years old. Before that, I hadn't even considered how wonderful and unique the world of development was. I didn't have my own computer or even a laptop, but I had a huge desire and ambition.</p>
                        <p>Now, coding has become an integral and beloved part of my daily routine.</p>
                    </div>
                    <div className={styles.aboutme_imgContainer}>
                        <div className={styles.aboutme_img}></div>
                    </div>
                </div>
                <div className={styles.aboutme_text}>
                    <ul className={styles.aboutme_textList}>
                        <li className={styles.aboutme_textList_item}>
                            <div className={styles.aboutme_textList_item_decorator}>
                                <p>Lorem</p>
                            </div>
                            <div className={styles.aboutme_textList_item_content}>
                                <div className={styles.aboutme_textList_item_content_decorator}></div>
                                <div className={styles.aboutme_textList_item_content_text}>
                                    <h1>Title</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde id sunt reprehenderit rem ea sint perspiciatis quisquam praesentium, qui esse placeat necessitatibus impedit, suscipit eum. Eum quisquam placeat officiis.</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.aboutme_textList_item}>
                            <div className={styles.aboutme_textList_item_decorator}>
                                <p>Lorem</p>
                            </div>
                            <div className={styles.aboutme_textList_item_content}>
                                <div className={styles.aboutme_textList_item_content_decorator}></div>
                                <div className={styles.aboutme_textList_item_content_text}>
                                    <h1>Title</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde id sunt reprehenderit rem ea sint perspiciatis quisquam praesentium, qui esse placeat necessitatibus impedit, suscipit eum. Eum quisquam placeat officiis.</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.aboutme_textList_item}>
                            <div className={styles.aboutme_textList_item_decorator}>
                                <p>Lorem</p>
                            </div>
                            <div className={styles.aboutme_textList_item_content}>
                                <div className={styles.aboutme_textList_item_content_decorator}></div>
                                <div className={styles.aboutme_textList_item_content_text}>
                                    <h1>Title</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde id sunt reprehenderit rem ea sint perspiciatis quisquam praesentium, qui esse placeat necessitatibus impedit, suscipit eum. Eum quisquam placeat officiis.</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.aboutme_textList_item}>
                            <div className={styles.aboutme_textList_item_decorator}>
                                <p>Lorem</p>
                            </div>
                            <div className={styles.aboutme_textList_item_content}>
                                <div className={styles.aboutme_textList_item_content_decorator}></div>
                                <div className={styles.aboutme_textList_item_content_text}>
                                    <h1>Title</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde id sunt reprehenderit rem ea sint perspiciatis quisquam praesentium, qui esse placeat necessitatibus impedit, suscipit eum. Eum quisquam placeat officiis.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}