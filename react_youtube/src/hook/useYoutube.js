// 서버에서 데이터를 가져오기 위한 React  Query 훅
// 내가 youtube.js에서 설정한 함수
import { useQuery } from "@tanstack/react-query";
import { getShowVideos, getSearchVideos, getChannelInfo } from "../api/youtube";

// 커스텀 훅
// 비디오 뽑아오기
// 검색어 있으면 getSearchVideos로...
export const useShowVideos = (keyword) => {
  return useQuery({
    queryKey: ["showVideos", keyword],
    queryFn: () => (keyword ? getSearchVideos(keyword) : getShowVideos()),
  });
};

//채널 정보
export const useChannelInfo = (channelId) => {
  return useQuery({
    queryKey: ["channelInfo", channelId],
    queryFn: () => getChannelInfo(channelId),
  });
};