import ReactPlayer from "react-player";
import heroVideo from "./Hero-Video.mp4";

export default function Hero() {
  return (
    <center>
      <ReactPlayer
        url={heroVideo}
        autoPlay
        controls
        width="60%"
        height="60%"
        className="video"
      />
    </center>
  );
}
