document.getElementById('sai').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const page = this.dataset.page;

    fetch(page + 'html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      });
  });
});
