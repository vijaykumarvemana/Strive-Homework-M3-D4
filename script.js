let books = []
const row = document.querySelector('.row')



window.onload = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then(response => response.json())
        .then(gotBooks => {
            books = gotBooks
            displayBooks(gotBooks)
        })
        .catch(err => {
            console.log(err)
        })
        
}
console.log(books)

function filterBooks(query) {
    

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase())
    )

    displayBooks(filteredBooks)
}

function displayBooks(books) {
    row.innerHTML = books.map(book => `
        <div class="col-12 col-sm-6 col-md-3">
            <div class="card">
                <img src="${book.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <div class="d-flex justify-content-between">
                <p class="card-text">$${book.price}</p>
                <button class="btn bg-primary text-white">cart</button></div>
                </div>
            </div>
        </div>
    `).join("")
    
}


