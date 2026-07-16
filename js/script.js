const products = [
    {
        id: 1,
        name: "Bó Hoa Hồng Đỏ",
        price: "350.000đ",
        category: "Tình yêu",
        image: "assets/hoa1.jpg",
        detail: "chitiet.html?id=1"
    },
    {
        id: 2,
        name: "Bó Tulip Hồng",
        price: "420.000đ",
        category: "Sinh nhật",
        image: "assets/hoa2.jpg",
        detail: "chitiet.html?id=2"
    },
    {
        id: 3,
        name: "Giỏ Hoa Để Bàn",
        price: "320.000đ",
        category: "Giỏ hoa",
        image: "assets/hoa3.jpg",
        detail: "chitiet.html?id=3"
    },
    {
        id: 4,
        name: "Bó Hoa Tốt Nghiệp",
        price: "400.000đ",
        category: "Tốt nghiệp",
        image: "assets/hoa4.jpg",
        detail: "chitiet.html?id=4"
    },
    {
        id: 5,
        name: "Bó Hoa Hướng Dương",
        price: "380.000đ",
        category: "Tốt nghiệp",
        image: "assets/hoa5.jpg",
        detail: "chitiet.html?id=5"
    },
    {
        id: 6,
        name: "Giỏ Hoa Khai Trương",
        price: "650.000đ",
        category: "Giỏ hoa",
        image: "assets/hoa6.jpg",
        detail: "chitiet.html?id=6"
    }
];

function displayProducts(list){

    let html = "";

    list.forEach(product=>{

        html += `
        <div class="col-lg-3 col-md-6 mb-4">

            <div class="card shadow h-100">

                <img src="${product.image}" class="card-img-top">

                <div class="card-body">

                    <h5 class="card-title">${product.name}</h5>

                    <p>
                        Giá:
                        <span class="text-danger">${product.price}</span>
                    </p>

                    <a href="${product.detail}" class="btn btn-success">
                        Xem chi tiết
                    </a>

                </div>

            </div>

        </div>
        `;

    });

    document.getElementById("productList").innerHTML = html;
}

displayProducts(products);

// Lấy tham số category từ URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

if (category) {

    // Chọn đúng option trong combobox
    document.getElementById("categoryFilter").value = category;

    // Lọc sản phẩm
    filterCategory();
}

function filterCategory(){

    let category =
    document.getElementById("categoryFilter").value;

    if(category==="all"){

        displayProducts(products);

        return;

    }

    let result = products.filter(function(product){

        return product.category===category;

    });

    displayProducts(result);

}
function searchProduct(){

    let keyword =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    let result = products.filter(function(product){

        return product.name
        .toLowerCase()
        .includes(keyword);

    });

    displayProducts(result);

}