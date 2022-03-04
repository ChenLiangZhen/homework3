import {Text} from "react-native";

export function TitleText({children}){
    return(
        <Text style={{
            fontSize: 32,
            fontWeight: "bold"
        }}>
            {children}
        </Text>
    )
}

export function ParagraphText({children}){
    return(
        <Text style={{
            fontSize: 15
        }}>
            {children}
        </Text>
    )
}

export function NotionText({children}){
    return(
        <Text style={{
            fontSize: 13
        }}>
            {children}
        </Text>
    )
}