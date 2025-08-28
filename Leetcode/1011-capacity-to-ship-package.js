/**
 * A conveyor belt has packages that must be shipped from one port to another within days days.
 *
 * The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship.
 *
 * Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.
 *
 *
 *
 * Example 1:
 *
 * Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
 * Output: 15
 * Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
 * 1st day: 1, 2, 3, 4, 5
 * 2nd day: 6, 7
 * 3rd day: 8
 * 4th day: 9
 * 5th day: 10
 *
 * Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
 * Example 2:
 *
 * Input: weights = [3,2,2,4,1,4], days = 3
 * Output: 6
 * Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
 * 1st day: 3, 2
 * 2nd day: 2, 4
 * 3rd day: 1, 4
 * Example 3:
 *
 * Input: weights = [1,2,3,1,1], days = 4
 * Output: 3
 * Explanation:
 * 1st day: 1
 * 2nd day: 2
 * 3rd day: 3
 * 4th day: 1, 1
 *
 *
 * Constraints:
 *
 * 1 <= days <= weights.length <= 5 * 104
 * 1 <= weights[i] <= 500
 */

/**
 * Step 0: Helper — compute min & max capacity bounds.
 * - minCap = heaviest single package
 * - maxCap = sum of all packages (everything in one day)
 */
function bounds(weights) {
    const minCap = Math.max(...weights);
    const maxCap = weights.reduce((a, b) => a + b, 0);
    return { minCap, maxCap };
}

/**
 * Step 1: Given a capacity C, simulate loading in order.
 * Return:
 *   { daysUsed, schedule }
 * where schedule is an array of arrays showing which packages went each day.
 *
 * If you don't need the detailed schedule, you can skip building it for speed.
 */
function simulateWithCapacity(weights, C) {
    let daysUsed = 1;
    let loadToday = 0;
    const schedule = [[]]; // schedule[dayIndex] = list of weights loaded that day
    let dayIndex = 0;

    for (const w of weights) {
        if (loadToday + w <= C) {
            // fits today
            loadToday += w;
            schedule[dayIndex].push(w);
        } else {
            // new day
            daysUsed += 1;
            dayIndex += 1;
            loadToday = w;
            schedule[dayIndex] = [w];
        }
    }

    return { daysUsed, schedule };
}

/**
 * Step 2: Brute-force search over all capacities.
 * Try capacity = minCap, minCap+1, ..., maxCap.
 * The first capacity where daysUsed <= days is the answer.
 *
 * Set `verbose=true` to print step-by-step loading for each capacity tried.
 */
function shipWithinDaysBrute(weights, days, verbose = false) {
    const { minCap, maxCap } = bounds(weights);

    for (let C = minCap; C <= maxCap; C++) {
        const { daysUsed, schedule } = simulateWithCapacity(weights, C);

        if (verbose) {
            console.log(`Trying capacity = ${C} → days used = ${daysUsed}`);
            console.log(
                "  Schedule:",
                schedule.map((d, i) => `Day ${i + 1}: [${d.join(", ")}]`).join(" | ")
            );
        }

        if (daysUsed <= days) {
            if (verbose) {
                console.log(`✅ First working capacity found: ${C}`);
            }
            return C; // minimal because we’re going upward
        }
    }

    // The loop always returns for valid inputs, but keep a fallback:
    return -1;
}

/* --------------------------
   Example runs (uncomment to test locally)
--------------------------- */

// Example 1
// console.log(
//   shipWithinDaysBrute([1,2,3,4,5,6,7,8,9,10], 5, true)
// ); // → 15

// Example 2
console.log(
  shipWithinDaysBrute([3,2,2,4,1,4], 3, true)
); // → 6

// Example 3
// console.log(
//   shipWithinDaysBrute([1,2,3,1,1], 4, true)
// ); // → 3


function shipWithinDays(weights, days) {
    // helper: can we ship within `days` if capacity is `cap`?
    function canShip(cap) {
        let daysUsed = 1;
        let load = 0;
        for (const w of weights) {
            if (load + w <= cap) {
                load += w;
            } else {
                daysUsed += 1;
                load = w;
                if (daysUsed > days) return false; // early exit
            }
        }
        return true;
    }

    let lo = Math.max(...weights);
    let hi = weights.reduce((a, b) => a + b, 0);

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (canShip(mid)) {
            hi = mid;         // mid works → try smaller
        } else {
            lo = mid + 1;     // mid too small → go bigger
        }
    }
    return lo;
}

// Examples:
// console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)); // 15
 console.log(shipWithinDays([3,2,2,4,1,4], 3));          // 6
// console.log(shipWithinDays([1,2,3,1,1], 4));            // 3
