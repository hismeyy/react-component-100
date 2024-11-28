import './InfoCard.css'

interface InfoCardProps {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt?: string;
}

const InfoCard = ({ 
    title, 
    description, 
    imgSrc, 
    imgAlt = title
}: InfoCardProps) => {
    return (
        <div className='info-card'>
            <div className='img'>
                {imgSrc && <img src={imgSrc} alt={imgAlt} />}
            </div>
            <div className="info">
                <h6>{title}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default InfoCard