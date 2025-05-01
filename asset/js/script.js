document.addEventListener("DOMContentLoaded", function () {
  const btnSidebar = document.querySelector("#btn");
  const btnClose = document.querySelector("#btn-close");
  const sidebar = document.querySelector(".sidebar");
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a"); // Ambil semua link

  btnSidebar.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  btnClose.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });

  // Tutup sidebar saat link diklik
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      sidebar.classList.remove("active");
    });
  });
});
