// 1.1 

function expo(base, power, callback) {
    if (power === 0) {
      callback(1);
    } else {
      expo(base, power - 1, function(result) {
        callback(result * base);
      });
    }
  }


  expo(5, 3, function(result) {
    console.log(result);
  });
  
  
  // 1.2


  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });


  // 1.3


  function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

const obj = { name: 'John', age: 25, hobbies: ['reading', 'gaming'] };
const copy = deepCopy(obj);
console.log(copy);


// 1.4

function deepCopy(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
        reject(new Error('Argument is not an object'));
      } else {
        try {
          const copy = JSON.parse(JSON.stringify(obj));
          resolve(copy);
        } catch (error) {
          reject(error);
        }
      }
    });
  }

  
  const objj = { name: 'John', age: 25, hobbies: ['reading', 'gaming'] };
deepCopy(objj)
  .then(copy => {
    console.log('Deep copy:', copy);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
