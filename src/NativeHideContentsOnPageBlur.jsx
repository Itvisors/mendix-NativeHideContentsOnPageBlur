import { createElement, useCallback } from "react";
import { NavigationEventReceiver } from "./components/NavigationEventReceiver";
// import { withNavigation } from "react-navigation";

export function NativeHideContentsOnPageBlur(props) {
    const { onFocusAction, onBlurAction } = props;
    const handleFocus = useCallback(() => {
        if (onFocusAction && onFocusAction.canExecute && !onFocusAction.isExecuting) {
            onFocusAction.execute();
        }
    }, [onFocusAction]);
    const handleBlur = useCallback(() => {
        if (onBlurAction && onBlurAction.canExecute && !onBlurAction.isExecuting) {
            onBlurAction.execute();
        }
    }, [onBlurAction]);

    console.info(JSON.stringify(props.logToConsole));

    return (
        <NavigationEventReceiver
            contents={props.contents}
            onFocus={handleFocus}
            onBlur={handleBlur}
            logToConsole={!!props.logToConsole?.value}
            widgetName={props.name}
        ></NavigationEventReceiver>
    );
}
