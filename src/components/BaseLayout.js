import {View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export function BaseTabContainer({children, ...props}) {
    return (
            <SafeAreaView edges={['right', 'left', 'top']} style={{
                flex: 1,
                width: "100%",
                ...props
            }}>
                {children}
            </SafeAreaView>
    )
}

export function BaseStackContainer({children, ...props}) {
    return (
            <SafeAreaView style={{
                flex: 1,
                width: "100%",
                ...props
            }}>
                {children}
            </SafeAreaView>
    )
}

export function HStack({children, ...props}) {
    return (
        <View style={{
            flexDirection: "row",
            ...props
        }}>
            {children}
        </View>
    )
}

export function VStack({children, ...props}) {
    return (
        <View style={{
            flexDirection: "column",
            ...props
        }}>
            {children}
        </View>
    )
}