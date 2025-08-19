import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getVideoDetails } from '../api/youtube'

function Watch() {
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('v')
  const [video, setVideo] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!videoId) return

    const fetchVideo = async () => {
      setLoading(true)
      try {
        const data = await getVideoDetails(videoId)
        setVideo(data)
      } catch (error) {
        console.error('Error fetching video:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideo()
  }, [videoId])

  if (loading) return <div className="loading">Loading...</div>
  if (!video) return <div>Video not found</div>

  return (
    <div className="watch-page">
      <div className="video-player">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-info">
        <h1>{video.title}</h1>
        <p>{video.description}</p>
        <div className="video-stats">
          <span>조회수: {video.viewCount}</span>
          <span>좋아요: {video.likeCount}</span>
        </div>
      </div>
    </div>
  )
}

export default Watch