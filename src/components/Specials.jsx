import React, { useState } from 'react';

function Specials() {
    const [activeTab, setActiveTab] = useState('Lunch');

    const tabContent = {
        Lunch: <>
            <div>
                <h4>Greek Salad</h4>
                <h5>
                    The famous greek salad of crispy lettuce, peppers, olives and our
                    Chicago spices!
                </h5>
                <h6>$12.99</h6>
            </div>
            <div className="line2"></div>
            <div>
                <h4>Bruschetta</h4>
                <h5>
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.
                </h5>
                <h6>$7.99</h6>
            </div>
            <div className="line2"></div>
            <div>
                <h4>Grilled Fish</h4>
                <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                </h5>
                <h6>$20.00</h6>
            </div>
            <div className="line2"></div>
            <div>
                <h4>Pasta</h4>
                <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.
                </h5>
                <h6>$18.99</h6>
            </div>
        </>,
        Mains: "Delicious main courses to satisfy your appetite.",
        Desserts: "Indulge in sweet and savory desserts.",
        Specials: "Check out our chef's handpicked specials!"
    };

    return (
        <>
            <div class="alert alert-success text-center text-bold" role="alert">
                Exciting Offers!!!!!!! Order now....
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
                <p>{tabContent[activeTab]}</p>
            </div>
        </>
    );
}

export default Specials;
