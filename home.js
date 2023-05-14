// drop-down topSideBar

const optionMenu = document.querySelector(".topside"),
  selectBtn = optionMenu.querySelector(".allTopSide"),
  options = optionMenu.querySelector(".options");
  selectBtn.addEventListener("click", () => options.classList.toggle("active"));


  $(document).ready(function() {
    $(".listChannel ul").slideDown();
    $(".selectList").on('click', function(e) {
        e.preventDefault();
        $(this).next().slideToggle();
    })
  });

