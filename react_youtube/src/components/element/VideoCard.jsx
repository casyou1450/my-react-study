import React from "react";
//커스텀 훅 - 채널 정보와 비디오를 가져오기 위한
import { useChannelInfo } from "../../hook/useYoutube";
//라우터 설정
import { useNavigate } from "react-router-dom";
//날짜 설정 라이브러리 - 국내 시간
import { format, register } from "timeago.js";
import ko from "timeago.js/lib/lang/ko";
register("ko", ko);

const VideoCard = ({ video, layout = "default" }) => {
  const { data: channel } = useChannelInfo(video.snippet.channelId);
  const navigator = useNavigate();
  const viewer = () => {
    console.log('전체 video 객체:', video);
    console.log('video.id:', video.id);
    console.log('video.id.videoId:', video.id?.videoId);
    
    // 안전하게 videoId 추출
    let videoId;
    if (typeof video.id === 'string') {
      videoId = video.id;
    } else if (video.id && typeof video.id === 'object') {
      videoId = video.id.videoId || video.id;
    }
    
    if (videoId) {
      navigator(`/video/watch/${videoId}`, {
        state: { channelId: video.snippet.channelId },
      });
    } else {
      console.error('videoId를 찾을 수 없습니다:', video);
    }
  };
  return (
    <div className={`flex gap-3 ${layout === "default" ? "flex-col" : "flex-row"}`} onClick={viewer}>
      <div className={`relative aspect-video ${layout === "watch" ? "w-2/5" : ""}`}>
        <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className={`flex flex-col ${layout === "watch" ? "w-3/5 justify-center" : ""}`}>
        <div className="flex space-x-3">
          <div className={`flex flex-col ${layout === "watch" ? " w-0 h-0" : "w-10 h-10 rounded-full flex-shrink-0 overflow-hidden"}`}>
            <img src={channel?.snippet?.thumbnails?.default?.url} alt="" />
          </div>
          <div className={`flex flex-col min-w-0 ${layout === "watch" ? "items-start" : ""}`}>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2">{video.snippet.title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{channel?.snippet?.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">조회수 • {format(video.snippet.publishedAt, "ko")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;