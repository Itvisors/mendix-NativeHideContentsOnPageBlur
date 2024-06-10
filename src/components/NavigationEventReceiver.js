import { createElement, useCallback, useState } from "react";
import { NavigationEvents } from "react-navigation";
import { View } from "react-native";

export function NavigationEventReceiver(props) {
    const [renderContents, setRenderContents] = useState(true);

    const { logToConsole, onFocus, onBlur } = props;

    const onWillFocusHandler = useCallback(
        payload => {
            if (logToConsole) {
                console.info("NativeHideContentsOnPageBlur will focus, back to page: " + payload.state.params.pageName);
            }
            setRenderContents(true);
            onFocus();
        },
        [logToConsole, onFocus]
    );

    const onWillBlurHandler = useCallback(
        payload => {
            if (logToConsole) {
                console.info("NativeHideContentsOnPageBlur will blur, open page: " + payload.state.params.pageName);
            }
            setRenderContents(false);
            onBlur();
        },
        [logToConsole, onBlur]
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
