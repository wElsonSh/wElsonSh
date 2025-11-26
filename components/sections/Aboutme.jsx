import styles from '@/styles/components/sections/Aboutme.module.scss';

export function Aboutme() {
    return (
        <section className={styles.aboutme}>
            <span className={styles.aboutme_background}>
            </span>
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
                <span className={styles.wavesContainer}>
                    <div className={styles.waves}>
                        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 310" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 L 0,175 C 102.73684210526315,166.77033492822966 205.4736842105263,158.54066985645932 308,172 C 410.5263157894737,185.45933014354068 512.8421052631579,220.60765550239236 592,210 C 671.1578947368421,199.39234449760764 727.1578947368422,143.02870813397126 815,138 C 902.8421052631578,132.97129186602874 1022.5263157894738,179.2775119617225 1132,194 C 1241.4736842105262,208.7224880382775 1340.7368421052631,191.86124401913875 1440,175 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#4c3a69" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 200)"></path><path d="M 0,400 L 0,275 C 101.35885167464116,277.62200956937795 202.71770334928232,280.24401913875596 295,271 C 387.2822966507177,261.75598086124404 470.4880382775119,240.64593301435406 554,251 C 637.5119617224881,261.35406698564594 721.33014354067,303.17224880382776 811,310 C 900.66985645933,316.82775119617224 996.1913875598086,288.6650717703349 1102,277 C 1207.8086124401914,265.3349282296651 1323.9043062200958,270.16746411483257 1440,275 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#4c3a69" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-2" transform="rotate(-180 720 200)"></path></svg>
                    </div>
                </span>
            </div >
        </section >
    );
}