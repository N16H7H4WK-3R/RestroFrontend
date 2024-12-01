import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required")
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/user/",
                    {
                        username: values.username,
                        email: values.email,
                        password: values.password
                    },
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );
                console.log(response.data);
                navigate("/login");
            } catch (error) {
                console.error("Signup failed", error);
            }
        }
    });

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/stuffed-pasta-near-vegetables-cheese_23-2147849757.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                className="container border p-4"
                style={{
                    maxWidth: "400px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "15px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h2 className="text-center mb-4 text-primary fw-bold">
                    Create Your Account
                </h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            {...formik.getFieldProps("username")}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-danger">{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Re-enter your password"
                            {...formik.getFieldProps("confirmPassword")}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div className="text-danger">{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        style={{
                            padding: "10px",
                            borderRadius: "10px",
                            fontWeight: "bold",
                        }}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
