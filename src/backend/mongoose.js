const mongoose = require('mongoose');
const {isThenable} = require("@babel/core/lib/gensync-utils/async");

main().catch(err => console.log(err));

async function main() {
	await mongoose.connect('mongodb://localhost:27017/test');

	const kittySchema = new mongoose.Schema({
		name: String
	});

	const Kitten = mongoose.model('Kitten', kittySchema);

	kittySchema.methods.speak = function speak() {
		const greeting = this.name
			? "Meow name is " + this.name
			: "I don't have a name";
		console.log(greeting);
	};

	const fluffy = new Kitten({ name: 'fluffy' });
	fluffy.speak(); // "Meow name is fluffy"

	const silence = new Kitten({ name: 'Silence' });
	console.log(silence.name); // 'Silence'
}