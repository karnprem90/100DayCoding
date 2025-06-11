function fractionalKnapsack(capacity, items) {
    items.forEach(item => {
        item.ratio = item.value / item.weight;
    });

    items.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;
    let remainingCapacity = capacity;

    for (let item of items) {
        if (remainingCapacity === 0) break;

        if (item.weight <= remainingCapacity) {
            totalValue += item.value;
            remainingCapacity -= item.weight;
        } else {
            totalValue += item.ratio * remainingCapacity;
            remainingCapacity = 0;
        }
    }

    return totalValue;
}

console.log(fractionalKnapsack(50, [{value: 100, weight: 20}, {value: 60, weight: 10}, {value: 120, weight: 30}]))