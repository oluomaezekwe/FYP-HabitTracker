export default function calculateStreak(completedDates) {
  if (!completedDates || completedDates.length === 0) {
    return 0; // Return 0 if the array is empty or undefined
  }

  let streak = 1; // Start streak with 1 as the first completed date is always counted
  let currentDate = new Date();
  let lastCompletedDate = new Date(completedDates[completedDates.length - 1]);

  while (currentDate.toDateString() !== lastCompletedDate.toDateString()) {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 1);

    if (completedDates.includes(prevDate.toISOString().split("T")[0])) {
      streak++;
    } else {
      break;
    }

    currentDate = prevDate;
  }

  return streak;
}
