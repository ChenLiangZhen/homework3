import {MaterialIcons} from "@expo/vector-icons";
import {Pressable} from "react-native";

export function RightArrowIcon(){
	return(
		<Pressable style={{
			height: 32,
			width: 32,
			justifyContent: "center",
			alignItems: "center",
		}}>
			<MaterialIcons name="arrow-forward-ios" size={22} color="black"/>

		</Pressable>
	)
}