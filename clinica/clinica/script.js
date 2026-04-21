
// ===============================
// תפריט המבורגר (3 פסים)
// ===============================

// כפתור התפריט
const menuToggle = document.getElementById("menu-toggle");

// התפריט עצמו
const navLinks = document.getElementById("nav-links");

// כל הקישורים שבתפריט
const links = document.querySelectorAll("#nav-links a");


// ===============================
// פתיחה וסגירה בלחיצה על 3 פסים
// ===============================
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});


// ===============================
// סגירה בלחיצה על קישור
// ===============================
links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});


// ===============================
// סגירה בלחיצה מחוץ לתפריט
// ===============================
document.addEventListener("click", function (e) {

  // אם לוחצים מחוץ לתפריט ולכפתור
  if (
    !menuToggle.contains(e.target) &&
    !navLinks.contains(e.target)
  ) {
    navLinks.classList.remove("active");
  }

});
