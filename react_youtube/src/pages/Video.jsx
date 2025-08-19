import { useEffect, useState } from 'react'
import { useSearch } from '../state/SearchContext'
import { useListLayout } from '../state/ListLayoutContext'
import VideoCard from '../components/element/VideoCard'
import { getVideos } from '../api/youtube'

function Video() {
  const { searchTerm } = useSearch()
  const { isListView } = useListLayout()
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true)
      try {
        const data = await getVideos(searchTerm || 'popular')
        setVideos(data)
      } catch (error) {
        console.error('Error fetching videos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [searchTerm])

  if (loading) return <div className="loading">Loading...</div>

  return (
    <div className={`video-grid ${isListView ? 'list-view' : 'grid-view'}`}>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}

export default Video