const paintings = [
{
id: 1,
title: "Mona Lisa",
image: "assets/image/monalisa.jpg"
},
{
id: 2,
title: "Starry Night",
image: "assets/image/starrynight.jpg"
},
{
id: 3,
title: "The Scream",
image: "assets/image/thescream.jpg"
},
{
id: 4,
title: "Girl with a Pearl Earring",
image: "assets/image/girlpearl.jpg"
},
{
id: 5,
title: "The Last Supper",
image: "assets/image/lastsupper.jpg"
},
{
id: 6,
title: "Sunflowers",
image: "assets/image/sunflowers.jpg"
}
];

// Hiển thị danh sách tranh ở trang chủ
const paintingList = document.getElementById("painting-list");

if (paintingList) {
paintings.forEach(painting => {
const paintingCard = document.createElement("div");

    paintingCard.innerHTML = `
        <img src="${painting.image}" alt="${painting.title}" width="250">
        <h3>${painting.title}</h3>
        <a href="html/chi-tiet.html?id=${painting.id}">
            Xem chi tiết
        </a>
        <hr>
    `;

    paintingList.appendChild(paintingCard);
});

}
