import './ChatList.css';
import { useState, useRef, useCallback } from 'react';
import { AiOutlineLike, AiOutlineMessage, AiOutlineStar } from "react-icons/ai";
import { chatData, ChatItem } from './data';
import InfoCard from '../card/infoCard04/InfoCard';

const ChatList = () => {
    // 用于管理悬停交互和信息卡片显示的状态
    const [hoveredUser, setHoveredUser] = useState<ChatItem | null>(null);
    const [infoCardPosition, setInfoCardPosition] = useState({ x: 0, y: 0 });
    const [isCardFading, setIsCardFading] = useState(false);
    
    // 用于管理动画超时的引用
    const timeoutRef = useRef<number | null>(null);
    // 用于跟踪鼠标是否在卡片区域内
    const isMouseInCardRef = useRef(false);

    /**
     * 处理头像的鼠标进入事件
     * 显示信息卡片并计算其正确位置
     */
    const handleAvatarMouseEnter = (e: React.MouseEvent<HTMLDivElement>, item: ChatItem) => {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsCardFading(false);
        
        // 根据头像位置计算信息卡片位置
        const rect = e.currentTarget.getBoundingClientRect();
        setInfoCardPosition({
            x: rect.left + window.scrollX,
            y: rect.bottom + window.scrollY
        });
        setHoveredUser(item);
    };

    /**
     * 检查鼠标是否移动到了InfoCard上
     * 通过检查鼠标当前位置和InfoCard的位置关系来判断
     */
    const checkIfMouseMovingToCard = useCallback((e: MouseEvent) => {
        const cardElement = document.querySelector('.info-card-container');
        if (!cardElement) return false;

        const cardRect = cardElement.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // 扩大判定区域，给予用户更大的移动空间
        const expandedRect = {
            left: cardRect.left - 20,
            right: cardRect.right + 20,
            top: cardRect.top - 20,
            bottom: cardRect.bottom + 20
        };

        return mouseX >= expandedRect.left && 
               mouseX <= expandedRect.right && 
               mouseY >= expandedRect.top && 
               mouseY <= expandedRect.bottom;
    }, []);

    /**
     * 处理头像和信息卡片的鼠标离开事件
     */
    const handleMouseLeave = (e: React.MouseEvent) => {
        // 如果鼠标正在往InfoCard方向移动，不触发隐藏
        if (checkIfMouseMovingToCard(e.nativeEvent)) {
            return;
        }

        // 如果鼠标已经在卡片内，不触发隐藏
        if (isMouseInCardRef.current) {
            return;
        }

        setIsCardFading(true);
        timeoutRef.current = window.setTimeout(() => {
            if (!isMouseInCardRef.current) {
                setHoveredUser(null);
                setIsCardFading(false);
            }
        }, 300);
    };

    /**
     * 处理信息卡片的鼠标进入事件
     */
    const handleInfoCardMouseEnter = () => {
        isMouseInCardRef.current = true;
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsCardFading(false);
    };

    /**
     * 处理信息卡片的鼠标离开事件
     */
    const handleInfoCardMouseLeave = () => {
        isMouseInCardRef.current = false;
        setIsCardFading(true);
        timeoutRef.current = window.setTimeout(() => {
            if (!isMouseInCardRef.current) {
                setHoveredUser(null);
                setIsCardFading(false);
            }
        }, 300);
    };

    /**
     * 处理关注按钮点击事件
     */
    const handleFollow = () => {
        console.log('关注用户:', hoveredUser?.userName);
    };

    /**
     * 处理发送消息按钮点击事件
     */
    const handleMessage = () => {
        console.log('发送消息给:', hoveredUser?.userName);
    };

    return (
        <div className="chat-list">
            {/* 聊天项目列表 */}
            <ul className="chat-items">
                {chatData.map((item: ChatItem) => (
                    <li key={item.id} className="chat-item">
                        {/* 用户信息区域 */}
                        <div className='chat-info'>
                            <div 
                                className='user-avatar'
                                onMouseEnter={(e) => handleAvatarMouseEnter(e, item)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img src={item.userAvatar} alt={item.avatarAlt} />
                            </div>
                            <div className='user-info'>
                                <h6 className='user-name'>{item.userName}</h6>
                                <p className='send-time'>{item.sendTime}</p>
                            </div>
                        </div>

                        {/* 消息内容 */}
                        <div className='chat-content'>
                            <p>{item.content}</p>
                        </div>

                        {/* 互动按钮 */}
                        <div className='chat-functions'>
                            <div className='like'>
                                <AiOutlineLike />{item.likes}
                            </div>
                            <div className='comment'>
                                <AiOutlineMessage />{item.comments}
                            </div>
                            <div className='collect'>
                                <AiOutlineStar />{item.collections}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* 悬停信息卡片 */}
            {hoveredUser && (
                <div 
                    className={`info-card-container ${isCardFading ? 'fade-out' : ''}`}
                    style={{
                        position: 'absolute',
                        left: `${infoCardPosition.x}px`,
                        top: `${infoCardPosition.y + 10}px`,
                        zIndex: 1000
                    }}
                    onMouseEnter={handleInfoCardMouseEnter}
                    onMouseLeave={handleInfoCardMouseLeave}
                >
                    <InfoCard
                        avatarUrl={hoveredUser.userAvatar}
                        avatarAlt={hoveredUser.avatarAlt}
                        name={hoveredUser.userName}
                        description={hoveredUser.description}
                        labels={hoveredUser.labels}
                        isVerified={hoveredUser.isVerified}
                        onFollow={handleFollow}
                        onMessage={handleMessage}
                    />
                </div>
            )}
        </div>
    );
};

export default ChatList;