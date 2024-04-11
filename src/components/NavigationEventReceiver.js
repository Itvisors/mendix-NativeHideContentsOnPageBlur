import { NavigationEvents, withNavigation } from "react-navigation";
import { createElement, useCallback } from "react";

function NavigationEventReceiver(props) {
    const { pageIsVisibleAttr, onVisibleStateChangedAction } = props;

    const onDidFocusHandler = useCallback(
        payload => {
            console.info("did focus: " + JSON.stringify(payload));
            if (pageIsVisibleAttr && pageIsVisibleAttr.status === "available") {
                if (pageIsVisibleAttr.readOnly) {
                    console.warn("NativeHideContentsOnPageBlur: Page is visible attribute is readonly");
                } else {
                    pageIsVisibleAttr.setValue(true);
                }
            }
            if (
                onVisibleStateChangedAction &&
                onVisibleStateChangedAction.canExecute &&
                !onVisibleStateChangedAction.isExecuting
            ) {
                onVisibleStateChangedAction.execute();
            }
        },
        [onVisibleStateChangedAction, pageIsVisibleAttr]
    );

    const onWillBlurHandler = useCallback(
        payload => {
            console.info("will blur: " + JSON.stringify(payload));
            if (pageIsVisibleAttr && pageIsVisibleAttr.status === "available") {
                if (pageIsVisibleAttr.readOnly) {
                    console.warn("NativeHideContentsOnPageBlur: Page is visible attribute is readonly");
                } else {
                    pageIsVisibleAttr.setValue(false);
                }
            }
            if (
                onVisibleStateChangedAction &&
                onVisibleStateChangedAction.canExecute &&
                !onVisibleStateChangedAction.isExecuting
            ) {
                onVisibleStateChangedAction.execute();
            }
        },
        [onVisibleStateChangedAction, pageIsVisibleAttr]
    );

    console.info("NavigationEventReceiver.render");
    console.info(JSON.stringify(props.navigation));

    return <NavigationEvents onDidFocus={onDidFocusHandler} onWillBlur={onWillBlurHandler}></NavigationEvents>;
}

export default withNavigation(NavigationEventReceiver);
