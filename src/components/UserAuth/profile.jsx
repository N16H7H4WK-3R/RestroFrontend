import React from "react";


function Profile() {
    return (
        <>
            <div className="container-fluid pt-3 pb-4 bg-body-tertiary p-1" style={{ marginTop: '3.5em' }}>
                <div class="container col-xl-10 col-xxl-8 px-4 py-4">
                    <div class="row align-items-center g-lg-5 py-5">
                        <div class="col-lg-7 text-center text-lg-start">
                            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-5">User Profile</h1>
                            <p class="col-lg-10 fs-4"><b>Username : </b> Aryan Gupta</p>
                            <p class="col-lg-10 fs-4"><b>Email : </b>aryan014kumar@gmail.com</p>
                        </div>
                        <div class="col-md-10 mx-auto col-lg-5">
                            <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Username" />
                                    <label for="floatingInput">Username</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <hr class="my-4" />
                                <button class="w-100 btn btn-lg btn-primary" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;