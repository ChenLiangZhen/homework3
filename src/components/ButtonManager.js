import {Pressable} from "react-native";
import {VarText} from "./TextLayout";

export function MainButton({type, text, color, onPress, letterSpacing, ...props}){

	let pressableStyle = {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "lightgray",
		paddingVertical: 4,
		paddingHorizontal: 10,
		borderRadius: 32
	}

	let textStyle ={

		fontSize: 14,
	}

	const lg={ fontSize: 22}
	const md={ fontSize: 18}
	const sm={ fontSize: 16}
	const mc={ fontSize: 14}
	const nano={ fontSize: 12}

	switch(type){

		case "lg":
			Object.assign(pressableStyle, {paddingVertical: 12, paddingHorizontal: 16});
			break

		case "md":
			Object.assign(pressableStyle, {paddingVertical: 10, paddingHorizontal: 14});

			break

		case "sm":
			Object.assign(pressableStyle, {paddingVertical: 8, paddingHorizontal: 12});

			break

		case "mc":
			Object.assign(pressableStyle, {paddingVertical: 6, paddingHorizontal: 10});

			break

		case "nano":
			Object.assign(pressableStyle, {paddingVertical: 4, paddingHorizontal: 8});

			break
	}

	return(
		<Pressable style={[
			pressableStyle, {...props}]}
		           onPress={onPress}>
			<VarText type={type} color={color} letterSpacing={letterSpacing}>
				{text}
			</VarText>
		</Pressable>
	)
}