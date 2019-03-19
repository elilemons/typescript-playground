interface Message {
    text: string,
    author: string
}

function greet(message: Message) {
    return `${message.author} says: ${message.text}`;
}

let helloWorld = greet({
    text: "Hello, world!",
    author: "Lisa Lemons"
});

document.body.innerText = helloWorld;