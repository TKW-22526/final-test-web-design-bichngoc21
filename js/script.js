const products = [
    {
        id: 1,
        name: "Bó hoa hồng đỏ",
        price: "350.000đ",
        category: "Kỷ niệm",
        image: "../assets/hoa1.jpg",
        desc: "Mang phong cách thiết kế hiện đại với phom dáng tròn đầy đặn, bó hoa nổi bật bởi sắc đỏ kiêu sa của những bông hồng tươi mới được tuyển chọn kỹ lưỡng. Sắc đỏ nồng nàn đặt trên nền giấy trắng cao cấp tạo nên sự tương phản bắt mắt, thay bạn gửi gắm thông điệp yêu thương trọn vẹn.",
        detail: "../html/chi-tiet.html?id=1"
    },
    {
        id: 2,
        name: "Bó hồng đỏ giấy Kraft",
        price: "300.000đ",
        category: "Kỷ niệm",
        image: "../assets/hoakyniem/kyniem2.jpg",
        desc: "Thiết kế mang phong cách cổ điển với những đóa hồng đỏ nhung rực rỡ, được gói trọn trong lớp giấy kraft mộc mạc và ấm áp. Lựa chọn hoàn hảo, không bao giờ lỗi mốt để bày tỏ tình cảm chân thành.",
        detail: "../html/chi-tiet.html?id=2"
    },
    {
        id: 3,
        name: "Bó hoa baby hồng",
        price: "550.000đ",
        category: "Kỷ niệm",
        image: "../assets/hoakyniem/kyniem3.jpg",
        desc: "Mang vẻ đẹp bồng bềnh, dịu dàng tựa như những áng mây hồng. Bó hoa baby sở hữu độ bền cao, giữ được phom dáng lâu, là món quà ngọt ngào làm xiêu lòng mọi cô gái.",
        detail: "../html/chi-tiet.html?id=3"        
    },
    {
        id: 4,
        name: "Bó hoa mẫu đơn phối lan",
        price: "650.000đ",
        category: "Kỷ niệm",
        image: "../assets/hoakyniem/kyniem4.jpg",
        desc: "Sự kết hợp tinh tế giữa nét đài các của hoa mẫu đơn hồng nhập khẩu và vẻ đẹp sang trọng từ những nhành lan hồ điệp trắng. Thiết kế nhỏ gọn, trang nhã và vô cùng thời thượng.",
        detail: "../html/chi-tiet.html?id=4"
    },
    {
        id: 5,
        name: "Bó hoa mẫu đơn hồng",
        price: "900.000đ",
        category: "Kỷ niệm",
        image: "../assets/hoakyniem/kyniem5.jpg",
        desc: "Bó hoa size lớn lộng lẫy với điểm nhấn là những bông mẫu đơn hồng nở rộ quyến rũ, điểm xuyết thêm lá phụ xanh mát. Món quà đẳng cấp, thay lời chúc viên mãn và thịnh vượng.",
        detail: "../html/chi-tiet.html?id=5"
    },
    {
        id: 6,
        name: "Bó Tulip hồng",
        price: "420.000đ",
        category: "Sinh nhật",
        image: "../assets/hoa2.jpg",
        desc: "Sự kết hợp ngọt ngào giữa những đóa hoa tulip hồng dịu dàng và tulip trắng tinh khôi, điểm xuyết thêm hoa baby bồng bềnh. Bó hoa được ôm trọn trong lớp giấy gói hồng pastel cùng tone, mang lại cảm giác thanh lịch, rất thích hợp để tặng sinh nhật hoặc người yêu.",
        detail: "../html/chi-tiet.html?id=6"
    },
    {
        id: 7,
        name: "Bó Tulip hồng giấy trắng",
        price: "600.000đ",
        category: "Sinh nhật",
        image: "../assets/hoasinhnhat/sinhnhat1.jpg",
        desc: "",
        detail: "../html/chi-tiet.html?id=7"
    },
    {
        id: 8,
        name: "Bó cẩm tú cầu phối hoa",
        price: "400.000đ",
        category: "Sinh nhật",
        image: "../assets/hoasinhnhat/sinhnhat2.jpg",
        desc: "Điểm nhấn là bông cẩm tú cầu xanh đại dương bản lớn, kết hợp hài hòa cùng hoa cát tường hồng và cúc họa mi nhỏ xinh. Dáng hoa được ôm trọn trong lớp giấy lụa trắng thắt nơ xanh đồng điệu.",
        detail: "../html/chi-tiet.html?id=8"
    },
    {
        id: 9,
        name: "Bó cẩm tú cầu mix",
        price: "850.000đ",
        category: "Sinh nhật",
        image: "../assets/hoasinhnhat/sinhnhat3.jpg",
        desc: "Bó hoa cẩm tú cầu dáng tròn cỡ lớn đầy đặn, xen kẽ giữa hai sắc màu trắng tinh khôi và tím nhạt thơ mộng. Lớp giấy gói màu xanh ghi xám hiện đại giúp tổng thể bó hoa trông vô cùng sang trọng và hoàng tráng.",
        detail: "../html/chi-tiet.html?id=9"
    },
    {
        id: 10,
        name: "Bó hoa hồng kem dâu",
        price: "650.000đ",
        category: "Sinh nhật",
        image: "../assets/hoasinhnhat/sinhnhat4.jpg",
        desc: "Sự kết hợp nổi bật giữa những đóa hồng màu kem dâu ngọt ngào cùng các nụ hoa xanh nhỏ điểm xuyết. Lớp giấy gói đen huyền bí bên ngoài càng làm tôn lên vẻ đẹp kiêu sa, hiện đại của bó hoa.",
        detail: "../html/chi-tiet.html?id=10"
    },
    {
        id: 11,
        name: "Bó Hoa Tốt Nghiệp",
        price: "400.000đ",
        category: "Tốt nghiệp",
        image: "../assets/hoa4.jpg",
        desc: "Thiết kế độc đáo kết hợp chú gấu bằng hoa đội mũ cử nhân đáng yêu cùng các loại hoa tone màu pastel dịu nhẹ. Bó hoa được bao bọc trong lớp giấy gói cao cấp thắt nơ hồng, là món quà chúc mừng ý nghĩa và lưu giữ khoảnh khắc kỷ niệm ngày tốt nghiệp",
        detail: "../html/chi-tiet.html?id=11"
    },
    {
        id: 12,
        name: "Bó hoa gấu tốt nghiệp",
        price: "450.000đ",
        category: "Tốt nghiệp",
        image: "../assets/hoatotnghiep/totnghiep1.jpg",
        desc: "Điểm nhấn đáng yêu với chú gấu cử nhân đội mũ tốt nghiệp ở trung tâm, bao quanh bởi những đóa hồng trắng, hoa bi nhỏ và chocolate Ferrero Rocher cao cấp. Thiết kế gói bằng giấy xanh denim hiện đại, nam hay nữ tặng đều hợp.",
        detail: "../html/chi-tiet.html?id=12"
    },
    {
        id: 13,
        name: "Bó hoa hướng dương giấy Kraf",
        price: "320.000đ",
        category: "Tốt nghiệp",
        image: "../assets/hoatotnghiep/totnghiep2.jpg",
        desc: "Mang phong cách vintage ấm áp với 3 bông hướng dương lớn nở rộ, kết hợp cùng hoa cúc calimero trắng nhỏ và lá bạc. Lớp giấy gói kraft nâu mộc mạc làm nổi bật sắc vàng rực rỡ đại diện cho tương lai tươi sáng.",
        detail: "../html/chi-tiet.html?id=13"
    },
    {
        id: 14,
        name: "Bó hoa hướng dương trắng",
        price: "350.000đ",
        category: "Tốt nghiệp",
        image: "../assets/hoatotnghiep/totnghiep3.jpg",
        desc: "Kiểu dáng hiện đại và trang nhã với 3 bông hướng dương phối cùng lá phụ xanh mát. Bó hoa sử dụng giấy gói tông trắng tinh khôi, tạo độ tương phản mạnh mẽ với dải nơ đen thắt điệu đà làm điểm nhấn nổi bật.",
        detail: "../html/chi-tiet.html?id=14"
    },
    {
        id: 15,
        name: "Giỏ Hoa 01",
        price: "320.000đ",
        category: "Giỏ hoa",
        image: "../assets/hoa3.jpg",
        desc: "Giỏ mây đan mộc mạc kết hợp hài hòa giữa hoa mẫu đơn hồng, hoa hồng kem cùng lá bạc trang nhã. Tone màu pastel sang trọng là lựa chọn lý tưởng để trang trí bàn làm việc, phòng khách hoặc làm quà tặng chúc mừng.",
        detail: "../html/chi-tiet.html?id=15"
    },
    {
        id: 16,
        name: "Giỏ Hoa 02",
        price: "320.000đ",
        category: "Giỏ hoa",
        image: "../assets/giohoa/giohoa1.jpg",
        desc: "Mang phong cách thanh lịch và thuần khiết với sự kết hợp của hoa cát tường trắng, hoa hồng trắng tinh khôi điểm xuyết sắc xanh dịu nhẹ. Giỏ mây đan đan thắt nơ xanh mang lại cảm giác tươi mới, tràn đầy sức sống cho không gian.",
        detail: "../html/chi-tiet.html?id=16"
    },
    {
        id: 17,
        name: "Giỏ Hoa 03",
        price: "320.000đ",
        category: "Giỏ hoa",
        image: "../assets/giohoa/giohoa2.jpg",
        desc: "Sự phối hợp ngọt ngào giữa hoa cẩm chướng hồng nhạt, hoa hồng kem dâu và những đóa cúc họa mi nhỏ xinh rực rỡ. Chiếc giỏ tre nhỏ gọn thắt nơ hồng xinh xắn trên quai xách rất thích hợp làm quà tặng tặng bạn bè, đồng nghiệp.",
        detail: "../html/chi-tiet.html?id=17"
    },
    {
        id: 18,
        name: "Giỏ Hoa 04",
        price: "320.000đ",
        category: "Giỏ hoa",
        image: "../assets/giohoa/giohoa3.jpg",
        desc: "Một thiết kế rực rỡ và ấm áp ngập tràn sắc vàng của hoa cúc đại đóa, hoa tulip vàng và hoa hồng. Điểm xuyết thêm cúc họa mi trắng trên nền giỏ mây tròn, mẫu hoa mang lại nguồn năng lượng tích cực và lời chúc may mắn, thành công.",
        detail: "../html/chi-tiet.html?id=18"
    },
]; 

