import Logo from '../../resources/img/logo.png';
import Hamburger from '../../resources/Icons/hamburger.svg';
import profile from '../../resources/img/pix1.jpg';
import homePix from '../../resources/tempImg/homepage.jpg';
import artist1 from '../../resources/tempImg/Untitled.jpg';
import artist2 from '../../resources/tempImg/Untitled1.jpg';
import artist3 from '../../resources/tempImg/Untitled2.jpg';
import artist4 from '../../resources/tempImg/Untitled3.jpg';
import artist5 from '../../resources/tempImg/Untitled4.jpg';
import artist6 from '../../resources/tempImg/Untitled5.jpg';

export default function Top({ navExpanded, setNavExpanded }) {
    const handleMenu = () => {
        setNavExpanded(!navExpanded)
    }

    return (
        <div className="home-top">
            <div className='mobile-top'>
                <div className='main-logo'>
                    <img src={Logo} alt="logo" id='mobile-logo' />
                    <h1>Lilting</h1>
                </div>
                <img
                    src={Hamburger}
                    alt="menu"
                    className='hamb-icn'
                    onClick={handleMenu}
                />
            </div>
            <div className="top-navbar">
                <input placeholder="Serch here" type="text" />
                <div className="top-profile">
                    <img src={profile} alt="profile pix" />
                    <h3>Meeyah</h3>
                </div>
                <div className="top-settings">S</div>
            </div>
            <div className="top-content">
                <div className="col1">
                    <h2>Top Trending Music</h2>
                    <a href="##">See All</a>
                    <img src={homePix} alt="trending music" />
                </div>
                <div className="col2">
                    <h2>Top Artists</h2>
                    <a href="##">See All</a>
                    <div className="col2-img">
                        <img src={artist1} alt="" />
                        <img src={artist2} alt="" />
                        <img src={artist3} alt="" />
                        <img src={artist4} alt="" />
                        <img src={artist5} alt="" />
                        <img src={artist6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
