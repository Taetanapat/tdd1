const greet = require('./greet');

test('when name is "Bob", the method should return a string "Hello, Bob."' , () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test('when name is null, then the method should return the string "Hello, my friend."', () =>{
    expect(greet(null)).toBe("Hello, my friend.");
})

test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', () =>{
    expect(greet("JERRY")).toBe("HELLO JERRY!");
})

test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () =>{
    var name = ["Jill","Jane"]
    expect(greet(name)).toBe("Hello, Jill and Jane.");
})
test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () =>{
    var name = ["Amy", "Brian", "Charlotte"]
    expect(greet(name)).toBe("Hello, Amy, Brian, and Charlotte.");
})

test('when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () =>{
    var name = ["Amy", "BRIAN", "Charlotte"]
    expect(greet(name)).toBe("Hello, Amy, BRIAN, and Charlotte. BRIAN");
})