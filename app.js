const danhmuc = document.querySelector("#bt-danhmuc");
function toggle(){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
if(danhmuc){
    danhmuc.addEventListener('click', toggle);
}


const arrayListUser = [
    {
        name : 'huy', 
        user : 'huy',
        pass : 12345
    }
];

let arrayNew = JSON.parse(localStorage.getItem('user'))
if(arrayNew == null) {
    localStorage.setItem('user',JSON.stringify(arrayListUser));
    
}
function dangki() {
    let name = document.querySelector('.name').value;
    let user = document.querySelector('.user').value;
    let pass = document.querySelector('.pass').value;
    arrayNew.push({
        name : name,
        user : user,
        pass : pass
    });
    localStorage.setItem('user', JSON.stringify(arrayNew))
}
console.log(arrayNew)

const arrayListProduct =[
    {
        id : 1,
        img : "img/ BG.png",
        name : "mon ngon",
        price : "20$"
    },
    {
        id : 2,
        img : "",
        name : "",
        price : ""
    },
    {
        id : 3,
        img : "",
        name : "",
        price : ""
    },
    {
        id : 4 ,
        img : "",
        name : "",
        price : ""
    },
    {
        id : 5 ,
        img : "",
        name : "",
        price : ""
    },
    {
        id : 6 ,
        img : "",
        name : "",
        price : ""
    },
    {
        id : 7 ,
        img : "",
        name : "",
        price : ""
    },
]

function showProduct(data) {
    let product = document.querySelector(".product");
    if (product) {
        for(let item of data) {
            product.innerHTML +=`
            <div class="item_product">
            <img src="${item.img}" alt="">
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button><a href="sp.html?id=${item.id}">gửi</a></button>
            </div>`;
        }
    }
}

showProduct(arrayListProduct);

function showMainProduct() {
    let _prin = new URLSearchParams(window.location.search).get("id");
    if(_prin){
        let product = arrayListProduct.find(
            function(item){
                return item.id == _prin;
            }
        );
        // showProduct(product);
        let detail = document.querySelector(".product-main");
        detail.innerHTML += `
        <div class="product-main">
        <img src="${product.img}" alt="">
        <p class ="name">${product.name}</p>
        <p class ="price">${product.price}</p>
        <button onclick="gửi()">gửi</button>
    </div>
    `;
    }

}

showMainProduct();