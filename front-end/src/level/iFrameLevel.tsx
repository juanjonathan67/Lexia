import Iframe from "react-iframe";
import background from '../assets/Login.png'
import Sidebar from "../menu/Sidebar";

interface ChildComponentProps {
  url: string;
}

function IFrameLevel(props : ChildComponentProps){
  const { url } = props;
  
  return (
    <div className="w-screen">
      <div className="absolute z-10">
        <Sidebar/>
      </div>
      <img src={background} className="absolute"></img>
      <div className="h-screen flex items-center justify-center">
        <Iframe url={url}
        position="absolute"
        width="60%"
        height="60%"
        sandbox={["allow-same-origin", "allow-scripts", "allow-popups", "allow-popups-to-escape-sandbox"]}/>
      </div>
    </div>
  );
}
  
export default IFrameLevel;