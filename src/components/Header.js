import './Header.css'
import hamburgerMenu from '../icons/hamburger-menu.svg'
import youtubeLogo from '../icons/youtube-logo.svg'
import searchButtonIcon from '../icons/search.svg'
import voiceSearchButtonIcon from '../icons/voice-search-icon.svg'
import uploadButtonIcon from '../icons/upload.svg'
import youtubeAppIcon from '../icons/youtube-apps.svg'
import notificationIcon from '../icons/notifications.svg'
import myChannelPicture from '../thumbnails/my-channel.jpeg'

export default function Header() {
  return (
    <header className='header'>
      <div className='left-section'>
        <img className='hamburger-menu header-icon' src={hamburgerMenu}></img>
        <img className='youtube-logo header-icon' src={youtubeLogo}></img>
      </div>
      <div className='middle-section'>
        <input className='search-input' placeholder='Search'></input>
        <button className='search-button'>
          <img className='search-icon header-icon' src={searchButtonIcon}></img>
          <div className='tooltip'>Search</div>
        </button>
        <button className='voice-search-button'>
          <img className='voice-search-icon header-icon' src={voiceSearchButtonIcon}></img>
          <div className='tooltip'>Search with your voice</div>
        </button>
      </div>
      <div className='right-section'>
        <button className='upload-button'>
          <img className='header-icon' src={uploadButtonIcon}></img>
        </button>
        <button className='youtube-app-button'>
          <img className='header-icon' src={youtubeAppIcon}></img>
        </button>
        <button className='notification-button'>
          <img className='header-icon' src={notificationIcon}></img>
          <p className='notification-count'>3</p>
        </button>
        <img className='my-channel' src={myChannelPicture} />
      </div>
    </header>
  );
}