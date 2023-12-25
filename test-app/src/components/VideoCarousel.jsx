import React from 'react';
import { Carousel } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './video-carousel.css';
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function VideoCarousel() {
    return (
        <div className="centered-container">
            <h3>
                <FontAwesomeIcon icon={faVideo} className="fa-container" style={{ marginRight: '10px' }} />
                Полезные видео
            </h3>
            <Carousel shape="bar">
                <div className="carousel-slide">
                    <div className="video-container">
                        <iframe
                            style={{margin:"20px"}}
                            width="270"
                            height="315"
                            src="https://www.youtube.com/embed/S108rIZA6xY"
                            title="Video 1"
                        />
                        <iframe
                            style={{margin:"20px"}}
                            width="270"
                            height="315"
                            src="https://www.youtube.com/embed/Z-JzryWEBYQ"
                            title="Video 2"
                        />
                        <iframe
                            style={{margin:"20px"}}
                            width="270"
                            height="315"
                            src="https://www.youtube.com/embed/HOYuayH27GM"
                            title="Video 3"/>
                    </div>
                </div>
                <div className="carousel-slide">
                    <div className="video-container">
                        <iframe
                            style={{margin:"20px"}}
                            width="270"
                            height="315"
                            src="https://www.youtube.com/embed/25lCunO6yDQ"
                            title="Video 4"
                        />
                        <iframe
                            style={{margin:"20px"}}
                            width="270"
                            height="315"
                            src="https://www.youtube.com/embed/d5weK2w1V4A"
                            title="Video 5"
                        />
                        <iframe
                            style={{margin:"20px"}}
                            width="270"
                            height="315"
                            src="https://www.youtube.com/embed/_-lP-Q7zF2w"
                            title="Video 6"></iframe>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default VideoCarousel;
