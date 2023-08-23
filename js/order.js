function converter(productPriceId) {
  return parseFloat(document.getElementById(productPriceId).innerText);
}

function getElementValue(productNameId, productPriceId) {
  document.getElementById("purchase").removeAttribute("disabled");
  const productName = document.getElementById(productNameId).innerText;
  const productPrice = converter(productPriceId);

  const item = document.getElementById("list-item");
  const li = document.createElement("li");
  li.classList.add("text-[#111]", "text-xl", "font-medium", "mb-3");
  li.innerHTML = productName;
  item.appendChild(li);

  const totalPrice = converter("total-price") + productPrice;
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);

  let total = document.getElementById("total");
  total.innerText = totalPrice.toFixed(2);
  let discount = converter("discount");

  if (totalPrice >= 200.0) {
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
    applyBtn.addEventListener("click", function () {
      const coupon = document.getElementById("coupon-field").value;
      if (coupon === "SELL200") {
        discount = (converter("total-price") * 20) / 100;
        document.getElementById("discount").innerText = discount.toFixed(2);
        total.innerText = (converter("total-price") - discount).toFixed(2);
      }
      document.getElementById("coupon-field").value = "";
    });
  }
}

document.getElementById("spoon").addEventListener("click", function () {
  const product = getElementValue("spoon-name", "spoon-price");
});
document.getElementById("accessories").addEventListener("click", function () {
  const product = getElementValue("accessories-name", "accessories-price");
});
document.getElementById("home-cooker").addEventListener("click", function () {
  const product = getElementValue("home-cooker-name", "home-cooker-price");
});
document.getElementById("cap").addEventListener("click", function () {
  const product = getElementValue("cap-name", "cap-price");
});
document.getElementById("jersey-set").addEventListener("click", function () {
  const product = getElementValue("jersey-set-name", "jersey-set-price");
});
document.getElementById("sports-cates").addEventListener("click", function () {
  const product = getElementValue("sports-cates-name", "sports-cates-price");
});

document.getElementById("go-home").addEventListener("click", function () {
  document.getElementById("total-price").innerText = "00.00";
  document.getElementById("discount").innerText = "00.00";
  document.getElementById("total").innerText = "00.00";
  document.getElementById("purchase").setAttribute("disabled", true);

  let parent = document.getElementById("list-item");
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
});
