export interface ChatItem {
    id: number;
    userAvatar: string;
    avatarAlt: string;
    userName: string;
    sendTime: string;
    content: string;
    likes: number;
    comments: number;
    collections: number;
    // InfoCard fields
    description: string;
    labels: string[];
    isVerified: boolean;
}

export const chatData: ChatItem[] = [
    {
        id: 1,
        userAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
        avatarAlt: "张明的头像",
        userName: "张明",
        sendTime: "今天 08:30",
        content: "刚刚参加完一场很棒的技术分享会，讲的是React 18的新特性。Concurrent Mode和Server Components真的让人印象深刻，感觉未来的前端开发会更加有趣！",
        likes: 156,
        comments: 32,
        collections: 18,
        description: "资深前端工程师 / React 技术专家",
        labels: ["React", "TypeScript", "前端架构", "性能优化", "开源贡献者"],
        isVerified: true
    },
    {
        id: 2,
        userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
        avatarAlt: "李小云的头像",
        userName: "李小云",
        sendTime: "今天 09:15",
        content: "分享一个我最近在项目中遇到的性能优化问题：大量数据渲染导致页面卡顿。通过使用虚拟列表和React.memo()成功解决，页面加载速度提升了80%。欢迎交流讨论~",
        likes: 234,
        comments: 45,
        collections: 28,
        description: "高级前端开发 / 性能优化专家",
        labels: ["性能优化", "React", "虚拟列表", "前端架构"],
        isVerified: true
    },
    {
        id: 3,
        userAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
        avatarAlt: "王大力的头像",
        userName: "王大力",
        sendTime: "今天 10:42",
        content: "推荐一本超棒的技术书籍《深入浅出React和Redux》，对于想深入学习React的同学来说是一本不可多得的好书。书中的案例都很实用，概念讲解也非常清晰。",
        likes: 89,
        comments: 15,
        collections: 42,
        description: "技术作家 / React 培训讲师",
        labels: ["技术写作", "React", "Redux", "技术分享"],
        isVerified: false
    },
    {
        id: 4,
        userAvatar: "https://randomuser.me/api/portraits/women/4.jpg",
        avatarAlt: "陈佳慧的头像",
        userName: "陈佳慧",
        sendTime: "今天 11:20",
        content: "今天终于解决了困扰团队一周的Bug！原来是在处理异步请求时没有正确处理竞态条件，导致数据更新错乱。分享一下解决方案：使用AbortController和useEffect的cleanup函数完美解决了这个问题。",
        likes: 312,
        comments: 56,
        collections: 33,
        description: "全栈工程师 / React Native 专家",
        labels: ["React", "React Native", "移动开发", "全栈开发"],
        isVerified: true
    },
    {
        id: 5,
        userAvatar: "https://randomuser.me/api/portraits/men/5.jpg",
        avatarAlt: "刘技术的头像",
        userName: "刘技术",
        sendTime: "今天 12:05",
        content: "最近在研究微前端架构，感觉qiankun框架真的很强大。已经成功将我们的老项目逐步迁移到微前端架构，既保证了系统的稳定性，又提高了团队的开发效率。有同样经历的同学吗？",
        likes: 178,
        comments: 43,
        collections: 25,
        description: "架构师 / 微前端专家",
        labels: ["微前端", "架构设计", "qiankun", "模块联邦"],
        isVerified: true
    },
    {
        id: 6,
        userAvatar: "https://randomuser.me/api/portraits/women/6.jpg",
        avatarAlt: "赵晓晓的头像",
        userName: "赵晓晓",
        sendTime: "今天 13:30",
        content: "发现一个超实用的VS Code插件：GitHub Copilot！AI辅助编程真的太强大了，特别是在写一些重复性的代码时效率提升明显。推荐给大家！",
        likes: 267,
        comments: 89,
        collections: 54,
        description: "开发工具专家 / 效率工程师",
        labels: ["开发工具", "VS Code", "AI编程", "效率提升"],
        isVerified: false
    },
    {
        id: 7,
        userAvatar: "https://randomuser.me/api/portraits/men/7.jpg",
        avatarAlt: "孙小明的头像",
        userName: "孙小明",
        sendTime: "今天 14:15",
        content: "今天做了一个有趣的小实验：用React + Three.js开发了一个3D数据可视化组件。效果出乎意料的好，准备开源出来。感兴趣的同学请留言，我会把仓库地址分享出来。",
        likes: 423,
        comments: 98,
        collections: 76,
        description: "3D可视化专家 / React 开发者",
        labels: ["Three.js", "WebGL", "数据可视化", "React"],
        isVerified: true
    },
    {
        id: 8,
        userAvatar: "https://randomuser.me/api/portraits/women/8.jpg",
        avatarAlt: "周雪的头像",
        userName: "周雪",
        sendTime: "今天 15:00",
        content: "作为一名前端开发，最近开始学习TypeScript，真的改变了我的编程习惯。类型系统不仅让代码更安全，重构时也更有信心。强烈建议还没入门的同学抓紧学起来！",
        likes: 345,
        comments: 67,
        collections: 45,
        description: "前端开发工程师 / TypeScript 布道者",
        labels: ["TypeScript", "前端开发", "代码质量", "最佳实践"],
        isVerified: false
    }
];
