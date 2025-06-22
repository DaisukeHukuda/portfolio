// HTMLテンプレート（index.htmlの内容を関数で生成）
function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang=\"ja\">
<head>
  <meta charset=\"UTF-8\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
  <title>${data.name} | 地域をつなぐ起業家</title>
  <style>
    body { margin: 0; font-family: 'Helvetica Neue', sans-serif; background-color: #f7f4f0; color: #333; }
    header { background: url('assets/hero-image.jpg') center/cover no-repeat; color: white; padding: 100px 20px; text-align: center; }
    header h1 { font-size: 3em; margin: 0; }
    header p { font-size: 1.2em; }
    nav { background-color: #2c2c2c; padding: 10px; text-align: center; }
    nav a { color: white; margin: 0 15px; text-decoration: none; }
    section { padding: 60px 20px; max-width: 1000px; margin: 0 auto; }
    h2 { color: #b0413e; border-left: 5px solid #b0413e; padding-left: 10px; }
    footer { background-color: #2c2c2c; color: white; text-align: center; padding: 20px; }
    .project { margin-bottom: 40px; }
  </style>
</head>
<body>
  <header>
    <h1>${data.name}</h1>
    <p>${data.catch.replace(/\n/g, '<br />')}</p>
  </header>
  <nav>
    <a href=\"#about\">自己紹介</a>
    <a href=\"#projects\">プロジェクト</a>
    <a href=\"#events\">イベント</a>
    <a href=\"#contact\">お問い合わせ</a>
  </nav>
  <section id=\"about\">
    <h2>自己紹介</h2>
    <p>${data.about.replace(/\n/g, '<br />')}</p>
  </section>
  <section id=\"projects\">
    <h2>プロジェクト</h2>
    ${data.projects}
  </section>
  <section id=\"events\">
    <h2>イベント・コミュニティ</h2>
    <p>${data.events.replace(/\n/g, '<br />')}</p>
  </section>
  <section id=\"contact\">
    <h2>お問い合わせ</h2>
    <p>${data.contact}</p>
    <p>Email: ${data.email}</p>
  </section>
  <footer>
    <p>&copy; 2025 ${data.name}. All rights reserved.</p>
  </footer>
</body>
</html>`;
}

function updatePreview() {
  const data = {
    name: document.getElementById('name').value,
    catch: document.getElementById('catch').value,
    about: document.getElementById('about').value,
    projects: document.getElementById('projects').value,
    events: document.getElementById('events').value,
    contact: document.getElementById('contact').value,
    email: document.getElementById('email').value,
  };
  const html = generateHTML(data);
  const iframe = document.getElementById('previewFrame');
  iframe.srcdoc = html;
}

document.getElementById('updateBtn').addEventListener('click', updatePreview);
window.addEventListener('DOMContentLoaded', updatePreview);

document.getElementById('downloadBtn').addEventListener('click', function() {
  const data = {
    name: document.getElementById('name').value,
    catch: document.getElementById('catch').value,
    about: document.getElementById('about').value,
    projects: document.getElementById('projects').value,
    events: document.getElementById('events').value,
    contact: document.getElementById('contact').value,
    email: document.getElementById('email').value,
  };
  const html = generateHTML(data);
  const blob = new Blob([html], {type: 'text/html'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'index.html';
  a.click();
  URL.revokeObjectURL(a.href);
});
