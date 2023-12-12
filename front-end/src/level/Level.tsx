import IFrameLevel from "./iFrameLevel";

function Level(){
  return (
    <div className="h-screen w-screen">
      <div className="w-4/5">
        <IFrameLevel url="/Lexia/Lexia.html"/>
      </div>
    </div>
  )
}

export default Level;
