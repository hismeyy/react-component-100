import { useState } from 'react'
import './Img.css'
import { MdClose } from 'react-icons/md';

interface ImgProps {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large';
    onClose?: () => void;
}

const Img = ({ src, alt, size = 'small', onClose }: ImgProps) => {
    const [showPreview, setShowPreview] = useState(false);
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    };

    if (!visible) return null;

    return (
        <div className={`img-container img-${size}`}>
            <button className={`img-close img-close-${size}`} onClick={handleClose}><MdClose /></button>
            <div className={`img img-${size}`} onClick={() => setShowPreview(true)}>
                <img src={src} alt={alt} />
            </div>

            {showPreview && (
                <div className="img-preview-overlay" onClick={() => setShowPreview(false)}>
                    <div className="img-preview-content">
                        <img src={src} alt={alt} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Img