//chi tiết
// Lấy id trên URL
const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get("id"));
// Tìm sản phẩm
const product = products.find(item => item.id === id);
const container = document.getElementById("productDetailContainer");
if(product){

container.innerHTML = `
<div class="col-lg-5 col-md-6 text-center">
    <img src="${product.image}" class="product-detail-img shadow " alt="${product.name}">
</div>

<div class="col-lg-5">
    <h2 class="product-detail-name" >${product.name}</h2>
    <span class="badge bg-success fs-6 mb-3"> ${product.category} </span>
    <h2 class="text-danger fw-bold mb-4">${product.price}</h2>  
    <hr class="my-4">
     <p>${product.desc}</p>
    <p class="text-success fw-bold">&#10004; Còn hàng</p>
    
    <button class="btn btn-success" onclick="addToCart('${product.name}')">🛒 Thêm vào giỏ hàng </button>

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

