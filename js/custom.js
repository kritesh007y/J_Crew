const urlParams = new URLSearchParams(window.location.search);
const prodValue = urlParams.get("prod_value");

const productImageWrapper = document.getElementById("product-image");
productImageWrapper.innerHTML = "";

switch (prodValue) {
  case "0":
    productImageWrapper.innerHTML = `<div 
										class="woocommerce-product-gallery__image"><img
												loading="lazy" width="600" height="803"
												src="./assets/prod_0_JCREW_2.png" class="wp-post-image" alt="j"
												decoding="async"
												sizes="(max-width: 600px) 100vw, 600px"></a></div>
									<div 
										class="woocommerce-product-gallery__image"><img
												loading="lazy" width="300" height="389"
												src="./assets/prod_0_jCREW-removebg-preview_1.png" class="" alt="j" data-caption=""
												decoding="async"></a></div>
									<div 
										class="woocommerce-product-gallery__image"><img
												loading="lazy" width="300" height="389"
												src="./assets/prod_0_jCREW-removebg-preview_1.png" class="" alt="j" data-caption=""
												decoding="async"></a></div>
									<div 
										class="woocommerce-product-gallery__image"><img
												loading="lazy" width="300" height="389"
												src="./assets/prod_0_jCREW-removebg-preview_1.png" class="" alt="j" data-caption=""
												decoding="async"></a></div>

									<div 
										
										class="woocommerce-product-gallery__image"><img
												loading="lazy" width="300" height="389"
												src="./assets/prod_0_jCREW_1.jpg" class="" alt="g" data-caption=""
												decoding="async"></a></div>
								</div>`;
    break;

  case "1":
    productImageWrapper.innerHTML = `	<div 
										class="woocommerce-product-gallery__image"><img
												loading="lazy" width="600" height="803"
												src="./assets/prod_1_JCREW_2_mod.png" class="wp-post-image" alt="j"
												decoding="async"
												sizes="(max-width: 600px) 100vw, 600px"></div>
									<div 
									class="woocommerce-product-gallery__image"><img 
											loading="lazy" width="300" height="389"
											src="./assets/prod_1_JCREW_mod_2.png" class="" alt="j" data-caption=""
											decoding="async"></div>
							       <div 
										class="woocommerce-product-gallery__image"><img 
												loading="lazy" width="300" height="389"
												src="./assets/prod_1_JCREW_mod_2.png" class="" alt="j" data-caption=""
												decoding="async"></div>
									<div 
									class="woocommerce-product-gallery__image"><img 
											loading="lazy" width="300" height="389"
											src="./assets/prod_1_JCREW_mod_2.png" class="" alt="j" data-caption=""
											decoding="async"></div>

									<div 
										
										class="woocommerce-product-gallery__image" ><img
												loading="lazy" width="300" height="389"
												src="./assets/jCREW_3.jpg" class="" alt="g" data-caption=""
												decoding="async"></div>
								</div>`;
    break;

  default:
    break;
}

// for the description and the product name

const productSumaryWrapper = document.getElementById("product-sumary");
productSumaryWrapper.innerHTML = "";

