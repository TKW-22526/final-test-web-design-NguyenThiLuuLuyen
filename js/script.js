const paintingList = [
    { 
        id:"01", 
        name:"Mona Lisa", 
        artist:"Leonardo da Vinci",
        price: 500,
        image:"assets/image/monalisa.jpg", 
        productLink:"painting-detail.html" 
    },

    { 
        id:"02", 
        name: "Starry Night", 
        artist:"Vincent van Gogh",
        price:650,
        image:"assets/image/starrynight.jpg", 
        productLink:"painting-detail.html" 
    },

    { 
        id:"03", 
        name:"The Scream", 
        artist:"Edvard Munch",
        price:450,
        image:"assets/image/thescream.jpg", 
        productLink:"painting-detail.html" 
    },

    { 
        id:"04", 
        name:"Girl with a Pearl Earring", 
        artist:"Johannes Vermeer",
        price:700,
        image:"assets/image/girlpearl.jpg", 
        productLink:"painting-detail.html" 
    },

    { 
        id:"05", 
        name:"The Last Supper", 
        artist:"Leonardo da Vinci",
        price:900,
        image:"assets/image/lastsupper.jpg", 
        productLink:"painting-detail.html" 
    },

    { 
        id:"06", 
        name:"Sunflowers", 
        artist:"Vincent van Gogh",
        price:550,
        image:"assets/image/sunflowers.jpg", 
        productLink:"painting-detail.html" 
    }
];

function addPainting(id, name, artist, price, image, hyperLink) 
{
    // Tạo khung chứa tranh
    const paintingItem = document.createElement("div");

    // Chia cột Bootstrap
    paintingItem.setAttribute("class", "product-item col");

    // Khung chứa ảnh
    const paintingImage = document.createElement("div");
    paintingImage.setAttribute("class", "product-image");

    // Tạo ảnh
    const myImage = document.createElement("img");
    myImage.setAttribute("src", image);
    myImage.setAttribute("alt", name);
    myImage.setAttribute("class", "img-thumbnail img-fluid");

    myImage.style.height = "250px";
    myImage.style.width = "250px";

    // Gắn ảnh vào khung
    paintingImage.appendChild(myImage);

    // Khung thông tin
    const paintingInfo = document.createElement("div");
    paintingInfo.setAttribute("class", "product-info text-center");

    // Tên tranh
    const paintingName = document.createElement("p");
    paintingName.textContent = name;

    paintingInfo.appendChild(paintingName);

    // Tên họa sĩ
    const artistName = document.createElement("p");
    artistName.textContent = "Họa sĩ: " + artist;

    paintingInfo.appendChild(artistName);

    // Giá tranh
    const paintingPrice = document.createElement("p");
    paintingPrice.textContent = price + " USD";

    paintingPrice.setAttribute(
        "class",
        "text-danger fw-bold"
    );

    paintingInfo.appendChild(paintingPrice);

    // Nút xem chi tiết
    const paintingLink = document.createElement("a");

    paintingLink.textContent = "Xem chi tiết";

    paintingLink.setAttribute(
        "href",
        hyperLink + "?id=" + id
    );

    paintingLink.setAttribute(
        "class",
        "btn btn-primary"
    );

    paintingInfo.appendChild(paintingLink);

    // Gắn tất cả vào item
    paintingItem.appendChild(paintingImage);
    paintingItem.appendChild(paintingInfo);

    // Hiển thị ra danh sách
    document
        .getElementById("product-list")
        .appendChild(paintingItem);
}

// Hiển thị toàn bộ tranh
paintingList.forEach(function(item){

    addPainting(
        item.id,
        item.name,
        item.artist,
        item.price,
        item.image,
        item.productLink
    );

});