
    document.addEventListener("DOMContentLoaded", function () {
      const moon = document.getElementById("moon");
      moon.addEventListener("click", function () {
        const html = document.documentElement;
        const isDark = html.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });
    });
