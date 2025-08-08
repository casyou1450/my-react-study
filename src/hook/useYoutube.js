// 서버에서 데이터를 가져오기 위한 React  Query 훅 
// 내가 youtube.js에서 설정한 함수
import { useQuery } from "@tanstack/react-query";
import { getRandomVideos,getChannelInfo } from "../api/youtube";

// 커스텀 훅
// 랜덤 비디오
export const useRandomVideos = () => {
  return useQuery({
    queryKey:['randomVideos'],
    queryFn:getRandomVideos,
  })
}

//채널 정보
export const useChannelInfo = () => {
  return useQuery({
    queryKey:['channelInfo'],
    queryFn:getChannelInfo,
  })
}