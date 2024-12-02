import VideoCard from './components/card/videoCard01/VideoCard'
import './App.css'

function App() {
  const handleMoreClick = () => {
    console.log('查看更多信息');
  };

  return (
    <div className="App">
      <VideoCard
        videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
        title="萌宠日常"
        onMoreClick={handleMoreClick}
      />
    </div>
  );
}

export default App;
