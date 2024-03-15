export default function calculateStreak(dates) {
  const dateToNumber = (date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const dateNumber = year + month + day;
    return dateNumber;
  };

  // Get today's date as a number
  let currentDateNumber = dateToNumber(new Date());

  // Initialize streak
  let streak = 0;

  // Loop through the dates array
  for (let i = dates?.length - 1; i >= 0; i--) {
    const compareDateNumber = dateToNumber(new Date(dates[i]));

    // Check if the difference between the current date and the date from the array is 1
    // The second condition is added in the case that the current date is in the array
    if (
      currentDateNumber - compareDateNumber === 1 ||
      currentDateNumber - compareDateNumber === 0
    ) {
      streak++;
    } else {
      // Break the loop if the streak is interrupted
      break;
    }

    currentDateNumber = compareDateNumber;
  }

  return streak;
}
