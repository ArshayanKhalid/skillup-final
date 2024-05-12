import React, { useState } from 'react';
import '.././assets/styles/index.css';
import { FaFastForward } from "react-icons/fa";

function Play() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    return (
        <>
            <div className='grid'>
                <div>
                    <h2>Playlist</h2>
                    <div className="flexcol">
                        <div >
                            <div className='flex'>
                                <div>
                                    <iframe

                                        src="https://www.youtube.com/embed/tN6oJu2DqCM?si=oPjGhBbGFbLfklV_"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen
                                    ></iframe>
                                </div>

                                <div className='cursor' onClick={() => handleVideoClick('https://www.youtube.com/embed/tN6oJu2DqCM?si=oPjGhBbGFbLfklV_')}>
                                    <h1 >
                                        <FaFastForward />
                                    </h1>
                                </div>
                            </div>

                        </div>
                        <div >
                            <div className='flex'>
                                <div>
                                    <iframe

                                        src="https://www.youtube.com/embed/hmkF77F9TLw?si=6Y1qpwvAxliKXCXB" title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen
                                    ></iframe>
                                </div>

                                <div className='cursor' onClick={() => handleVideoClick('https://www.youtube.com/embed/hmkF77F9TLw?si=6Y1qpwvAxliKXCXB')}>
                                    <h1 >
                                        <FaFastForward />
                                    </h1>
                                </div>
                            </div>

                        </div>

                        <div >
                            <div className='flex'>
                                <div>
                                    <iframe

                                        src="https://www.youtube.com/embed/0sOvCWFmrtA?si=_PB6sos2v-bcntoc"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen
                                    ></iframe>
                                </div>

                                <div className='cursor' onClick={() => handleVideoClick('https://www.youtube.com/embed/0sOvCWFmrtA?si=_PB6sos2v-bcntoc')}>
                                    <h1 >
                                        <FaFastForward />
                                    </h1>
                                </div>
                            </div>

                        </div>
                        <div >
                            <div className='flex'>
                                <div>
                                    <iframe

                                        src="https://www.youtube.com/embed/IPiUDhwnZxA?si=lSekDMg_k7EWEXuZ" title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen
                                    ></iframe>
                                </div>

                                <div className='cursor' onClick={() => handleVideoClick('https://www.youtube.com/embed/IPiUDhwnZxA?si=lSekDMg_k7EWEXuZ')}>
                                    <h1 >
                                        <FaFastForward />
                                    </h1>
                                </div>
                            </div>

                        </div>
                        <div >
                            <div className='flex'>
                                <div>
                                    <iframe

                                        src="https://www.youtube.com/embed/fgdpvwEWJ9M?si=YfqB6I19-3LT6nPL"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen
                                    ></iframe>
                                </div>

                                <div className='cursor' onClick={() => handleVideoClick('https://www.youtube.com/embed/fgdpvwEWJ9M?si=YfqB6I19-3LT6nPL')}>
                                    <h1 >
                                        <FaFastForward />
                                    </h1>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                <div className='video'>
                    <h2>
                        Currently Playing
                    </h2>
                    <div >
                        <iframe width="1000" height="600" src={selectedVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                </div>
            </div>


        </>
    );
}

export default Play;