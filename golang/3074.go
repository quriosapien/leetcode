package main

import "sort"

func minimumBoxes(apple []int, capacity []int) int {
    boxes := len(capacity) + 1

    apples := 0
    for _, apple := range apple {
        apples += apple
    }

    sort.Ints(capacity)

    capSum := 0
    for _, c := range capacity {
        capSum += c
    }

    count := 0
    for _, c := range capacity {
        if capSum >= apples {
            capSum -= c
            count++
        }
    }

    return boxes - count
}

func main () {
	println(minimumBoxes([]int{1, 3, 2}, []int{4,3,1,5,2}))
}