import { useEffect, useState } from "react";
import "./App.css";
import Webcam from "webcam-easy";
import NavBar from "./Component/NavBar/NavBar"
import Main from "./Component/Main/Main"

function App() {
  const [count, setCount] = useState(0);
  const [webcam, setWebcam] = useState();
  const [userImg, setUserImg] = useState();
  useEffect(() => {
    let image = localStorage.getItem("userImg") || "";
    setUserImg(image);
  }, []);
  const openCamera = () => {
    const webcamElement = document.getElementById("webcam");
    const canvasElement = document.getElementById("canvas");
    const snapSoundElement = document.getElementById("snapSound");
    webcamElement.classList.remove("d-none");
    setWebcam(() => {
      let newWebCam = new Webcam(
        webcamElement,
        "user",
        canvasElement,
        snapSoundElement
      );
      newWebCam
        .start()
        .then((result) => {
          console.log("webcam started");
        })
        .catch((err) => {
          console.log(err);
        });

      return newWebCam;
    });
  };

  const captureImage = () => {
    let picture = webcam.snap();
    setUserImg(picture);
    localStorage.setItem("userImg", picture);
    webcam.stop();
    const webcamElement = document.getElementById("webcam");
    webcamElement.classList.add("d-none");
    // document.querySelector("#captured-img").src = picture;
  };

  return (
    <div className="app">
    <NavBar/>
    <Main openCamera={openCamera}/>
      <div>
        <video
          id="webcam"
          autoPlay
          playsInline
          width="640"
          height="480"
        ></video>
        <canvas id="canvas" className="d-none"></canvas>
        <audio id="snapSound" src="audio/snap.wav" preload="auto"></audio>
        <img id="captured-img" src={userImg}></img>
        <button onClick={openCamera}>
          {userImg == "" ? "Open Camera" : "Change Image"}
        </button>
        <button onClick={captureImage}>Capture</button>
      </div>
    </div>
  );
}

export default App;
