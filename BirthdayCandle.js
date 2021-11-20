function birthdayCakeCandles(candles) {
    let  maxHeight = Math.max(...candles);// spread  operator to spread the elements of the array
    let maxHeightCount = 0;  
    for(let i = 0; i < candles.length; i++){
        if (candles[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    console.log(maxHeight);
    console.log(maxHeightCount);
    // return maxHeightCount;
}
birthdayCakeCandles([1,3,7,8,9,9])