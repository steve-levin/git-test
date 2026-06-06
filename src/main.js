const app = document.querySelector('#app')

app.innerHTML = `
  <h1>🚀 My First Vite App</h1>
  <p>This is running with auto-refresh.</p>
  <button id="btn">Click me</button>
`

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("btn").innerText = "It worked!"
})