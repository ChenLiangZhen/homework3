import {RatingStar} from "./IconManager";

export function RatingStarBar({rating}) {
	return (
		<HStack width="auto" marginTop={8}>
			<RatingStar isColored={rating >= 1}/>
			<RatingStar isColored={rating >= 2}/>
			<RatingStar isColored={rating >= 3}/>
			<RatingStar isColored={rating >= 4}/>
			<RatingStar isColored={rating >= 5}/>
		</HStack>
	)
}

export function RankBadge({rank}){
	 return(
<></>
	 )
}

import {HStack} from "./BaseLayout";
