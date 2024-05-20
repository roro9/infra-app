export const getTimestampLabel = (timestamp: EpochTimeStamp): string => {
  const now = Date.now();
  const timeDifference = now - timestamp * 1000;
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursDifference === 0) {
    return "less than an hour ago";
  } else if (hoursDifference === 1) {
    return "1 hour ago";
  } else {
    return `${hoursDifference} hours ago`;
  }
};
