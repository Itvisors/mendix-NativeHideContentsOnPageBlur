import NavigationEventReceiver from "./components/NavigationEventReceiver";
import { createElement } from "react";
// import { withNavigation } from "react-navigation";

export function NativeHideContentsOnPageBlur(props) {
    return (
        <NavigationEventReceiver
            pageIsVisibleAttr={props.pageIsVisibleAttr}
            onVisibleStateChangedAction={props.onVisibleStateChangedAction}
            logToConsole={!!props.logToConsole?.value}
        ></NavigationEventReceiver>
    );
}
