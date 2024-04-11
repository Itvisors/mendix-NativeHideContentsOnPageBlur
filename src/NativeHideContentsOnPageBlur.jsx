import { NavigationEventReceiver } from "./components/NavigationEventReceiver";
import { createElement } from "react";
// import { withNavigation } from "react-navigation";

export function NativeHideContentsOnPageBlur(props) {
    return (
        <NavigationEventReceiver
            contents={props.contents}
            logToConsole={!!props.logToConsole?.value}
        ></NavigationEventReceiver>
    );
}
