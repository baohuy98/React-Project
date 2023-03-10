// import axios from "axios";
// import { https } from '../../services/config';
import { movieServ } from "../../services/movieService";

export const fetchBanners = async (dispatch) => {
  try {
    // const res = await axios({
    //   // url = domain + endpoint
    //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
    //   method: "GET",
    //   headers: {
    //     TokenCybersoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y",
    //   },
    // });
    const res = await movieServ.getBanners();
    dispatch({
      type: 'SET_BANNERS',
      payload: res.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};


export const fetchMovies =  (soTrang ) => async (dispatch) => {
    try {
      // const res = await axios({
      //   // url: domain + endpoint
      //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang",
      //   method: "GET",
      //   params:{
      //       maNhom:"GP01",
      //       soTrang: soTrang,
      //     // soTrang, // object literal 
      //       soPhanTuTrenTrang: 8,
      //   },
      //   headers: {
      //     TokenCybersoft:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOCIsIkhldEhhblN0cmluZyI6IjA2LzA4LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MTI4MDAwMDAwMCIsIm5iZiI6MTY2MjM5NzIwMCwiZXhwIjoxNjkxNDI3NjAwfQ.66mNB20qUNFA8TlIzjAq7Ekv1hVfR3hQB4I3_yLui8Y",
      //   },
      // });
      const res = await movieServ.getMoviePagination(8,soTrang)
      dispatch({
        type: "SET_MOVIES",
        payload: res.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export function fetchScheduleDetail(id){
    return async (dispatch) => {
      try {
        const res = await movieServ.getScheduleDetail(id)
        dispatch({
          type:"SET_SCHEDULE",
          payload: res.data.content
        })
      } catch(err) {
        console.log(err)
      }
    }
  }