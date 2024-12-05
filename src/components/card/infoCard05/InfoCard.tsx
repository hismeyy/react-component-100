import "./InfoCard.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

interface InfoCardProps {
    name: string;
    birthday: string;
    location: string;
    job: string;
    email: string;
    avatarSrc: string;
    avatarAlt: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ name, birthday, location, job, email, avatarSrc, avatarAlt }) => {
    return (
        <div className="info-card">
            <div className="edit">
                <FiEdit />
            </div>
            <div className="info-avatar">
                <img src={avatarSrc} alt={avatarAlt} />
            </div>
            <div className="info">
                <div className="info-name"><span>name：</span>{name}</div>
                <div className="info-birthday"><span>birthday：</span>{birthday}</div>
                <div className="info-location"><span>location：</span>{location}</div>
                <div className="info-job"><span>job：</span>{job}</div>
                <div className="info-email"><span>email：</span>{email}</div>
                <div className="info-community">
                    <div><FaInstagram /></div>
                    <div><FaFacebookF /></div>
                    <div><FaTwitter /></div>
                    <div><AiFillWechat /></div>
                    <div><FaGithub /></div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
