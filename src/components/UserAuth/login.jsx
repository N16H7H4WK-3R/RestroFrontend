import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('nana');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required")
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:8000/login/",
                    qs.stringify({
                        username: values.email,
                        password: values.password
                    }),
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }
                );
                console.log(response.data);
                localStorage.setItem("token", response.data.access_token
                );
                navigate("/home");
            } catch (error) {
                console.error("Login failed", error);
            }
        }
    });

    return (
        <div className="d-flex align-items-center py-4 bg-body-tertiary" >
            <main className="form-signin mt-5 w-100 m-auto" >
                <form onSubmit={formik.handleSubmit}>
                    <img className="mb-4" src="https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-colorful-blog-speech-bubble-vector-png-image_6633021.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control fs-6"
                            id="floatingInput"
                            placeholder="name@example.com"
                            {...formik.getFieldProps("email")}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Enter your Password"
                            {...formik.getFieldProps("password")}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; DailyBlogs 2017 - 2024</p>
                </form>
            </main >
        </div >
    );
}

export default Login;
