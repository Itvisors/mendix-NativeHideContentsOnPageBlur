import { createElement, useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function NavigationEventReceiver(props) {
    const [renderContents, setRenderContents] = useState(true);

    const navigation = useNavigation();

    const { logToConsole, onFocus, onBlur } = props;

    useEffect(() => {
        const unsubscribeFocus = navigation.addListener("focus", payload => {
            console.info(JSON.stringify(payload));
            // if (logToConsole) {
            //     console.info("NativeHideContentsOnPageBlur will focus, back to page: " + payload.state.params.pageName);
            // }
            // setRenderContents(true);
            // onFocus();
        });

        return unsubscribeFocus;
    }, [logToConsole, navigation, onFocus]);

    useEffect(() => {
        const unsubscribeBlur = navigation.addListener("blur", payload => {
            console.info(JSON.stringify(payload));
            //         if (logToConsole) {
            //             console.info("NativeHideContentsOnPageBlur will blur, open page: " + payload.state.params.pageName);
            //         }
            //         setRenderContents(false);
            //         onBlur();
        });

        return unsubscribeBlur;
    }, [logToConsole, navigation, onBlur]);

    if (props.logToConsole) {
        console.info(props.widgetName + ": render contents: " + renderContents);
    }

    return <View style={{ flex: 1 }}>{renderContents ? props.contents : null}</View>;
}
