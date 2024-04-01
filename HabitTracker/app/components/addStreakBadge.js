import { addBadge } from "../context/actions/badgeActions";

export default function addStreakBadge(uid, streak, badges, dispatch) {
  // Define the badge name
  const oneDayStreakBadge = "One day streak";
  const sevenDayStreakBadge = "Seven day streak";
  const thirtyDayStreakBadge = "Thirty day streak";
  const sixtyDayStreakBadge = "Sixty day streak";

  console.log("Checking for eligible badges...");

  // 1 day streak
  // Check if the badge name is already in the array of badges
  if (
    !badges.some((badge) => badge.name === oneDayStreakBadge) &&
    streak >= 1
  ) {
    // Dispatch the addBadge action with the badge name
    console.log("Awarded badge for 1 day streak");
    dispatch(addBadge(uid, oneDayStreakBadge));
  }

  // 7 day streak
  if (
    !badges.some((badge) => badge.name === sevenDayStreakBadge) &&
    streak >= 7
  ) {
    console.log("Awarded badge for 7 day streak");
    dispatch(addBadge(uid, sevenDayStreakBadge));
  }

  // 30 day streak
  if (
    !badges.some((badge) => badge.name === thirtyDayStreakBadge) &&
    streak >= 30
  ) {
    console.log("Awarded badge for 30 day streak");
    dispatch(addBadge(uid, thirtyDayStreakBadge));
  }

  // 60 day streak
  if (
    !badges.some((badge) => badge.name === sixtyDayStreakBadge) &&
    streak >= 60
  ) {
    console.log("Awarded badge for 60 day streak");
    dispatch(addBadge(uid, sixtyDayStreakBadge));
  }
}
