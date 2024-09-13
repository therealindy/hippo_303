import { useState } from "react"

export default function App() {
  const [level, setLevel] = useState(0);

  const foodwatermalon = () => {
    setLevel(level + 5);
    checkLevelAndZoom();
  };
  const foodpumgin = () => {
    setLevel(level + 10);
    checkLevelAndZoom();
  };
  const foodglass = () => {
    setLevel(level + 15);
    checkLevelAndZoom();
  };

  const newImageUrl = 'https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/59/88/8857124335059/8857124335059.jpg';
  function checkLevelAndZoom() {
    if (level == 30) {
      document.getElementById('mudeng').style.width = '300px';
    } else if (level == 60) {
      document.getElementById('mudeng').style.width = '400px';
    } else if (level == 90) {
      document.getElementById('mudeng').style.width = '500px';
    } else if (level >= 100) {
      document.getElementById('mudeng').src = newImageUrl;
    }
  }
  return (
    <>
      <h2>
        <h1>หมูเด้ง: level {level}</h1>
        <img src="https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg" alt="หมูเด้ง" width='250px' id="mudeng" />
        <p>คลิกที่ปุ่มเพื่อให้อาหารหมูเด้ง!</p>
        <button onClick={foodwatermalon}><img src="https://images.seattletimes.com/wp-content/uploads/2017/07/7b4c85c2-6687-11e7-8665-356bf84600f6.jpg?d=2040x1360" alt="แตงโม" width='200px' /></button>
        <button onClick={foodpumgin}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRia1Ul2-8uIQm64jE0ZVmBuU5RQuMIuWILnA&s" alt="ฟักทอง" width='200px' /></button>
        <button onClick={foodglass}><img src="https://www.chokchai.go.th/wp-content/uploads/2022/08/image-photo2-95902.jpg" alt="หญ้า" width='200px' /></button></h2>
    </>
  );
}