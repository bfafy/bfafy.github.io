const url = 'https://jsonplaceholder.typicode.com/todos/1';
const dataDiv = document.getElementById('data');

fetch(url)
  .then(response => response.json())
  .then(data => {
    const text = `Title: ${data.title}, Completed: ${data.completed}`;
    dataDiv.innerText = text;
  })
  .catch(error => console.error(error));
