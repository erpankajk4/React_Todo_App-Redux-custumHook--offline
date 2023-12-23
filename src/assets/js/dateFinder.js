export const dateConvert = function (id) {
    const timestamp = id;
    const date = new Date(timestamp);
  
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so January is 0
    const year = date.getFullYear() % 100; // Get the last two digits of the year
  
    // Pad single-digit day or month with leading zero if necessary
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
  
    // Get hours and minutes
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12; // Handle midnight (0 hours)
  
    // Format hours and minutes with leading zero if necessary
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  
    return `${formattedDate} ${formattedTime}`;
  };
  