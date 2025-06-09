import { supabase } from './lib/supabaseClient.js'

async function fetchArticles() {
  const { data, error } = await supabase
    .from('article')
    .select('*')

  if (error) {
    console.error('Błąd podczas pobierania:', error)
    return
  }

  const container = document.getElementById('articles')
  container.innerHTML = ''

  data.forEach(article => {
    const div = document.createElement('div')
    div.className = 'p-4 border rounded-lg mb-4'
    div.innerHTML = `
      <h2 class="text-xl font-bold">${article.title}</h2>
      <h3 class="text-md text-gray-500">${article.subtitle}</h3>
      <p class="text-sm mt-2">${article.content}</p>
      <p class="text-xs text-gray-400 mt-2">Autor: ${article.author}, Data: ${new Date(article.created_at).toLocaleDateString()}</p>
    `
    container.appendChild(div)
  })
}

fetchArticles()

const form = document.getElementById('articleForm')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const title = document.getElementById('title').value
  const subtitle = document.getElementById('subtitle').value
  const author = document.getElementById('author').value
  const content = document.getElementById('content').value

  const { data, error } = await supabase
    .from('article')
    .insert([{ title, subtitle, author, content }])

  if (error) {
    alert('Błąd dodawania artykułu: ' + error.message)
  } else {
    alert('Artykuł dodany pomyślnie!')
    form.reset()
    fetchArticles()
  }
})
