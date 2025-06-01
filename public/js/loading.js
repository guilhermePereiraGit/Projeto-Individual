function mostrarTelaLoading() {
  const loading = document.getElementById("TelaLoading");
  loading.style.display = "flex";

  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);
}