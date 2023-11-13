import ArtistPix from '../../resources/img/pix.jpg';
import './musicPlayer.css';
import shufIcon from '../../resources/Icons/shuffle.svg';
import prevIcon from '../../resources/Icons/previous.svg';
import playIcon from '../../resources/Icons/play.svg';
import pauseIcon from '../../resources/Icons/pause.svg';
import nexIcon from '../../resources/Icons/next.svg';
import rptIcon from '../../resources/Icons/repeat.svg';
import favIcon from '../../resources/Icons/favorite.svg';
import dwnIcon from '../../resources/Icons/download.svg';
import muteIcon from '../../resources/Icons/volume0.svg';
import volIcon from '../../resources/Icons/volume1.svg';
import hiVolIcon from '../../resources/Icons/volume.svg';
import { useState } from 'react';

export default function MusicPlayer() {
  const [play, setPlay] = useState(false)
  const [mute, setMute] = useState(false)
  const [hiVol, setHiVol] = useState(false)

  const handlePlay = () => {
    setPlay(true)
  }

  const handlePause = () => {
    setPlay(false)
  }

  // volume
  // const handleVol = () => {
  //   let vol = 49
  //   if (vol === 0) {
  //     setMute(true)
  //   } else if (vol < 50) {
  //     setHiVol(false)
  //   } else {
  //     setHiVol(true)
  //   }
  // }

  return (
    <section className="player">
      <div id='mx-at' className='pf-flex fx-1'>
        <img src={ArtistPix} alt="artist" id='mx-pix' />
        <div>
          <p>Terminator</p>
          <p>Asake</p>
        </div>
      </div>
      <div className='pf-flex fx-3'>
        <div className='pf-fle ctr-ctl'>
          <img src={shufIcon} alt="shuffle" className='icn' />
          <img src={prevIcon} alt="previous" className='icn' />
            { !play ?
              <img 
                src={playIcon} 
                alt="play"
                onClick={handlePlay} 
                className="control"
              />
              :
              <img 
                src={pauseIcon} 
                alt="pause"
                onClick={handlePause} 
                className="control"
              />
            }
          <img src={nexIcon} alt="next" className='icn' />
          <img src={rptIcon} alt="repeat" className='icn' /> 
        </div>
        <div id='progress'>
          <div id='progress-bar'></div>
        </div>
      </div>
      <div className='pf-flex fx-2'>
        <img src={favIcon} alt="favourite" className='icn icn-bg' />
        <img src={dwnIcon} alt="download" className='icn icn-bg' />
        <div className='vol'>
          { mute ? 
            <img src={muteIcon} alt="mute" className='icn' />
            :
            !hiVol ?
            <img src={volIcon} alt="low volume" className='icn' />
            :
            <img src={hiVolIcon} alt="hi volume" className='icn' />
          }
          <div id='vol-bar'>
            <div id='vol-prgs'></div>
          </div>
        </div>
      </div>
    </section>
  )
}
