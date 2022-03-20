import {RatingStar} from "./IconManager";

export function RatingStarBar({rating, ...props}) {
	return (
		<HStack width="auto" marginTop={8} {...props}>
			<RatingStar isColored={rating >= 1}/>
			<RatingStar isColored={rating >= 2}/>
			<RatingStar isColored={rating >= 3}/>
			<RatingStar isColored={rating >= 4}/>
			<RatingStar isColored={rating >= 5}/>
		</HStack>
	)
}

export function NumberBadge({number}){
	return(
		<View style={{
			height: 12,
			width: 12,
			borderRadius: 100,
			justifyContent: "center",
			alignItems: "center",
		}}>
			<VarText type="nano">{number}</VarText>
		</View>
	)
}


export function RankBadge({rank}){
	 return(
<></>
	 )
}

import {HStack} from "./BaseLayout";
import {View} from "react-native";
import {VarText} from "./TextLayout";
