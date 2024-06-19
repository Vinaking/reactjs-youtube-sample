import dispatcher from "../AppDispatcher";
import actionTypes from "./actionTypes";

export function getVideos() {
  fetch("https://666fe5290900b5f87248971a.mockapi.io/videos")
      .then(res => res.json())
      .then(
        (result) => {
          dispatcher.dispatch({
            actionTypes: actionTypes.GET_VIDEOS,
            videos: result
          });
          // setVideos(result)
        },
        (error) => {
          console.log(error);
        }
      )
}