import React from "react";
import "./Menu.css";

function Beverages() {
    return (
        <div class="menu-section">
            <div class="menu-item">
                <img src="./Images/Menu/espresso.jpg" alt="Espresso" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Espresso</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">$2.25</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="./Images/Menu/cappuccino.jpg" alt="Espresso" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Cappuccino</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(S) $2.75 (L) $3.25</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="./Images/Menu/latte.jpg" alt="Cafe Latte" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Cafe Latte</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(S) $2.75 (L) $3.25</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="./Images/Menu/sanka.jpg" alt="Sanka" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Sanka(Decaf)</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(S) $1.25 (L) $1.75</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="./Images/Menu/tea.jpg" alt="Tea" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Tea</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(S): $1.25 (L) $1.75</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="./Images/Menu/Coffee.jpg" alt="Coffee" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Coffee</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(S): $1.25 (L): $1.75</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="./Images/Menu/hot-chocolate.jpg" alt="Hot Chocolate" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Hot Chocolate</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(S) $2.00 (L) $2.50</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="./Images/Menu/iced-coffee.jpg" alt="Iced Coffee" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Iced Coffee</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(16oz) $2.25 (20oz) $2.75</p>
                </div>
            </div>

            <div class="menu-item">
                <img src="./Images/Menu/iced-cappuccino.jpg" alt="Iced Cappuccino" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Iced Cappuccino</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(16oz) $3.50 (20oz) $4.25</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="./Images/Menu/iced-latte.jpg" alt="Iced Latte" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Iced Latte</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(16oz) $3.50 (20oz) $4.25</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="./Images/Menu/iced-chocolate.jpg" alt="Iced Chocolate" class="menu-image" />
                <div class="item-details">
                    <h3 class="item-name">Iced Chocolate</h3>
                    <p class="item-description">A delicious description of the menu item...</p>
                    <p class="item-price">(16oz) $3.50 (20oz) $4.25</p>
                </div>
            </div>
        </div>
    );
}

export default Beverages;