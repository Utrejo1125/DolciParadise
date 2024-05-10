import React from "react";
import "./Menu.css";

function Extras() {
    return (
        <div class="menu-section">
            <div class="menu-item">
                <img src="/Images/Menu/empanadas.jpg" alt="Empanadas" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Empanadas: Chicken|Beef|Cheese</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">$2.00</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="/Images/Menu/bacon-egg-cheese.jpg" alt="Bacon Egg & Cheese" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Bacon, Egg & Cheese</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(Roll) $3.50 (Croissant) $4.25</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="/Images/Menu/turkeybacon-egg-cheese.jpg" alt="Turkey Bacon Egg & Cheese" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Turkey Bacon, Egg & Cheese</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(Roll) $4.00 (Croissant) $4.75</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="/Images/Menu/ham-egg-cheese.jpg" alt="Ham Egg & Cheese" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Ham, Egg & Cheese</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(Roll) $3.50 (Croissant) $4.25</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="/Images/Menu/turkey-egg-cheese.jpg" alt="Turkey Egg & Cheese" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Turkey, Egg & Cheese</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(Roll) $4.00 (Croissant) $4.75</p>
                </div>
            </div>
        </div>
    )
}

export default Extras;