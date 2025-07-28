function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalCost = 0;

	while (arr.length  > 1) {
		arr.sort((a, b) => a - b);        // Sort ascending
        const first = arr.shift();       // Remove Smallest
        const second = arr.shift();      // Remove Second smallest
        const cost = first + second;
        totalCost += cost;
        arr.push(cost); 
	}
	
	return totalCost;
}

module.exports=mincost;
