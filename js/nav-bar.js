let arr = [
  {
    a: "homepage.html",
    name: " Trang chủ ",
  },
  {
    a: "cart.html",
    name: " Giỏ hàng",
  },
  {
    a: "product.html",
    name: " Sản phẩm ",
  },{
    a:"contact.html",
    name:"Liên hệ"
  },
  {
    a:"login.html",
    name:" Đăng nhập"
  },
  
  
];

let navBar = document.querySelector(".nav-bar");
if(navBar){
    navBar.innerHTML = '';
    for(let i of arr){
        navBar.innerHTML +=`     <div class="link">
        <a href="/${i.a}">${i.name}</a>
    </div>
    `
    }
}
