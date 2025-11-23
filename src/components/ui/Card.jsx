import { useState } from "react";
import { PiTelegramLogoBold } from "react-icons/pi";
import './styles/Card.scss';


export function Card() {

    const [isLike, setIsLike] = useState(false)
    return (
        <div class="card-container">
            <div class="comic-card" role="article" aria-labelledby="card-username">
                <div class="card-header">
                    <div
                        class="card-avatar">
                    </div>
                    <div class="card-user-info">
                        <p class="card-username" id="card-username">Captain Creative</p>
                        <h1 class="card-handle">
                            @wElsonSh
                        </h1>
                    </div>
                </div>

                <div class="card-content">
                    <div class="card-image-container"></div>
                    <p class="card-caption">
                        MEANWHILE... I've discovered a new source of ultimate creative power!
                    </p>
                </div>

                <div class="card-actions">
                    <button
                        onClick={() => {
                            setIsLike(true)
                        }}
                        class="action-button like-button"
                        aria-label="Like Post">
                        <svg
                            style={{ fill: isLike ? 'red' : 'transparent', stroke: isLike ? 'red' : '#121212' }} class="action-button-icon" viewBox="0 0 24 24">
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            ></path>
                        </svg>
                    </button>
                    <button class="action-button comment-button" aria-label="Comment on Post">
                        <svg class="action-button-icon" viewBox="0 0 24 24">
                            <path
                                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        class="action-button share-button" aria-label="Share Post">
                        <a target="_blank"
                            href="https://t.me/wElson217">
                            <PiTelegramLogoBold class="action-button-icon_tg" />
                        </a>
                    </button>
                </div>
            </div>
        </div>

    );
}