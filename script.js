function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalCost = 0;

	while (arr.length  > 1) {
		arr.sort((a,b) => a - b);
		arr.splice(0, 2);
		const cost = arr[0] + arr[1];
		totalCost += cost;
		arr.push(cost;)
	}
	
	return totalCost;
}

module.exports=mincost;
