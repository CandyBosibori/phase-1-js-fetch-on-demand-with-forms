const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (event)=> {
    event.preventDefault()
    const input = event.target.searchByID.value

    if (input <= 3 && input > 0) {
        fetch(`http://localhost:3000/movies/${input}`)
    .then(res => res.json())
    .then(data =>{
        const title = document.getElementById('Title')
    const summary = document.getElementById('summary')
    title.innerText = data.title
    summary.innerText = data.summary

    })
    
    }
  })
}

document.addEventListener('DOMContentLoaded', init);