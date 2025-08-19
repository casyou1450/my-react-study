// YouTube API 설정
const API_KEY = 'YOUR_YOUTUBE_API_KEY' // 실제 API 키로 교체 필요
const BASE_URL = 'https://www.googleapis.com/youtube/v3'

// 비디오 목록 가져오기
export async function getVideos(searchTerm = 'popular', maxResults = 20) {
  try {
    const url = searchTerm === 'popular' 
      ? `${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&regionCode=KR&maxResults=${maxResults}&key=${API_KEY}`
      : `${BASE_URL}/search?part=snippet&q=${encodeURIComponent(searchTerm)}&type=video&maxResults=${maxResults}&key=${API_KEY}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch videos')
    }
    
    return data.items.map(item => ({
      id: item.id.videoId || item.id,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      thumbnails: item.snippet.thumbnails,
      description: item.snippet.description,
      viewCount: item.statistics?.viewCount,
      likeCount: item.statistics?.likeCount
    }))
  } catch (error) {
    console.error('Error fetching videos:', error)
    return []
  }
}

// 특정 비디오 상세 정보 가져오기
export async function getVideoDetails(videoId) {
  try {
    const url = `${BASE_URL}/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to fetch video details')
    }
    
    const item = data.items[0]
    if (!item) {
      throw new Error('Video not found')
    }
    
    return {
      id: item.id,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      description: item.snippet.description,
      viewCount: item.statistics.viewCount,
      likeCount: item.statistics.likeCount,
      thumbnails: item.snippet.thumbnails
    }
  } catch (error) {
    console.error('Error fetching video details:', error)
    throw error
  }
}