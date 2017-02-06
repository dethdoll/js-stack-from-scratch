class Dog {
    constructor(name) {
        this.name = name;
    }
    
    bark() {
        return `waou waou I am ${this.name}`;
    }
}

module.exports = Dog;