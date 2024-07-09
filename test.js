var createCounter = function(init) {
    let currentValue = init;
    return {
        reset() {
            currentValue = init
            return currentValue;
        },
        increament() {
            currentValue++;
            return currentValue;
        },
        decreament() {
            currentValue--;
            return currentValue;
        }
    }
};
const counter = createCounter(5)
console.log(counter)
console.log(counter.increament())
console.log(counter.increament())
// console.log(counter.decreament())
// console.log(counter.reset())

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */