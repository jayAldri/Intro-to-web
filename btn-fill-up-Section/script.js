document.getElementById("openFormBtn").addEventListener("click", function () {
  const form = document.getElementById("formSection");

  // Toggle open/close
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});
