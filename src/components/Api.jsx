// Downloaded the JavaScript file instead of putting it in index.html to avoid browser issues.
// <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>


export const API_BASE_URL = "https://restrobackend-kbfs.onrender.com";

export const AUTH_TOKEN = localStorage.getItem('token');

export const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};


export const fetchAPI = async function (dateTime) {
  try {
    // Simulate an asynchronous API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const now = new Date();
    const bookingDate = new Date(dateTime); // Convert dateTime to a Date object

    if (isNaN(bookingDate)) {
      throw new Error("Invalid dateTime format. Please provide a valid date and time.");
    }

    let startHour;

    // Determine start hour based on the date
    if (
      bookingDate.toDateString() === now.toDateString() // Same day booking
    ) {
      startHour = now.getHours() + 1; // Start from the next hour
      if (startHour < 10) startHour = 10; // Earliest booking is from 10:00
    } else {
      // Future date: start from 10:00
      startHour = 10;
    }

    const endHour = 23; // Booking ends at 23:00
    const result = [];
    const random = seededRandom(bookingDate.getDate()); // Use seeded random for consistency

    // Generate 1-hour time periods
    for (let hour = startHour; hour < endHour; hour++) {
      const period = `${hour}:00 - ${hour + 1}:00`;
      if (random() < 0.5) {
        result.push(period);
      }
    }

    return result;
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error;
  }
};

export const submitAPI = async function (formData) {
  try {
    console.log(formData)
    return isSuccess;
  } catch (error) {
    console.error('Error submitting API:', error);
    throw error;
  }
};