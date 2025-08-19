import { useParams, useLocation } from "react-router-dom";
//커스텀 훅 - 채널 정보와 비디오를 가져오기 위한
import { useShowVideos } from "../hook/useYoutube";
import { useChannelInfo } from "../hook/useYoutube";
//컴포넌트
import VideoCard from "../components/element/VideoCard";

//영상 시청 페이지
const Watch = () => {
  const location = useLocation();
  
  console.log('전체 location 객체:', location);
  console.log('location.pathname:', location.pathname);
  console.log('location.search:', location.search);
  console.log('location.state:', location.state);
  console.log('location.state 타입:', typeof location.state);
  
  
  const params = useParams();
  const { data: videos } = useShowVideos();
  const { data: channel } = useChannelInfo(location.state?.channelId);
  return (
    <div className="flex lg:flex-row flex-col lg:gap-10 gap-20">
      <div className="flex flex-col lg:w-3/4 lg:gap-10 w-4/4 gap-20">
        <div className="aspect-video">
          <iframe width="100%" height="600" src={`https://www.youtube.com/embed/${params.id}`} title="YouTube video player"></iframe>
        </div>
        <div className="py-4">
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{channel?.snippet?.title}</p>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/4 w-4/4">
        <div className="grid grid-col gap-6">
          {videos?.items?.map((video, index) => {
            return <VideoCard key={`${video?.id}${index}`} video={video} layout="watch" />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Watch;