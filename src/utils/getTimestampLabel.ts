export const getTimestampLabel = (timestamp: EpochTimeStamp): string => {
  const now = Date.now();
  const timeDifference = Math.abs(now - timestamp * 1000);
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursDifference === 0) {
    return "less than an hour ago";
  } else if (hoursDifference === 1) {
    return "1 hour ago";
  } else if (hoursDifference > 24) {
    const daysDifference = Math.floor(hoursDifference / 24);
    return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
  } else {
    return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
  }
};
