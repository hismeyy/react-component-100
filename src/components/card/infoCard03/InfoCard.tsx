import './InfoCard.css'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsPersonHearts } from "react-icons/bs";
import { BsTrophyFill } from "react-icons/bs";
import { FaStar } from 'react-icons/fa';

interface InfoCardProps {
    title?: string;
    avatarUrl?: string;
    name?: string;
    job?: string;
    progress?: number;
    likes?: number;
    checks?: number;
    trophies?: number;
}

const defaultProps: InfoCardProps = {
    title: "个人中心",
    avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&h=500&q=80",
    name: "MaxCosmos",
    job: "React 开发工程师",
    progress: 85,
    likes: 128,
    checks: 46,
    trophies: 15
}

const InfoCard = (props: InfoCardProps) => {
    const {
        title,
        avatarUrl,
        name,
        job,
        progress = defaultProps.progress,
        likes,
        checks,
        trophies
    } = { ...defaultProps, ...props };

    const circumference = 2 * Math.PI * 60;
    const strokeDashoffset = circumference - ((progress || 0) / 100) * circumference;

    return (
        <div className='info-card'>
            <div className='info-title'>
                <h6>{title}</h6>
            </div>
            <div className='info-avatar'>
                <div className='tip-logo'>
                    <FaStar />
                </div>

                <svg className='avatar-bg' width="130" height="130" viewBox="0 0 130 130" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="65" cy="65" r="60" stroke="#E0E1E6" stroke-width="5" fill="none" />
                    <circle cx="65" cy="65" r="60" stroke="#FA7D73" stroke-width="5" fill="none"
                        stroke-dasharray={circumference} stroke-dashoffset={strokeDashoffset} stroke-linecap="round" />
                </svg>

                <div className='avatar'>
                    <img src={avatarUrl} alt={name} />
                </div>
            </div>
            <div className="info">
                <p className='info-name'>{name}</p>
                <p className='info-job'>{job}</p>
            </div>

            <div className='info-other'>
                <div><BsPersonHearts style={{ color: '#FF451C' }} />&nbsp;&nbsp;{likes}</div>
                <div><BsFillCheckCircleFill style={{ color: '#FF451C' }} />&nbsp;&nbsp;{checks}</div>
                <div><BsTrophyFill style={{ color: '#FF451C' }} />&nbsp;&nbsp;{trophies}</div>
            </div>
        </div>
    )
}

export default InfoCard