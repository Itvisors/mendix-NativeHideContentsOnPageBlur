import { createElement, useEffect } from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";

function NavigationEventReceiver(props) {
    console.info("NavigationEventReceiver.render");
    console.info(JSON.stringify(props.navigation));

    useEffect(() => {
        console.info("NavigationEventReceiver.focus subscribe");
        const unsubscribeFocus = props.navigation.addListener("focus", () => {
            console.info("NavigationEventReceiver.focus");
            console.info(JSON.stringify(props.navigation.state));
        });

        return unsubscribeFocus;
    }, [props.navigation]);

    useEffect(() => {
        console.info("NavigationEventReceiver.blur subscribe");
        const unsubscribeBlur = props.navigation.addListener("blur", () => {
            console.info("NavigationEventReceiver.blur");
            console.info(JSON.stringify(props.navigation.state));
        });

        return unsubscribeBlur;
    }, [props.navigation]);

    useEffect(() => {
        console.info("NavigationEventReceiver.state subscribe");
        const unsubscribeState = props.navigation.addListener("state", () => {
            console.info("NavigationEventReceiver.state");
            console.info(JSON.stringify(props.navigation.state));
        });

        return unsubscribeState;
    }, [props.navigation]);

    return <View></View>;
}

export default withNavigation(NavigationEventReceiver);
