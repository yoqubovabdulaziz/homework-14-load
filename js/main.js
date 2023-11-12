const loading = document.getElementById("loading");

window.addEventListener("load", () => {
  loading.classList.add('loading-none');
});

// or

const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);