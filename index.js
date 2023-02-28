const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBattery = batteryBatches.reduce(function(acc,curr){
  return acc + curr ; 
})
