import ReactPlayer from "react-player";
import heroVideo from "./Hero-Video.mp4";

export default function Hero() {
  return (
    <center>
      <ReactPlayer
        url={heroVideo}
        width="75%"
        height="75%"
        autoPlay
        controls
        className="video"
      />
    </center>
  );
}
