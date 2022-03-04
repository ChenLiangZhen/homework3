import {View} from "react-native";

export function BaseLayouts({children, ...props}){
	return(
		<View style={{
			height: props.h,
			width: props.w,
			backgroundColor: props.bg,
		}}>
			{children}
		</View>
	)

}