import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { fetchAPI, submitAPI } from "./components/Api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/UserAuth/login";
import Profile from "./components/UserAuth/profile";
import Signup from "./components/UserAuth/signup"


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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user-profile" element={<><Header /> <Profile /> <Footer /> </>} />
          <Route path="/about" element={<><Header /><About /><Footer /></>} />
          <Route
            path="/booking"
            element={
              <>
                <Header />
                <BookingForm
                  availableTimes={availableTimes}
                  dispatch={dispatch}
                  submitForm={submitForm}
                />
                <Footer />
              </>
            }
          />
          <Route path="/confirmed" element={<>
            <Header />
            <ConfirmedBooking />
            <Footer />
          </>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
