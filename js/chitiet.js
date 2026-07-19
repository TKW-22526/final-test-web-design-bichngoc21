//chi tiết
// Lấy id trên URL
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get("id"));
// Tìm sản phẩm
const product = products.find(item => item.id === id);
const container = document.getElementById("productDetailContainer");
if(product){

container.innerHTML = `
<div class="col-md-6 text-center">
    <img src="${product.image}"
         class="img-fluid rounded shadow"
         alt="${product.name}">
</div>

<div class="col-md-6">
    <h2>${product.name}</h2>

    <h4 class="text-danger my-3">
        ${product.price}
    </h4>

    <p><strong>Danh mục:</strong> ${product.category}</p>

    <p>${product.desc}</p>

<button class="btn btn-success" onclick="addToCart('${product.name}')"> Thêm vào giỏ </button>

<a href="san-pham.html" class="btn btn-outline-secondary ms-2"> Quay lại </a>

</div>
`;

}else{

container.innerHTML=`
<div class="text-center">
    <h3>Không tìm thấy sản phẩm.</h3>
</div>
`;

}

