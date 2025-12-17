/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
const distMoney = function(money, children) {
    money -= children

    if (money < 0) {
      return -1 
    }

    if (parseInt(money / 7, 10) === children && money % 7 === 0) {
      return children
    }
    
    if (parseInt(money / 7, 10) === children - 1 && money % 7 === 3) {
      return children - 2
    }

    return Math.min(children - 1, parseInt(money / 7))
}

console.log(distMoney(20, 3))