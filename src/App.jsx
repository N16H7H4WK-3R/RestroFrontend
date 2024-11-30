import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { fetchAPI, submitAPI } from "./components/Api";

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload; // Update the state with the fetched available times
    default:
      return state;
  }
};


const App = () => {

  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0]; // Get the formatted today's date
      const times = await fetchAPI(formattedDate); // Fetch the available times for today's date
      dispatch({ type: "UPDATE_TIMES", payload: times });
    };

    initializeTimes(); // Fetch the available times on component mount
  }, []);

  const submitForm = async (formData) => {
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      console.log("/confirmed"); // Navigates to the booking confirmed page
    } else {
      console.log("Error submitting form");
    }
  };


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/booking"
            element={
              <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm} // Pass the submitForm function
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
