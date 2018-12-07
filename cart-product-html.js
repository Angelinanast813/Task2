let _makeHtml = ({
	id,
	name,
	image_url,
	price
}) => {
	let $product = $(`<div class="cart-product" data-product-id="${id}">`);
	$product.append($(`<img src="${image_url}" alt="${name}" class="cart-product-image">`));
	$product.append($(`<span class="cart-product-title">`).text(name));
	$product.append($(`<span class="cart-product-price">`).text(price));
	$product.append($('<button type="button" class="cart-product-remove-from-cart">').text("remove from cart"));
	return $product;
};

module.exports = _makeHtml;
