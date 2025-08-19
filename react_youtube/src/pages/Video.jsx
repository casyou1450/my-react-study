import { useContext } from "react";
//커스텀 훅 - 채널 정보와 비디오를 가져오기 위한
import {useShowVideos } from "../hook/useYoutube";
//검색 컨텍스트
import { KeywordContext } from "../state/KeywordContext";
//컴포넌트
import VideoCard from "../components/element/VideoCard";
import Spinner from "../components/element/Spinner";

const Video = () => {
  const { search } = useContext(KeywordContext);
  const { data: videos, isLoading, error } = useShowVideos(search);

  if (isLoading) {
    return (
    <Spinner/>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-600 dark:text-red-400">에러가 발생했습니다</div>
      </div>
    );
  }
  return (
    <div className="container-xl px-4 py-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {videos?.items?.map((video,index) => {
          console.log(`${video?.id}${index}`)
        return <VideoCard key={`${video?.id}${index}`} video={video} layout="default" />
        })}
      </div>
    </div>
  );
};
export default Video;