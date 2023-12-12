import Iframe from "react-iframe";

interface ChildComponentProps {
    url: string;
}

function IFrameLevel(props : ChildComponentProps){
    const { url } = props;

    return (
        <>
            <Iframe url={url}
                    position="absolute"
                    width="100%"
                    height="100%"
                    sandbox={["allow-same-origin", "allow-scripts", "allow-popups", "allow-popups-to-escape-sandbox"]}/>
        </>
    );
}

export default IFrameLevel;