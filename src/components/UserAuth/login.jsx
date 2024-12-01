import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../Api";

function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required")
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(
                    `${API_BASE_URL}/auth/token/login/`,
                    qs.stringify({
                        username: values.username,
                        password: values.password
                    }),
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }
                );
                console.log(response.data);
                localStorage.setItem("token", response.data.auth_token);
                navigate("/");
            } catch (error) {
                console.error("Login failed", error);
            }
        }
    });

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/ingredients-near-pizza_23-2147772081.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <main
                className="form-signin w-100 m-auto bg-light p-4 rounded shadow"
                style={{
                    maxWidth: "400px"
                }}
            >
                <form onSubmit={formik.handleSubmit}>
                    <img
                        className="mb-4"
                        src="https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-colorful-blog-speech-bubble-vector-png-image_6633021.png"
                        alt="Logo"
                        width="72"
                        height="57"
                    />
                    <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingUsername"
                            placeholder="Enter your username"
                            {...formik.getFieldProps("username")}
                        />
                        <label htmlFor="floatingUsername">Username</label>
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-danger mt-1">{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Enter your password"
                            {...formik.getFieldProps("password")}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger mt-1">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">
                        Sign in
                    </button>
                    <p className="mt-5 mb-3 text-center text-secondary">&copy; DailyBlogs 2017 - 2024</p>
                </form>
            </main>
        </div>
    );
}

export default Login;
