const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const quantity = urlParams.get("quantity");
const addToCart = urlParams.get("add-to-cart");

const productReceptWrapper = document.getElementById("order_review");

productReceptWrapper.innerHTML = "";
switch (addToCart) {
	case "0":
		productReceptWrapper.innerHTML = `<div style="display: none;">
				<label for="Product" >product&nbsp;</label>
																				
		<input type="num" name="Product" value="${'Day cream'}">
																				
		</div>

		<div style="display: none;">
				<label for="Order_price" >order_price&nbsp;</label>
																				
		<input type="num" name="Order_price" value="${(quantity * 399)}">
																				
		</div>
		
		<table
												class="shop_table woocommerce-checkout-review-order-table">
																				<thead>
																					<tr>
																						<th class="product-name">Product
																						</th>
																						<th class="product-total">
																							Subtotal</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr class="cart_item">
																						<td class="product-name">
																							Day cream&nbsp; <strong
																								class="product-quantity">×&nbsp;${quantity}</strong>
																						</td>
																						<td class="product-total">
																							<span
																								class="woocommerce-Price-amount amount"><bdi><span
																										class="woocommerce-Price-currencySymbol">₹</span>${(quantity * 399)}</bdi></span>
																						</td>
																					</tr>
																				</tbody>
																				<tfoot>

																					<tr class="cart-subtotal">
																						<th>Total</th>
																						<td><span
																								class="woocommerce-Price-amount amount"><bdi><span
																										class="woocommerce-Price-currencySymbol">₹</span>${(quantity * 399)}</bdi></span>
																						</td>
																					</tr>
																					</tfoot>
																			</table>
                                                                            
                                                                            <div id="payment"
																				class="woocommerce-checkout-payment">
																				
																				<div class="form-row place-order">
																					
																					<button type="submit"
																						class="button alt"
																						name="woocommerce_checkout_place_order"
																						id="place_order"
																						value="Place order"
																						data-value="Place order">Place
																						order</button>

																					
																				</div>
																			</div>
`;
		break;

	case "1":
		productReceptWrapper.innerHTML = `	<div style="display: none;">
				<label for="Product" >product&nbsp;</label>
																				
		<input type="num" name="Product" value="${'Night cream'}">
																				
		</div>

		<div style="display: none;">
				<label for="Order_price" >order_price&nbsp;</label>
																				
		<input type="num" name="Order_price" value="${(quantity * 399)}">
																				
		</div>
		
		
		<table
												class="shop_table woocommerce-checkout-review-order-table">
																				<thead>
																					<tr>
																						<th class="product-name">Product
																						</th>
																						<th class="product-total">
																							Subtotal</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr class="cart_item">
																						<td class="product-name">
																							Night cream&nbsp; <strong
																								class="product-quantity">×&nbsp;${quantity}</strong>
																						</td>
																						<td class="product-total">
																							<span
																								class="woocommerce-Price-amount amount"><bdi><span
																										class="woocommerce-Price-currencySymbol">₹</span>${(quantity * 399)}</bdi></span>
																						</td>
																					</tr>
																				</tbody>
																				<tfoot>

																					<tr class="cart-subtotal">
																						<th>Total</th>
																						<td><span
																								class="woocommerce-Price-amount amount"><bdi><span
																										class="woocommerce-Price-currencySymbol">₹</span>${(quantity * 399)}</bdi></span>
																						</td>
																					</tr>
																					</tfoot>
																			</table>
                                                                            
                                                                            <div id="payment"
																				class="woocommerce-checkout-payment">
																				
																				<div class="form-row place-order">
																					
																					<button type="submit"
																						class="button alt"
																						name="woocommerce_checkout_place_order"
																						id="place_order"
																						value="submit"
																						data-value="Place order">Place
																						order</button>

																					
																				</div>
																			</div>`;
		break;

	default:
		break;
}


// for the main script for submit form

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("orderForm");

    // Create a loading overlay element
    const loadingOverlay = document.createElement("div");
    loadingOverlay.id = "loadingOverlay";
    loadingOverlay.innerHTML = `
        <div class="loading-content">
            <p>Processing your order, please wait...</p>
        </div>
    `;

    // Add styles for the overlay dynamically
	const style = document.createElement("style");
	style.textContent = `
		#loadingOverlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.7); /* Semi-transparent black */
			backdrop-filter: blur(5px); /* Blur background */
			display: none;
			align-items: center;
			justify-content: center;
			z-index: 9999; /* Ensure it appears above all other content */
			padding: 0 10px; /* Add padding for smaller screens */
		}
	
		.loading-content {
			background: #fff;
			padding: 20px 40px;
			border-radius: 10px;
			text-align: center;
			font-size: 1.2em;
			color: #333;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
			max-width: 90%; /* Restrict width for smaller screens */
			box-sizing: border-box; /* Ensure padding is included in width */
		}
	
		/* Responsive design for mobile screens */
		@media (max-width: 768px) {
			.loading-content {
				padding: 15px 20px; /* Adjust padding for smaller screens */
				font-size: 1em; /* Smaller font size */
			}
		}
	
		@media (max-width: 480px) {
			.loading-content {
				padding: 10px 15px; /* Further adjust padding for very small screens */
				font-size: 0.9em; /* Smaller font size for extra small screens */
			}
		}
	`;
	
    document.head.appendChild(style);

    // Append the overlay to the body
    document.body.appendChild(loadingOverlay);

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const fields = [
            { id: "billing_first_name", name: "Full name" },
            { id: "billing_address_1", name: "Address" },
            { id: "billing_city", name: "City" },
            { id: "billing_postcode", name: "Pincode" },
            { id: "billing_phone", name: "Phone" },
        ];
        let isValid = true;

        fields.forEach((field) => {
            const input = document.getElementById(field.id);
            if (!input.value.trim()) {
                alert(`${field.name} is required`);
                isValid = false;
            }
        });

        if (isValid) {
            // Show the loading overlay
            loadingOverlay.style.display = "flex";

            try {
                const formData = new FormData(form);

                const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbyWMrBxxqqr2wpkzUhtSunJD3dmIKoHG17Ju-NE1iDifZuq9rVb6hovBTr8GR_3oM6M/exec",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                const result = await response.json();
                alert(
                    result.result === "success"
                        ? "Order placed successfully!"
                        : "Error placing order"
                );

                // Redirect to index.html after success
                if (result.result === "success") {
                    window.location.href = "/index.html";
                }
            } catch (error) {
                alert("An error occurred. Please try again.");
            } finally {
                // Hide the loading overlay
                loadingOverlay.style.display = "none";
            }
        }
    });
});

