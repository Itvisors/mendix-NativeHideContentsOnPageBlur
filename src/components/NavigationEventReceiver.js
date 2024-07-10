import { createElement, useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function NavigationEventReceiver(props) {
    const [renderContents, setRenderContents] = useState(true);

    const navigation = useNavigation();

    const { logToConsole, onFocus, onBlur, widgetName } = props;

    useEffect(() => {
        const unsubscribeFocus = navigation.addListener("focus", () => {
            if (logToConsole) {
                console.info(widgetName + " will focus");
            }
            setRenderContents(true);
            onFocus();
        });

        return unsubscribeFocus;
    }, [logToConsole, navigation, onFocus, widgetName]);

    useEffect(() => {
        const unsubscribeBlur = navigation.addListener("blur", () => {
            if (logToConsole) {
                console.info(widgetName + " will blur");
            }
            setRenderContents(false);
            onBlur();
        });

        return unsubscribeBlur;
    }, [logToConsole, navigation, onBlur, widgetName]);

    // If widget contents have been set, render these wrapped in a view with flex=1 to maximize it vertically against content without flex
    if (props.contents) {
        if (props.logToConsole) {
            console.info(widgetName + ": render contents: " + renderContents);
        }
        if (renderContents) {
            return <View style={{ flex: 1 }}>{props.contents}</View>;
        } else {
            return null;
        }
    } else {
        if (props.logToConsole) {
            console.info(widgetName + ": no contents, render contents flag: " + renderContents);
        }
        return null;
    }
}
