import { useRef, useState } from 'react'
import './VideoCard.css'

interface VideoCardProps {
    videoSrc: string;            
    title: string;                
    onMoreClick?: () => void;      
}

const VideoCard = ({ 
    videoSrc, 
    title, 
    onMoreClick
}: VideoCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleVideoEnded = () => {
        setIsPlaying(false)
    }

    return (
        <div className="video-card">
            <div className="video">
                <video 
                    ref={videoRef}
                    src={videoSrc}
                    onEnded={handleVideoEnded}
                ></video>
            </div>
            <div className='line'></div>
            <div className='info'>
                <div className='video-info'>
                    <div className="title">{title}</div>
                </div>
                <div className='video-functions'>
                    <button className='play' onClick={togglePlay}>
                        {isPlaying ? '暂停' : '播放'}
                    </button>
                    <button className='more' onClick={onMoreClick}>
                        更多
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoCard