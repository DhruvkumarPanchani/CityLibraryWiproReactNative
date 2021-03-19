// set API
var apiEndPoint = "http://training.pyther.com:3000/api/book";

// Author Dhruv Panchani

// Get all book List
export var getBook = () =>{
    return fetch(apiEndPoint, {
        method: 'get',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              }
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}

// Get book Count
export var getBookCount = () =>{
  return fetch(apiEndPoint, {
      method: 'get',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
            }
      })
    .then(response => response.json())
    .then(response => {
      return(response.length);
      }).catch(function(error) {
          console.log(error);
      });
}

// Add Book
export var addBook = (book) =>{
    return fetch(apiEndPoint, {
        method: 'post',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(book)
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}

// Delete Book
export var deleteBook = (book) =>{
    return fetch(apiEndPoint, {
        method: 'delete',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(book)
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}

// Get Book by Id
export var getBookById =  (id) =>{
    return fetch(apiEndPoint+"/"+id, {
        method: 'get',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              }
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}

// Update Book
export var updateBook = (book) =>{
    return fetch(apiEndPoint, {
        method: 'put',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
              body:JSON.stringify(book)
        })
      .then(response => response.json())
      .then(response => {
        return(response);
        }).catch(function(error) {
            console.log(error);
        });
}