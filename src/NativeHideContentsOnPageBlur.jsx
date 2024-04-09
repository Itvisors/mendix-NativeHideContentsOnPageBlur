import NavigationEventReceiver from "./components/NavigationEventReceiver";
import { createElement } from "react";
// import { withNavigation } from "react-navigation";

export function NativeHideContentsOnPageBlur({ pageName }) {
    return <NavigationEventReceiver pageName={pageName}></NavigationEventReceiver>;
}
