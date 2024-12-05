import './App.css'
import InfoCard from './components/card/infoCard05/InfoCard';

function App() {

  return (
    <InfoCard 
      name="Jane Doe"
      birthday="1985年7月20日"
      location="美国，纽约"
      job="软件工程师"
      email="jane.doe@example.com"
      avatarSrc="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&h=500&q=80"
      avatarAlt="Jane Doe的头像"
    />
  );
}

export default App;

