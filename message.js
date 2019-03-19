function greet(message) {
    return message.author + " says: " + message.text;
}
var helloWorld = greet({
    text: "Hello, world!",
    author: "Lisa Lemons"
});
document.body.innerText = helloWorld;
