import './Video.css'
import { useEffect } from 'react';
import { useState } from 'react';
import videoStore from '../store/VideoStore'
import { getVideos } from '../actions/VideoActions';

// npm config set legacy-peer-deps true  npm i

export default function Video() {
  const [videos, setVideos] = useState([]);
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  }

  useEffect(() => {
    videoStore.addChangeListener(onchange);
    if (videos.length === 0) {
      getVideos()
    }
    return () => videoStore.removeChangeListener(onchange);
  }, [])

  function onchange() {
    setVideos(videoStore.getVideos());
  }

  const videoPreviews = videos.map(video => {
    return (
      <div className='video-preview' key={video.id} onClick={()=> openInNewTab(video.link)}>
        <img className='thumnail' src={video.thumbnail} />
        <div className='video-info-grid'>
          <img className='channel' src={video.profile} />
          <div>
            <p className='video-title'>
              {video.title}</p>
            <p className='video-author'>{video.author}</p>
            <p className='video-stats'>{video.seenCount}M views · {video.createDate} </p>
          </div>
        </div>
      </div>
    );
  })
  return (
    <div className='videos-grid'>
      {videoPreviews}
    </div>
  );
}