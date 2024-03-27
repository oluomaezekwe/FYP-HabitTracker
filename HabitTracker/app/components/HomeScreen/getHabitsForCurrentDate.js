export default function getHabitsForCurrentDate(currentDate, habits) {
  // Get the current day in three-letter format
  const currentDay = currentDate.toString().substring(0, 3);

  // Filter habits for the current date
  const habitsForCurrentDate = habits.filter((habit) => {
    if (habit.days.includes(currentDay)) {
      return true;
    }
    return false;
  });

  return habitsForCurrentDate;
}
