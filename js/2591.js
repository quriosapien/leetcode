const distMoney = function(money, children) {
    let count = 0
    for (let i = 0; i < children; i++) {
      if (i === children-1 && money === 4) {
        if (children - count <= 1) {
          count--
        } 
        break
      }
      if (money - 8 >= children - (i + 1)) {
          if (i === children-1) {
            if (money === 8) {
              count++
              break
            }
          } else {
            count++
            money-=8
          }
          
      } else {
          money--
      }
      
    }

    return count || -1
};

// console.log(distMoney(20, 3))
// console.log(distMoney(5, 2))
console.log(distMoney(17, 2))