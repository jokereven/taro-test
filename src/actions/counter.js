import { axios } from "taro-axios";
import { ADD, MINUS, SONGLIST } from "../constants/counter";

export const add = () => {
  return {
    type: ADD,
  };
};
export const minus = () => {
  return {
    type: MINUS,
  };
};

// 异步的action
export function asyncAdd() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(add());
    }, 2000);
  };
}

export const GetSongList = (data) => ({
  type: SONGLIST,
  data,
});

// 获取网易云音乐歌单
export const getSongList = () => {
  return (dispatch) => {
    axios
      .get("https://netease-cloud-music-api-eta-pearl.vercel.app/top/playlist")
      .then((res) => {
        const data = res.data;
        // console.log(data);
        dispatch(GetSongList(data))
      })
      .catch(() => {
        console.log("获取歌单(网友精选碟)数据失败");
      });
  };
};
