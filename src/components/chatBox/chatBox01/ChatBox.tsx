import './ChatBox.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import { BiLaugh, BiImage } from "react-icons/bi";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import Img from '../../img/img01/Img';

// 全局常量定义
const MAX_LENGTH = 5000;  // 最大文本长度
const MAX_IMAGES = 9;     // 最大图片数量

// 类型定义
interface ImageItem {
    id: string;      // 图片唯一标识
    url: string;     // 图片URL或base64
    file: File;      // 图片文件对象
}

interface ChatContent {
    text: string;    // 聊天文本内容
    images: ImageItem[]; // 图片列表
}

const ChatBox = () => {
    // =============== 状态管理 ===============
    const [chatContent, setChatContent] = useState<ChatContent>({
        text: '',
        images: []
    });
    const [textLength, setTextLength] = useState(0);          // 当前文本长度
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);  // 表情选择器显示状态

    // =============== DOM引用 ===============
    const textareaRef = useRef<HTMLTextAreaElement>(null);    // 文本框引用
    const emojiPickerRef = useRef<HTMLDivElement>(null);      // 表情选择器引用
    const fileInputRef = useRef<HTMLInputElement>(null);      // 文件输入框引用

    // =============== 文本处理 ===============
    // 调整文本框高度
    const adjustTextareaHeight = useCallback((textarea: HTMLTextAreaElement) => {
        textarea.style.height = 'auto';
        textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }, []);

    // 处理文本输入
    const handleInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value;
        if (newText.length <= MAX_LENGTH) {
            setTextLength(newText.length);
            setChatContent(prev => ({
                ...prev,
                text: newText
            }));
            adjustTextareaHeight(e.target);
        }
    }, [adjustTextareaHeight]);

    // =============== 表情处理 ===============
    // 处理表情选择
    const handleEmojiSelect = useCallback((emoji: any) => {
        if (!textareaRef.current) return;

        const start = textareaRef.current.selectionStart;
        const end = textareaRef.current.selectionEnd;
        const currentText = textareaRef.current.value;
        const newText = currentText.slice(0, start) + emoji.native + currentText.slice(end);

        if (newText.length <= MAX_LENGTH) {
            setTextLength(newText.length);
            setChatContent(prev => ({
                ...prev,
                text: newText
            }));

            // 更新光标位置到表情后面
            setTimeout(() => {
                if (textareaRef.current) {
                    const newPosition = start + emoji.native.length;
                    textareaRef.current.selectionStart = newPosition;
                    textareaRef.current.selectionEnd = newPosition;
                    textareaRef.current.focus();
                    adjustTextareaHeight(textareaRef.current);
                }
            }, 0);
        }
        setShowEmojiPicker(false);
    }, [adjustTextareaHeight]);

    // 切换表情选择器显示状态
    const toggleEmojiPicker = useCallback(() => {
        setShowEmojiPicker(prev => !prev);
    }, []);

    // =============== 图片处理 ===============
    // 创建图片对象
    const createImageItem = useCallback((file: File, url: string): ImageItem => {
        return {
            id: Date.now().toString(),
            url,
            file
        };
    }, []);

    // 处理图片上传
    const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        // 检查图片数量是否超出限制
        if (chatContent.images.length + files.length > MAX_IMAGES) {
            alert(`最多只能上传${MAX_IMAGES}张图片`);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            return;
        }

        // 处理每个选中的图片文件
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    const newImage = createImageItem(file, e.target.result as string);
                    setChatContent(prev => ({
                        ...prev,
                        images: [...prev.images, newImage]
                    }));
                }
            };
            reader.readAsDataURL(file);
        });

        // 清空文件输入框，以便重复选择相同文件
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }, [chatContent.images.length, createImageItem]);

    // 处理图片选择按钮点击
    const handleImageClick = useCallback(() => {
        if (chatContent.images.length >= MAX_IMAGES) {
            alert(`最多只能上传${MAX_IMAGES}张图片`);
            return;
        }
        fileInputRef.current?.click();
    }, [chatContent.images.length]);

    // 处理图片删除
    const handleImageDelete = useCallback((id: string) => {
        setChatContent(prev => ({
            ...prev,
            images: prev.images.filter(img => img.id !== id)
        }));
    }, []);

    // =============== 副作用处理 ===============
    // 点击外部关闭表情选择器
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
                setShowEmojiPicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // =============== 渲染 ===============
    return (
        <div className="chat-box">
            {/* 文本输入区域 */}
            <div className="chat-input">
                <textarea
                    ref={textareaRef}
                    placeholder="# 要不要发点什么话...."
                    onChange={handleInput}
                    value={chatContent.text}
                    rows={1}
                    maxLength={MAX_LENGTH}
                />
                <div>
                    <span>{textLength}/{MAX_LENGTH}</span>
                </div>
            </div>

            {/* 图片预览区域 */}
            {chatContent.images.length > 0 && (
                <div className='chat-imgs'>
                    {chatContent.images.map((img) => (
                        <Img
                            key={img.id}
                            src={img.url}
                            alt="已上传图片"
                            size="small"
                            onClose={() => handleImageDelete(img.id)}
                        />
                    ))}
                </div>
            )}

            {/* 功能按钮区域 */}
            <div className='chat-functions'>
                <div className='left'>
                    {/* 表情选择器 */}
                    <div>
                        <div onClick={toggleEmojiPicker} className="emoji-trigger">
                            <BiLaugh /> &nbsp;表情
                        </div>
                        {showEmojiPicker && (
                            <div className='emoji-picker' ref={emojiPickerRef}>
                                <Picker
                                    data={data}
                                    onEmojiSelect={handleEmojiSelect}
                                    theme="light"
                                    locale="zh"
                                />
                            </div>
                        )}
                    </div>
                    {/* 图片上传 */}
                    <div onClick={handleImageClick}>
                        <BiImage /> &nbsp;图片
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        multiple
                        style={{ display: 'none' }}
                    />
                </div>
                <div className='right'>
                    <button>发布</button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;