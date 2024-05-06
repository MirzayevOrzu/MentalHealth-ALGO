function sleepAnalyzer(sleepData) {
  // Method to calculate average sleep time
  function calculateAverage() {
    const totalSleep = sleepData.reduce((acc, val) => acc + val, 0);
    return totalSleep / sleepData.length;
  }

  // Method to find days that are significantly different from average sleep time
  function getOutliers() {
    const average = calculateAverage();
    const threshold = 1.5; // Adjust this threshold as needed
    const outliers = [];

    for (let i = 0; i < sleepData.length; i++) {
      if (Math.abs(sleepData[i] - average) > threshold) {
        outliers.push({ day: i + 1, sleepTime: sleepData[i] });
      }
    }

    return outliers;
  }

  // Method to advise best sleep time
  function adviseBestTime() {
    const average = calculateAverage();

    if (average < 7) {
      return "Consider sleeping earlier for better rest.";
    } else if (average > 8) {
      return "Consider adjusting your schedule to allow for less sleep.";
    } else {
      return "Your average sleep time seems balanced.";
    }
  }

  return {
    calculateAverage: calculateAverage,
    getOutliers: getOutliers,
    adviseBestTime: adviseBestTime,
  };
}

// Example usage:
const data = {
  sleepData: [
    7.5, 6.0, 8.2, 5.5, 7.0, 9.0, 7.2, 6.5, 8.5, 7.0, 4.5, 6.5, 8.0, 6.5, 7.5,
    5.0, 8.5, 6.0, 7.0, 8.0, 7.0, 5.5, 8.2, 6.0, 7.8, 5.2, 7.0, 6.0, 8.5, 6.5,
  ],
};

const analyzer = sleepAnalyzer(data.sleepData);

console.log("Average Sleep Time:", analyzer.calculateAverage());
console.log("Outliers:", analyzer.getOutliers());
console.log("Sleep Advice:", analyzer.adviseBestTime());