function displayProducts(list){
    let html = "";
    list.forEach(product=>{
html += `
<div class="col-xl-3 col-lg-4 col-md-6 mb-4">
    <div class="card product-card h-100">

    <img src="${product.image}" class="card-img-top">
        <div class="card-body text-center">
            <h5>${product.name}</h5>
            <p> Giá: <span class="text-danger">${product.price}</span></p>
            <div class="d-grid gap-2">
                 <a href="${product.detail}" class="btn btn-success"> Xem chi tiết </a>
                <button class="btn btn-outline-success" onclick="addToCart('${product.name}')"> Thêm vào giỏ </button>
             </div>
        </div>
    </div>
</div>
`;
    });
    document.getElementById("productList").innerHTML = html;
}
//displayProducts(products);
// Chỉ hiển thị danh sách sản phẩm khi đang ở trang có productList
const productList = document.getElementById("productList");

if (productList) {
    displayProducts(products);
}
// Lấy tham số category từ URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const categoryFilter = document.getElementById("categoryFilter");

if (category && categoryFilter) {
    categoryFilter.value = category;
    filterCategory();
}

function filterCategory(){
    const categoryFilter = document.getElementById("categoryFilter");

    if (!categoryFilter) return;

    let category = categoryFilter.value;

    if(category === "all"){
        displayProducts(products);
        return;
    }

    let result = products.filter(function(product){
        return product.category === category;
    });

    displayProducts(result);
}
function searchProduct(){
    let keyword =
    document.getElementById("searchInput")
    .value
    .toLowerCase()
    let result = products.filter(function(product){
        return product.name
        .toLowerCase()
        .includes(keyword);
    });
    displayProducts(result);
}
function addToCart(productName){

alert("Đã thêm " + productName + " vào giỏ hàng!");

}