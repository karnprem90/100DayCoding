/*
Find minimum platforms needed to avoid delay in the train arrival

Given a schedule containing the arrival and departure time of trains in a station, find the minimum number of platforms needed to avoid delay in any train’s arrival.

For example,

Trains arrival   = { 2.00, 2.10, 3.00, 3.20, 3.50, 5.00 }Trains departure = { 2.30, 3.40, 3.20, 4.30, 4.00, 5.20 }
 The minimum platforms needed is 2
 The train arrived at 2.00 on platform 1
 The train arrived at 2.10 on platform 2
 The train departed at 2.30 from platform 1
 The train arrived at 3.00 on platform 1
 The train departed at 3.20 from platform 1
 The train arrived at 3.20 on platform 1
 The train departed at 3.40 from platform 2
 The train arrived at 3.50 on platform 2
 The train departed at 4.00 from platform 2The train departed at 4.30 from platform 1The train arrived at 5.00 on platform 1The train departed at 5.20 from platform 1
 */


function  minimumPlatformNeeded(arrival, departure) {
    arrival = arrival.sort();
    departure = departure.sort();
    let count = 0;
    let  i = 0;
    let platforms =  0;
    let j = 0;

    while (i < arrival.length) {
        if (arrival[i] < departure[j]) {
            count++;
            platforms = Math.max(platforms, count);
            i++;
        } else {
            count--;
            j = j + 1;
        }
    }
}
