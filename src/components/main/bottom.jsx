import artist1 from '../../resources/tempImg/Untitled1.jpg';
import artist2 from '../../resources/tempImg/Untitled5.jpg';
import artist3 from '../../resources/tempImg/Untitled6.jpg';
import artist4 from '../../resources/tempImg/Untitled7.jpg';
import artist5 from '../../resources/tempImg/Untitled8.jpg';
import artist6 from '../../resources/tempImg/Untitled9.jpg';

export default function Bottom() {
    return (
        <div className="home-bottom">
            <div className="col-1">
                <div className="recomends">
                    <h2>Recomended For You</h2>
                    <a href="##">See All</a>
                    <div className="recomend-img">
                        <div className="recs">
                            <div className="rec-img-cont bg-gd1">
                                <div><img src={artist1} alt="artist" /></div>
                            </div>
                            <p>name</p>
                            <p>artist</p>
                        </div>
                        <div className="recs">
                            <div className="rec-img-cont bg-gd2">
                                <div><img src={artist2} alt="artist" /></div>
                            </div>
                            <p>name</p>
                            <p>artist</p>
                        </div>
                        <div className="recs">
                            <div className="rec-img-cont bg-gd3">
                                <div><img src={artist3} alt="artist" /></div>
                            </div>
                            <p>name</p>
                            <p>artist</p>
                        </div>
                    </div>
                </div>
                <div className="new-rls">
                    <h2>New Releases</h2>
                    <a href="##">See All</a>
                    <div className="rls-detail">
                        <div className="releases">
                            <div className="rls-img-cont bg-gd2">
                                <div><img src={artist4} alt="artist" /></div>
                            </div>
                            <p>name</p>
                            <p>artist</p>
                        </div>
                        <div className="releases">
                            <div className="rls-img-cont bg-gd3">
                                <div><img src={artist5} alt="artist" /></div>
                            </div>
                            <p>name</p>
                            <p>artist</p>
                        </div>
                        <div className="releases">
                            <div className="rls-img-cont bg-gd2">
                                <div><img src={artist6} alt="artist" /></div>
                            </div>
                            <p>name</p>
                            <p>artist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="recently-played">
                    <h2>Recently Played</h2>
                    <a href="##">See All</a>
                    <div className="recents">
                        <div className="rcnt-music">
                            <img src={artist2} alt="" />
                            <div className="rcnt-music-details">
                                <p>name</p>
                                <p>artist</p>
                            </div>
                        </div>
                        <i>ii</i>
                    </div>
                    <div className="recents">
                        <div className="rcnt-music">
                            <img src={artist5} alt="" />
                            <div className="rcnt-music-details">
                                <p>name</p>
                                <p>artist</p>
                            </div>
                        </div>
                        <i>ii</i>
                    </div>
                    <div className="recents">
                        <div className="rcnt-music">
                            <img src={artist1} alt="" />
                            <div className="rcnt-music-details">
                                <p>name</p>
                                <p>artist</p>
                            </div>
                        </div>
                        <i>ii</i>
                    </div>
                    <div className="play-nx">
                        <h2>Play Next</h2>
                        <a href="##"><div><p>+</p></div> </a>
                        <div className="play-nx-cont">
                            <div className="play-nx-items">
                                <p>01</p>
                                <img src={artist5} alt="" />
                                <div className="play-nx-details">
                                    <p>name</p>
                                    <p>Artist</p>
                                </div>
                            </div>
                            <div className="play-nx-items">
                                <p>02</p>
                                <img src={artist4} alt="" />
                                <div className="play-nx-details">
                                    <p>name</p>
                                    <p>Artist</p>
                                </div>
                            </div>
                            <div className="play-nx-items">
                                <p>03</p>
                                <img src={artist3} alt="" />
                                <div className="play-nx-details">
                                    <p>name</p>
                                    <p>Artist</p>
                                </div>
                            </div>
                            <div className="play-nx-items">
                                <p>04</p>
                                <img src={artist1} alt="" />
                                <div className="play-nx-details">
                                    <p>name</p>
                                    <p>Artist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
