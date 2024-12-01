import React, { useState } from 'react';

function Specials() {
    const [activeTab, setActiveTab] = useState('Lunch');

    // Dummy card data (repeated)
    const cardContent = (
        <div className="col">
            <div className="card-50">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwN5VJrB2BSt4eUbSs8LzaqxbxyWZEnGO1QA&s"
                    className="card-img-top rounded-3"
                    alt="Greek Salad"
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">Greek Salad</h5>
                    <p className="card-text">
                        The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago
                        spices!
                    </p>
                    <h6 className="text-muted">$12.99</h6>
                </div>
            </div>
        </div>
    );

    const tabContent = {
        Lunch: (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <React.Fragment key={index}>{cardContent}</React.Fragment>
                ))}
            </div>
        ),
        Mains: (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <React.Fragment key={index}>{cardContent}</React.Fragment>
                ))}
            </div>
        ),
        Desserts: (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <React.Fragment key={index}>{cardContent}</React.Fragment>
                ))}
            </div>
        ),
    };

    return (
        <>
            <div className="alert alert-success text-center text-bold" role="alert">
                Exciting Offers on mindblowing dishes !!!!!!!
            </div>
            <div className="hero2 p-3 border mb-5">
                <ul className="nav nav-pills nav-fill">
                    {Object.keys(tabContent).map((tab) => (
                        <li className="nav-item" key={tab}>
                            <button
                                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-3">
                <h4>{activeTab}</h4>
                {tabContent[activeTab]}
            </div>
        </>
    );
}

export default Specials;
