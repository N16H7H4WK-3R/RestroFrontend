import React, { useEffect, useState } from "react";
import { API_BASE_URL, AUTH_TOKEN } from "../Api";

function Profile() {
    const [profile, setProfile] = useState({ username: "", email: "" });
    const [updatedEmail, setUpdatedEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/auth/users/me`, {
                method: "GET",
                headers: {
                    Authorization: `Token ${AUTH_TOKEN}`,
                },
            });
            if (!response.ok) throw new Error("Failed to fetch profile.");
            const data = await response.json();
            setProfile(data);
            setUpdatedEmail(data.email);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const updateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/auth/users/`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${AUTH_TOKEN}`,
                },
                body: JSON.stringify({ email: updatedEmail }),
            });
            if (!response.ok) throw new Error("Failed to update profile.");
            const data = await response.json();
            setProfile(data);
            alert("Profile updated successfully!");
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <>
            <div
                className="container-fluid text-dark vh-100 d-flex flex-column justify-content-center align-items-center bg-light"
                style={{
                    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlb6K53Vi1u5IVwiw_1EYmAH1qFBhXBAp7A&s')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="container col-xl-12 col-xxl-8">
                    <div className="row align-items-center g-2 p-5 bg-white shadow" style={{ borderRadius: "1rem" }}>
                        {loading ? (
                            <div className="text-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="alert alert-danger text-center">{error}</div>
                        ) : (
                            <>
                                {/* Left Section */}
                                <div className="col-lg-7 container-fluid text-center text-lg-start">
                                    {/* Profile Picture */}
                                    <div className="text-center mb-4">
                                        <div
                                            className="rounded-circle overflow-hidden border border-primary border-4 shadow"
                                            style={{ width: "120px", height: "120px" }}
                                        >
                                            <img
                                                src="https://img.freepik.com/premium-vector/young-man-face-avater-vector-illustration-design_968209-13.jpg?semt=ais_hybrid"
                                                alt="Profile"
                                                className="img-fluid w-100 h-100 object-fit-cover"
                                            />
                                        </div>
                                    </div>
                                    <h1 className="display-4 fw-bold text-primary mb-4">Your Profile</h1>
                                    <p className="fs-5">
                                        <b>Username: </b> {profile.username}
                                    </p>
                                    <p className="fs-5">
                                        <b>Email: </b> {profile.email}
                                    </p>
                                    <div className="d-flex justify-content-center justify-content-lg-start mt-4">
                                        <button className="btn btn-danger me-3">
                                            <i className="bi bi-trash"></i> Delete Account
                                        </button>
                                        <button className="btn btn-info">
                                            <i className="bi bi-clock-history"></i> View Previous Activities
                                        </button>
                                    </div>
                                </div>

                                {/* Right Section */}
                                <div className="col-md-10 container-fluid col-lg-5">
                                    <form className="p-4 border rounded-3 bg-light shadow" onSubmit={updateProfile}>
                                        <h2 className="text-center mb-4">Edit Profile</h2>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="floatingUsername"
                                                placeholder="Username"
                                                value={profile.username}
                                                disabled
                                            />
                                            <label htmlFor="floatingUsername">Username</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingEmail"
                                                placeholder="name@example.com"
                                                value={updatedEmail}
                                                onChange={(e) => setUpdatedEmail(e.target.value)}
                                            />
                                            <label htmlFor="floatingEmail">Email address</label>
                                        </div>
                                        <hr className="my-4" />
                                        <button className="w-100 btn btn-lg btn-primary" type="submit">
                                            Update Profile
                                        </button>
                                    </form>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
