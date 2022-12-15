import { useState } from "react";
import Profile from "./profile";
import Posts from "./Posts";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  let date = new Date().toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' });
  const [currentDate, setCurrentDate] = useState(date);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000)

  return (
    <>
      <div className="row mt-3">
        <div className="col-3">
          <Profile />
          <div className="container border ps-4 pt-5 fw-bold shadow-lg mt-5" id="userinfo">
            {currentTime}
            <br />
            {currentDate}
            <br />
          </div>
        </div>
        <div className="col-9" style={{ overflowY: 'scroll', maxHeight: '70vh' }}>
          <div className="container border ps-4 pt-5 fw-bold shadow-lg pb-5">
            <Posts />
          </div>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  return <Clock />
}
