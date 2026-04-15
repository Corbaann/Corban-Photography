const myLibrary = [
    {id: crypto.randomUUID(),author :"Peter thiel",title:"zero to one " ,pages: 198 },
    {id: crypto.randomUUID(),author :"saichiro honda",title:"Honda " ,pages: 200 },
    {id: crypto.randomUUID(),author :"Barack obama",title:"Yes we can" ,pages: 300 }
];

function library (author , title , pages){
    this.author = author,
    this.title= title,
    this.pages=pages 
}

function addBook(){
    const newbook = new library("${library.title} ,${library.authoe},${library.pages}");
    myLibrary.push(newbook);
}


library.forEach(librarys =>{
    console.log("author : ${librarys.author} , title : {librarys.title}, pages : ${lyLibrarys.pages} ")
})

const header = document.querySelector("title")
header.textContent=  myLibrary.author