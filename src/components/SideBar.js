import './SideBar.css'
import exploreIcon from '../icons/explore.svg'
import homeIcon from '../icons/home.svg'
import subcriptionIcon from '../icons/subscriptions.svg'
import originialIcon from '../icons/originals.svg'
import youtubeMusicIcon from '../icons/youtube-music.svg'
import libraryIcon from '../icons/library.svg'

export default function SideBar() {
  return(
    <div className='sidebar'>
      <button className='sidebar-button'>
        <img src={homeIcon}/>
        <p>Home</p>
      </button>
      <button className='sidebar-button'>
        <img src={exploreIcon}/>
        <p>Explore</p>
      </button>
      <button className='sidebar-button'>
        <img src={subcriptionIcon}/>
        <p>Subcriptions</p>
      </button>
      <button className='sidebar-button'>
        <img src={originialIcon}/>
        <p>Originals</p>
      </button>
      <button className='sidebar-button'>
        <img src={youtubeMusicIcon}/>
        <p>Youtube Music</p>
      </button>
      <button className='sidebar-button'>
        <img src={libraryIcon}/>
        <p>Library</p>
      </button>
    </div>
  );
}