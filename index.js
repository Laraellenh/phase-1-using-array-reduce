const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// total Batteries is = to battery batches.redcue(adding each total to the next. return batches plus the current total for each item in the batt batches array
const totalBatteries = batteryBatches.reduce(function (totalBatches, additionalBatches) {
    return additionalBatches + totalBatches
})