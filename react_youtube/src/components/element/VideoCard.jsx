import { Link } from 'react-router-dom'
import styles from '../../css/VideoCard.module.css'

function VideoCard({ video }) {
  const {
    id,
    title,
    channelTitle,
    publishedAt,
    thumbnails,
    viewCount,
    duration
  } = video

  return (
    <div className={styles.videoCard}>
      <Link to={`/watch?v=${id}`} className={styles.thumbnailLink}>
        <div className={styles.thumbnail}>
          <img
            src={thumbnails?.medium?.url || thumbnails?.default?.url}
            alt={title}
            className={styles.thumbnailImage}
          />
          {duration && (
            <span className={styles.duration}>{duration}</span>
          )}
        </div>
      </Link>
      <div className={styles.videoInfo}>
        <Link to={`/watch?v=${id}`} className={styles.titleLink}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <p className={styles.channel}>{channelTitle}</p>
        <div className={styles.metadata}>
          {viewCount && <span>조회수 {viewCount}회</span>}
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

export default VideoCard