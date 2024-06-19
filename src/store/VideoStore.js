import dispatcher from "../AppDispatcher";
import { EventEmitter } from "events";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = 'change';
let _videos = [];

class VideoStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getVideos() {
    return _videos
  }
}

const store = new VideoStore();
dispatcher.register((action) => {
  switch(action.actionTypes) {
    case actionTypes.GET_VIDEOS: 
      _videos = action.videos;
      store.emitChange();
      break;
    default: 
      break;
  }
});

export default store;