//메인 페이지ㅣ,?
import { useChannelInfo, useRandomVideos } from "../hook/useYoutube";
import { format } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';
import { register } from 'timeago.js';

register('ko',ko)

const Main = () => {
  console.log('Main 컴포넌트 실행됨!');
  const { data:videos, isLoading, error } = useRandomVideos();
  const { data:channel  } = useChannelInfo();
  if (isLoading) {
    return (
      <div className="">로딩중</div>
    )
  }
  if (error) {
    return (
      <div className="">에러</div>
    )
  }
  return (
    <div className="container-xl px-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {videos?.items?.map((video)=>{
          return (
          <div key={video.id} className="w-auto">
            <div className="grid grid-rows-1 gap-1">
              <div className="">
                <img src={video.snippet.thumbnails.high.url} />
              </div>
              <div className="grid grid-cols-2">
                <div className="">
                {channel}
                </div>
                <div className="">
                  <h3 className="text-xs w-auto">{video.snippet.title}</h3>
                  <p className="text-xs text-gray-500">
                    {format(video.snippet.publishedAt,'ko')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
};
export default Main;
