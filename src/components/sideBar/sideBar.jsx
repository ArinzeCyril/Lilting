import Logo from '../../resources/img/logo.png';
import homeIcn from '../../resources/Icons/Home.png';
import userIcn from '../../resources/Icons/user.png';
import musicNoteIcn from '../../resources/Icons/musicnote.png';
import heartIcn from '../../resources/Icons/Heart.png';
import musicFilterIcn from '../../resources/Icons/music-filter.png';
import PaperPlusIcn from '../../resources/Icons/Paper-Plus.png';
import musicSquareIcn from '../../resources/Icons/mini-music-sqaure.png';
import trashIcn from '../../resources/Icons/trash.png';
import settingIcn from '../../resources/Icons/Setting.png';
import Close from '../../resources/Icons/times.svg';
import './sideBar.css'

export default function SideBar({ navExpanded, setNavExpanded }) {
  const handleClose = () => {
    setNavExpanded(!navExpanded)
  }
  return (
    <aside className={!navExpanded ? 'hide aside-color' : 'show'}>
      <div className="side-bar">
        <section id='logo'>
          <div id='logos'>
            <img src={Logo} alt="logo" />
            <h1>Lilting</h1>
          </div>
          <img
            src={Close}
            alt="close menu"
            className='close-icn'
            onClick={handleClose}
          />
        </section>
        <section>
          <h2>Browse Music</h2>
          <article>
            <img src={homeIcn} alt="home" />
            <p>home</p>
          </article>
          <article>
            <img src={userIcn} alt="artist" />
            <p>artist</p>
          </article>
          <article>
            <img src={musicNoteIcn} alt="genre" />
            <p>genres</p>
          </article>
        </section>
        <section>
          <h2>library</h2>
          <article>
            <img src={heartIcn} alt="favourite" />
            <p>favourite</p>
          </article>
          <article>
            <img src={heartIcn} alt="downloads" />
            <p>downlods</p>
          </article>
          <article>
            <img src={musicFilterIcn} alt="local music" />
            <p>local music</p>
          </article>
        </section>
        <section>
          <h2>playlist</h2>
          <article>
            <img src={PaperPlusIcn} alt="new playlist" />
            <p>create new playlist</p>
          </article>
          <article className='play-list'>
            <div>
              <img src={musicSquareIcn} alt="playlist" />
              <p>moody</p>
            </div>
            <img src={trashIcn} alt="delete" />
          </article>
          <article className='play-list'>
            <div>
              <img src={musicSquareIcn} alt="playlist" />
              <p>love song</p>
            </div>
            <img src={trashIcn} alt="delete" />
          </article>
          <article className='play-list'>
            <div>
              <img src={musicSquareIcn} alt="playlist" />
              <p>beyonce</p>
            </div>
            <img src={trashIcn} alt="delete" />
          </article>
        </section>
        <section>
          <h2>general</h2>
          <article>
            <img src={settingIcn} alt="setting" />
            <p>setting</p>
          </article>
          <div className='dev-detail'>
            <p>designed by Meeyah</p>
            <p>developed by Arinze Cyril</p>
          </div>
        </section>
      </div>
    </aside>
  )
}