switch (prodValue) {
  case "0":
    productSumaryWrapper.innerHTML = `<div class="summary entry-summary">
									<h2 itemprop="name" class="mkdf-single-product-title">Day cream</h2>
									<p class="price"><span class="woocommerce-Price-amount amount"><bdi><span
													class="woocommerce-Price-currencySymbol">₹</span>399</bdi></span>
									</p>

									<div class="woocommerce-product-rating">
										<div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span
												style="width:100%">Rated <strong class="rating">5.00</strong> out of 5
												based on <span class="rating">1</span> customer rating</span></div> <a
											href="#reviews" class="woocommerce-review-link" rel="nofollow">(<span
												class="count">3</span> customer review)</a>
									</div>

									<div class="woocommerce-product-details__short-description">
										<p>Keep your skin soft, smooth, and radiant with J.Crew Day Cream. Packed with moisturizing ingredients, it provides long-lasting hydration without feeling heavy or greasy. Perfect for everyday use, it’s the ultimate skincare essential for a refreshed, glowing look.</p>
									</div>


									<form class="cart"
										action="cart.html">

										<div class="mkdf-quantity-buttons quantity">
											<label class="screen-reader-text" for="quantity_67743190b772f">Soap Natural
												quantity</label>
											<span class="mkdf-quantity-minus">-</span>
											<input type="text" id="quantity_67743190b772f"
												class="mkdf-quantity-input input-text qty text" data-step="1"
												data-min="1" data-max="" name="quantity" value="1" aria-label="Qty"
												placeholder="" inputmode="numeric" autocomplete="off">
											<span class="mkdf-quantity-plus">+</span>
										</div>

										<button type="submit" name="add-to-cart" value="0"
											class="single_add_to_cart_button button alt">Purchase</button>

									</form>


									<div
										class="qwfw-add-to-wishlist-wrapper qwfw--single qwfw-position--after-add-to-cart qwfw-item-type--icon-with-text">
										<a role="button" tabindex="0"
											class="qwfw-shortcode qwfw-m  qwfw-add-to-wishlist qwfw-spinner-item qwfw-behavior--view qwfw-type--icon-with-text"
											href="?add_to_wishlist=625" data-item-id="625" data-original-item-id="625"
											aria-label="Add to wishlist" data-shortcode-atts="{"
											button_behavior":"view","button_type":"icon-with-text","show_count":"","require_login":false}"=""
											rel="noopener noreferrer"> <span class="qwfw-m-spinner qwfw-spinner-icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
													<path
														d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
													</path>
												</svg></span> <span class="qwfw-m-icon qwfw--predefined"> <svg
													xmlns="http://www.w3.org/2000/svg" width="21" height="17"
													viewBox="0 0 21 17" stroke-linecap="round" stroke-linejoin="round"
													stroke-width="2">
													<path fill="none"
														d="M20,5.4595A4.6116,4.6116,0,0,0,15.25,1,5.2377,5.2377,0,0,0,10.5,3.8378,5.2377,5.2377,0,0,0,5.75,1,4.6116,4.6116,0,0,0,1,5.4595C1,9.4122,6.1277,13.4155,10.5,16,14.8721,13.4155,20,9.4122,20,5.4595Z">
													</path>
												</svg> </span> <span class="qwfw-m-text">Add to wishlist</span> </a>
									</div>
									<div class="product_meta">



										<span class="sku_wrapper">SKU: <span class="sku">036</span></span>


										<span class="posted_in">Category: Lotion</span>
										<span class="tagged_as">Tag: Skin Care</span>

									</div>
								</div>`;
    break;

  case "1":
    productSumaryWrapper.innerHTML = `<div class="summary entry-summary">
									<h2 itemprop="name" class="mkdf-single-product-title">night cream</h2>
									<p class="price"><span class="woocommerce-Price-amount amount"><bdi><span
													class="woocommerce-Price-currencySymbol">₹</span>399</bdi></span>
									</p>

									<div class="woocommerce-product-rating">
										<div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span
												style="width:100%">Rated <strong class="rating">5.00</strong> out of 5
												based on <span class="rating">1</span> customer rating</span></div> <a
											href="#reviews" class="woocommerce-review-link" rel="nofollow">(<span
												class="count">3</span> customer review)</a>
									</div>

									<div class="woocommerce-product-details__short-description">
										<p>Keep your skin soft, smooth, and radiant with J.Crew Night Cream. Packed with moisturizing ingredients, it provides long-lasting hydration without feeling heavy or greasy. Perfect for everyday use, it’s the ultimate skincare essential for a refreshed, glowing look.</p>
									</div>


									<form class="cart"
										action="cart.html">

										<div class="mkdf-quantity-buttons quantity">
											<label class="screen-reader-text" for="quantity_67743190b772f">Soap Natural
												quantity</label>
											<span class="mkdf-quantity-minus">-</span>
											<input type="text" id="quantity_67743190b772f"
												class="mkdf-quantity-input input-text qty text" data-step="1"
												data-min="1" data-max="" name="quantity" value="1" aria-label="Qty"
												placeholder="" inputmode="numeric" autocomplete="off">
											<span class="mkdf-quantity-plus">+</span>
										</div>

										<button type="submit" name="add-to-cart" value="1"
											class="single_add_to_cart_button button alt">Purchase</button>

									</form>


									<div
										class="qwfw-add-to-wishlist-wrapper qwfw--single qwfw-position--after-add-to-cart qwfw-item-type--icon-with-text">
										<a role="button" tabindex="0"
											class="qwfw-shortcode qwfw-m  qwfw-add-to-wishlist qwfw-spinner-item qwfw-behavior--view qwfw-type--icon-with-text"
											href="?add_to_wishlist=625" data-item-id="625" data-original-item-id="625"
											aria-label="Add to wishlist" data-shortcode-atts="{"
											button_behavior":"view","button_type":"icon-with-text","show_count":"","require_login":false}"=""
											rel="noopener noreferrer"> <span class="qwfw-m-spinner qwfw-spinner-icon">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
													<path
														d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
													</path>
												</svg></span> <span class="qwfw-m-icon qwfw--predefined"> <svg
													xmlns="http://www.w3.org/2000/svg" width="21" height="17"
													viewBox="0 0 21 17" stroke-linecap="round" stroke-linejoin="round"
													stroke-width="2">
													<path fill="none"
														d="M20,5.4595A4.6116,4.6116,0,0,0,15.25,1,5.2377,5.2377,0,0,0,10.5,3.8378,5.2377,5.2377,0,0,0,5.75,1,4.6116,4.6116,0,0,0,1,5.4595C1,9.4122,6.1277,13.4155,10.5,16,14.8721,13.4155,20,9.4122,20,5.4595Z">
													</path>
												</svg> </span> <span class="qwfw-m-text">Add to wishlist</span> </a>
									</div>
									<div class="product_meta">



										<span class="sku_wrapper">SKU: <span class="sku">036</span></span>


										<span class="posted_in">Category: Lotion</span>
										<span class="tagged_as">Tag: Skin Care</span>

									</div>
								</div>`;
    break;

  default:
    break;
}

// for the description and the reviews

const productReviewWrapper = document.getElementById("product-review");
productReviewWrapper.innerHTML = "";

switch (prodValue) {
  case "0":
    productReviewWrapper.innerHTML = `<ul class="tabs wc-tabs" role="tablist">
								<li class="description_tab" id="tab-title-description" role="tab"
									aria-controls="tab-description">
									<a href="#tab-description">
										Description </a>
								</li>
								<li class="additional_information_tab" id="tab-title-additional_information" role="tab"
									aria-controls="tab-additional_information">
									<a href="#tab-additional_information">
										Additional information </a>
								</li>
								<li class="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
									<a href="#tab-reviews">
										Reviews (3) </a>
								</li>
							</ul>
							<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
								id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">

								<h2>Description</h2>

								<div data-elementor-type="wp-post" data-elementor-id="625"
									class="elementor elementor-625">
									<section
										class="elementor-section elementor-top-section elementor-element elementor-element-6e77c1be elementor-section-boxed elementor-section-height-default elementor-section-height-default mkdf-parallax-row-no mkdf-content-aligment-left mkdf-row-grid-no mkdf-disabled-bg-image-bellow-no"
										data-id="6e77c1be" data-element_type="section">
										<div class="elementor-container elementor-column-gap-default">
											<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-173b17b9"
												data-id="173b17b9" data-element_type="column">
												<div class="elementor-widget-wrap elementor-element-populated">
													<div class="elementor-element elementor-element-3dfbed7c elementor-widget elementor-widget-text-editor"
														data-id="3dfbed7c" data-element_type="widget"
														data-widget_type="text-editor.default">
														<div class="elementor-widget-container">
															<p>Keep your skin soft, smooth, and radiant with J.Crew Night Cream. Packed with moisturizing ingredients, it provides long-lasting hydration without feeling heavy or greasy. Perfect for everyday use, it’s the ultimate skincare essential for a refreshed, glowing look.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</section>
								</div>
							</div>
							<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
								id="tab-additional_information" role="tabpanel"
								aria-labelledby="tab-title-additional_information">

								<h2>Additional information</h2>

								<table class="woocommerce-product-attributes shop_attributes"
									aria-label="Product Details">
									<tbody>
										<tr
											class="woocommerce-product-attributes-item woocommerce-product-attributes-item--weight">
											<th class="woocommerce-product-attributes-item__label" scope="row">Weight
											</th>
											<td class="woocommerce-product-attributes-item__value">300 gm</td>
										</tr>
										<tr
											class="woocommerce-product-attributes-item woocommerce-product-attributes-item--dimensions">
											<th class="woocommerce-product-attributes-item__label" scope="row">
												Dimensions</th>
											<td class="woocommerce-product-attributes-item__value">2 × 4 × 5 cm</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
								id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
								<div id="reviews" class="woocommerce-Reviews">
									<div id="comments">
    <h2 class="woocommerce-Reviews-title">
        3 reviews for <span>Day Cream</span>
    </h2>

    <ol class="commentlist">
        <!-- Review 1 -->
        <li class="review even thread-even depth-1" id="li-comment-83">
            <div id="comment-83" class="comment_container">
                <img data-del="avatar" src="assets/review 1.jpg"
                     class="avatar pp-user-avatar avatar-60 photo" height="60" width="60">
                <div class="comment-text">
                    <div class="star-rating" role="img" aria-label="Rated 5 out of 5">
                        <span style="width:100%">Rated <strong class="rating">5</strong> out of 5</span>
                    </div>
                    <p class="meta">
                        <strong class="woocommerce-review__author">Claudia Kennen</strong>
                        <span class="woocommerce-review__dash">–</span>
                        <time class="woocommerce-review__published-date" datetime="2023-01-15T10:30:00+00:00">January 15, 2023</time>
                    </p>
                    <div class="description">
                        <p>This cream is amazing! My skin feels softer and looks healthier after just a week of use.</p>
                    </div>
                </div>
            </div>
        </li>

        <!-- Review 2 -->
        <li class="review odd thread-odd depth-1" id="li-comment-84">
            <div id="comment-84" class="comment_container">
                <img data-del="avatar" src="assets/review 2.jpg"
                     class="avatar pp-user-avatar avatar-60 photo" height="60" width="60">
                <div class="comment-text">
                    <div class="star-rating" role="img" aria-label="Rated 4 out of 5">
                        <span style="width:80%">Rated <strong class="rating">4</strong> out of 5</span>
                    </div>
                    <p class="meta">
                        <strong class="woocommerce-review__author">Jessica Taylor</strong>
                        <span class="woocommerce-review__dash">–</span>
                        <time class="woocommerce-review__published-date" datetime="2023-02-10T08:20:00+00:00">February 10, 2023</time>
                    </p>
                    <div class="description">
                        <p>Very lightweight and absorbs quickly. I wish it came in a larger size, though!</p>
                    </div>
                </div>
            </div>
        </li>

        <!-- Review 3 -->
        <li class="review even thread-even depth-1" id="li-comment-85">
            <div id="comment-85" class="comment_container">
                <img data-del="avatar" src="assets/review 3.jpg"
                     class="avatar pp-user-avatar avatar-60 photo" height="60" width="60">
                <div class="comment-text">
                    <div class="star-rating" role="img" aria-label="Rated 5 out of 5">
                        <span style="width:100%">Rated <strong class="rating">5</strong> out of 5</span>
                    </div>
                    <p class="meta">
                        <strong class="woocommerce-review__author">Emily Carter</strong>
                        <span class="woocommerce-review__dash">–</span>
                        <time class="woocommerce-review__published-date" datetime="2023-03-05T14:45:00+00:00">March 5, 2023</time>
                    </p>
                    <div class="description">
                        <p>Perfect for my sensitive skin! It keeps me moisturized all day without any irritation.</p>
                    </div>
                </div>
            </div>
        </li>
    </ol>
</div>

								

									<div class="clear"></div>
								</div>
							</div>`;
    break;

  case "1":
    productReviewWrapper.innerHTML = `<ul class="tabs wc-tabs" role="tablist">
								<li class="description_tab" id="tab-title-description" role="tab"
									aria-controls="tab-description">
									<a href="#tab-description">
										Description </a>
								</li>
								<li class="additional_information_tab" id="tab-title-additional_information" role="tab"
									aria-controls="tab-additional_information">
									<a href="#tab-additional_information">
										Additional information </a>
								</li>
								<li class="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
									<a href="#tab-reviews">
										Reviews (3) </a>
								</li>
							</ul>
							<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
								id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">

								<h2>Description</h2>

								<div data-elementor-type="wp-post" data-elementor-id="625"
									class="elementor elementor-625">
									<section
										class="elementor-section elementor-top-section elementor-element elementor-element-6e77c1be elementor-section-boxed elementor-section-height-default elementor-section-height-default mkdf-parallax-row-no mkdf-content-aligment-left mkdf-row-grid-no mkdf-disabled-bg-image-bellow-no"
										data-id="6e77c1be" data-element_type="section">
										<div class="elementor-container elementor-column-gap-default">
											<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-173b17b9"
												data-id="173b17b9" data-element_type="column">
												<div class="elementor-widget-wrap elementor-element-populated">
													<div class="elementor-element elementor-element-3dfbed7c elementor-widget elementor-widget-text-editor"
														data-id="3dfbed7c" data-element_type="widget"
														data-widget_type="text-editor.default">
														<div class="elementor-widget-container">
															<p>Keep your skin soft, smooth, and radiant with J.Crew Night Cream. Packed with moisturizing ingredients, it provides long-lasting hydration without feeling heavy or greasy. Perfect for everyday use, it’s the ultimate skincare essential for a refreshed, glowing look.</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</section>
								</div>
							</div>
							<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
								id="tab-additional_information" role="tabpanel"
								aria-labelledby="tab-title-additional_information">

								<h2>Additional information</h2>

								<table class="woocommerce-product-attributes shop_attributes"
									aria-label="Product Details">
									<tbody>
										<tr
											class="woocommerce-product-attributes-item woocommerce-product-attributes-item--weight">
											<th class="woocommerce-product-attributes-item__label" scope="row">Weight
											</th>
											<td class="woocommerce-product-attributes-item__value">300 gm</td>
										</tr>
										<tr
											class="woocommerce-product-attributes-item woocommerce-product-attributes-item--dimensions">
											<th class="woocommerce-product-attributes-item__label" scope="row">
												Dimensions</th>
											<td class="woocommerce-product-attributes-item__value">2 × 4 × 5 cm</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
								id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
								<div id="reviews" class="woocommerce-Reviews">
									<div id="comments">
    <h2 class="woocommerce-Reviews-title">
        3 reviews for <span>Night Cream</span>
    </h2>

    <ol class="commentlist">
        <!-- Review 1 -->
        <li class="review even thread-even depth-1" id="li-comment-83">
            <div id="comment-83" class="comment_container">
                <img data-del="avatar" src="assets/review 1.jpg"
                     class="avatar pp-user-avatar avatar-60 photo" height="60" width="60">
                <div class="comment-text">
                    <div class="star-rating" role="img" aria-label="Rated 5 out of 5">
                        <span style="width:100%">Rated <strong class="rating">5</strong> out of 5</span>
                    </div>
                    <p class="meta">
                        <strong class="woocommerce-review__author">Claudia Kennen</strong>
                        <span class="woocommerce-review__dash">–</span>
                        <time class="woocommerce-review__published-date" datetime="2023-01-15T10:30:00+00:00">January 15, 2023</time>
                    </p>
                    <div class="description">
                        <p>This cream is amazing! My skin feels softer and looks healthier after just a week of use.</p>
                    </div>
                </div>
            </div>
        </li>

        <!-- Review 2 -->
        <li class="review odd thread-odd depth-1" id="li-comment-84">
            <div id="comment-84" class="comment_container">
                <img data-del="avatar" src="assets/review 2.jpg"
                     class="avatar pp-user-avatar avatar-60 photo" height="60" width="60">
                <div class="comment-text">
                    <div class="star-rating" role="img" aria-label="Rated 4 out of 5">
                        <span style="width:80%">Rated <strong class="rating">4</strong> out of 5</span>
                    </div>
                    <p class="meta">
                        <strong class="woocommerce-review__author">Jessica Taylor</strong>
                        <span class="woocommerce-review__dash">–</span>
                        <time class="woocommerce-review__published-date" datetime="2023-02-10T08:20:00+00:00">February 10, 2023</time>
                    </p>
                    <div class="description">
                        <p>Very lightweight and absorbs quickly. I wish it came in a larger size, though!</p>
                    </div>
                </div>
            </div>
        </li>

        <!-- Review 3 -->
        <li class="review even thread-even depth-1" id="li-comment-85">
            <div id="comment-85" class="comment_container">
                <img data-del="avatar" src="assets/review 3.jpg"
                     class="avatar pp-user-avatar avatar-60 photo" height="60" width="60">
                <div class="comment-text">
                    <div class="star-rating" role="img" aria-label="Rated 5 out of 5">
                        <span style="width:100%">Rated <strong class="rating">5</strong> out of 5</span>
                    </div>
                    <p class="meta">
                        <strong class="woocommerce-review__author">Emily Carter</strong>
                        <span class="woocommerce-review__dash">–</span>
                        <time class="woocommerce-review__published-date" datetime="2023-03-05T14:45:00+00:00">March 5, 2023</time>
                    </p>
                    <div class="description">
                        <p>Perfect for my sensitive skin! It keeps me moisturized all night without any irritation.</p>
                    </div>
                </div>
            </div>
        </li>
    </ol>
</div>

								

									<div class="clear"></div>
								</div>
							</div>`;
    break;

  default:
    break;
}
