import './App.css'
import InfoCard from './components/card/infoCard04/InfoCard';

function App() {
  const handleFollow = () => {
    console.log('关注成功');
    
  };

  const handleMessage = () => {
    console.log('打开消息框');
    
  };

  return (
    <>
      <div className="App">
        <InfoCard
          avatarUrl="https://p7.itc.cn/q_70/images03/20230309/bc24a67a4dea4ae38296967a4f8ecea5.png"
          avatarAlt="MaxCosmos Avatar"
          name="MaxCosmos"
          description="前端开发工程师 | React开发者 | 热衷于打造优秀的用户体验和高性能web应用"
          labels={["React", "Next.js", "TypeScript", "UI/UX", "Tailwind", "Node.js"]}
          isVerified={true}
          onFollow={handleFollow}
          onMessage={handleMessage}
        />
      </div>
    </>
  );
}

export default App
