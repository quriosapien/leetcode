/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
const minimumBoxes = function(apple, capacity) {
    const totalApples = apple.reduce((acc, count) => acc+count, 0)
    const boxes = capacity.map(x => x).sort((a, b) => b-a)

    let boxRequired = 0
    let applesLeft = totalApples
    
    for (let i = 0; i < boxes.length; i++) {
        const cap = boxes[i]
        applesLeft -= cap
        boxRequired++
        if (applesLeft <= 0) {
            break
        }
    }

    return boxRequired
};

console.log(minimumBoxes([5,5,5], [2,4,2,7])) // 4