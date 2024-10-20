document.querySelector("select").addEventListener("change", selectChange);

function selectChange(evt) {
  console.log("change", evt.target.value);
}

document.getElementById('theme-select').addEventListener('change', function() {
    const selectedTheme = this.value || 'light'; 
    document.body.setAttribute('data-theme', selectedTheme);
});


