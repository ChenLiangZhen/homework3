import AsyncStorage from "@react-native-async-storage/async-storage";

//get currently stored all-book data
export async function asyncGetAllBooks(){
	let result = await AsyncStorage.getItem("all-books");
	if (result) {
		return(result)
	} else {
		console.log("[Async Manager] [] Data Failed")
	}
}

export async function asyncSaveAllBooks(list){
	let result = await AsyncStorage.setItem("all-books", JSON.stringify(list));
}

//filter all-book data and create a new wishlist book array for the purpose of showing wishlist books
export async function asyncFilterWishlist(list){

	let listObj = JSON.parse(list)
	let wishlisedArray = listObj.filter(function(item){ return item.wishlised === true})
	console.log("filtered")
	console.log(JSON.stringify(wishlisedArray))
	return wishlisedArray
}

export async function asyncModifyWishlist(){

}