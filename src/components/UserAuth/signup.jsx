import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Signup() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('nana');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Full Name is required"),
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
                        name: values.name,
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
        <div className="container-xl border p-5 mt-5">
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your Email"
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
                        placeholder="Enter your Password"
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
                        placeholder="Confirm your Password"
                        {...formik.getFieldProps("confirmPassword")}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="text-danger">{formik.errors.confirmPassword}</div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary btn-sm mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Signup;
