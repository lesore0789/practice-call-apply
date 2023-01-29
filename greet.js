// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

console.log(say.call(helloMessage, "John"));
console.log(say.call(heyThereMessage, "Michael"));
