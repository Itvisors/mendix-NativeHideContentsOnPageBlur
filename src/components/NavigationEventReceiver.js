import { createElement, useCallback, useState } from "react";
import { NavigationEvents } from "react-navigation";
import { View } from "react-native";

export function NavigationEventReceiver(props) {
    const [renderContents, setRenderContents] = useState(true);

    const onDidFocusHandler = useCallback(
        payload => {
            if (props.logToConsole) {
                console.info("NativeHideContentsOnPageBlur did focus, payload: " + JSON.stringify(payload));
            }
            setRenderContents(true);
        },
        [props.logToConsole]
    );

    const onWillBlurHandler = useCallback(
        payload => {
            if (props.logToConsole) {
                console.info("NativeHideContentsOnPageBlur will blur, payload: " + JSON.stringify(payload));
            }
            setRenderContents(false);
        },
        [props.logToConsole]
    );

    if (props.logToConsole) {
        console.info("NativeHideContentsOnPageBlur render contents: " + renderContents);
    }

    return (
        <View style={{ flex: 1 }}>
            <NavigationEvents onDidFocus={onDidFocusHandler} onWillBlur={onWillBlurHandler}></NavigationEvents>
            {renderContents ? props.contents : null}
        </View>
    );
}
