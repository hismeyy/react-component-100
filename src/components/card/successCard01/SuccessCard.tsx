import confetti from "canvas-confetti";
import "./SuccessCard.css";
import medalPNG from "./medal.png";

const SuccessCard = () => {
  // 触发烟花效果的函数
  const triggerConfetti = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = rect.top / window.innerHeight;

    confetti({
      particleCount: 200,     
      angle: 90,              
      spread: 90,           
      origin: { x, y }, 
      scalar: 1.5,            
    });
  };

  return (
    <div className="success-card">
      <div className="success-medal">
        <img src={medalPNG} alt="success-medal" />
      </div>
      <div className="success-message">
        <h1>Congratulations</h1>
        <p>You did a great job in the test!</p>
      </div>
      <div className="success-button">
        <button onClick={triggerConfetti}>Continue</button>
      </div>
    </div>
  );
};

export default SuccessCard;
