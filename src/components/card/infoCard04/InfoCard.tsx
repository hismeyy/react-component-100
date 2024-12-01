import './InfoCard.css'
import { FaStar } from 'react-icons/fa';

interface InfoCardProps {
    avatarUrl: string;
    avatarAlt: string;
    name: string;
    description: string;
    labels: string[];
    isVerified?: boolean;
    onFollow?: () => void;
    onMessage?: () => void;
}

const InfoCard = ({ 
    avatarUrl, 
    avatarAlt, 
    name, 
    description, 
    labels, 
    isVerified = false,
    onFollow,
    onMessage 
}: InfoCardProps) => {
    const displayLabels = labels.slice(0, 6);

    return (
        <div className='info-card'>
            <div className="info">
                <div className='info-avatar'>
                    <div className='tip-logo'>
                        {isVerified ? <FaStar /> : null}
                    </div>

                    <div className='avatar'>
                        <img src={avatarUrl} alt={avatarAlt} />
                    </div>
                </div>
                <div className='about-me'>
                    <h6>{name}</h6>
                    <p>{description}</p>
                </div>
            </div>
            <div className='labels'>
                {displayLabels.map((label, index) => (
                    <div key={index} className='label'>{label}</div>
                ))}
            </div>
            <div className='buttons'>
                <button onClick={onFollow}>关注</button>
                <button onClick={onMessage}>发消息</button>
            </div>
        </div>
    )
}

export default InfoCard