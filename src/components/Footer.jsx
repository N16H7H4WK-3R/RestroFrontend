import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="container-fluid mt-5 border-top">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/home" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">#######</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">#######</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">#######</a></li>
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">#######</a></li>
          </ul>
          <p className="text-center text-body-secondary">&copy; {currentYear} RestroBook Pvt. Ltd.</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
