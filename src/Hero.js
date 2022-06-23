import ReactPlayer from "react-player";
import heroVideo from "./Hero-Video.mp4";

export default function Hero() {
  return (
    <center>
      <ReactPlayer
        url={heroVideo}
        autoPlay
        controls
        width="75%"
        height="75%"
        className="video"
      />
    </center>
  );
}
