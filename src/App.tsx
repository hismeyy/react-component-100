import './App.css'
import Img from './components/img/img01/Img'

function App() {
  const handleImageClose = () => {
    console.log('图片被关闭了');
    // 这里可以执行任何你需要的关闭逻辑
  };

  return (
    <>
      <Img
        src="https://picsum.photos/200"
        alt="Random image"
        size="large"
        onClose={handleImageClose}
      />
    </>
  );
}

export default App
