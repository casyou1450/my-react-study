import axios from "axios";
// .env 파일에서 YouTube API 키 가져오기
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";
// YouTube API 연결을 위한 axios 인스턴스 생성
// params 설정:
// - key: API 키
// - part: 'snippet' (동영상 제목, 설명, 썸네일 등 기본 정보)
// - maxResults: 한 번에 가져올 동영상 개수
const youtubeApi = axios.create({
  baseURL: BASE_URL,
  params: {
    key: YOUTUBE_API_KEY,
    part: "snippet",
    maxResults: 20,
  },
});

//메인 jsx에서 보여줄 랜덤한 영상을 가져오기 위한 연결
export const getShowVideos = async () => {
  try {
    const response = await youtubeApi.get("/videos", {
      params: {
        chart: "mostPopular",
        regionCode: "KR",
      },
    });
    //랜덤 섞기를 위한  Fisher-Yates 알고리즘...
    const shuffleVideos = [...response.data.items];
    for (let i = shuffleVideos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleVideos[i], shuffleVideos[j]] = [shuffleVideos[j], shuffleVideos[i]];
    }
    return { ...response.data, items: shuffleVideos.slice(0, 25) };
  } catch (error) {
    console.log("ERROR : " + error);
    throw error;
  }
};

export const getSearchVideos = async (keyword) => {
  try {
    const response = await youtubeApi.get("/search", {
      params: {
        regionCode: "KR",
        q:keyword
      },
    });
    return { ...response.data};
  } catch (error) {
    console.log("ERROR : " + error);
    throw error;
  }
};


//채널 정보를 가져 오기 위한 연결
export const getChannelInfo = async (channelId) => {
  try {
    const response = await youtubeApi.get("/channels", {
      params: {
        id: channelId,
        part: "snippet,statistics",
      },
    });
    const channel = response.data.items[0];
    return channel;
  } catch (error) {
    console.error("채널 에러:", error);
    console.error("에러 응답:", error.response?.data);
    console.error("요청 URL:", error.config?.url);
    throw error;
  }
};