function maximumHappinessSum(happiness: number[], k: number): number {
    const happinessSorted: number[] = happiness.sort((a, b) => b - a)

    let pickedHappiness = 0
    for (let i = 0; i < k; i++) {
        const childHappiness = happinessSorted[i] - i
        if (childHappiness <= 0) break
        pickedHappiness += childHappiness
    }

    return pickedHappiness
}

