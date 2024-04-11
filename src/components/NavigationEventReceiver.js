import { createElement, useCallback, useState } from "react";
import { NavigationEvents } from "react-navigation";
import { View } from "react-native";

export function NavigationEventReceiver(props) {
    const [renderContents, setRenderContents] = useState(true);

    const onWillFocusHandler = useCallback(
        payload => {
            if (props.logToConsole) {
                console.info("NativeHideContentsOnPageBlur will focus, back to page: " + payload.state.params.pageName);
            }
            setRenderContents(true);
        },
        [props.logToConsole]
    );

    const onWillBlurHandler = useCallback(
        payload => {
            if (props.logToConsole) {
                console.info("NativeHideContentsOnPageBlur will blur, open page: " + payload.state.params.pageName);
            }
            setRenderContents(false);
        },
        [props.logToConsole]
    );

    if (props.logToConsole) {
        console.info(props.widgetName + ": render contents: " + renderContents);
    }

    return (
        <View style={{ flex: 1 }}>
            <NavigationEvents onWillFocus={onWillFocusHandler} onWillBlur={onWillBlurHandler}></NavigationEvents>
            {renderContents ? props.contents : null}
        </View>
    );
}
