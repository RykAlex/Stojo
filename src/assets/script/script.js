const imagemin = require("gulp-imagemin");

document.addEventListener("DOMContentLoaded", function (event) {
  let SimpleBar = require("simplebar");

  btnIconArrow();
  accordion();
  btnTextArrow();
  openLeftMenu();


  function btnIconArrow() {
    document.querySelectorAll('.dropdown').forEach(item => {
      let btn = item.querySelector('button');
      let content = item.querySelector('.dropdown-content');
      let arrow = item.querySelector('.icon-arrow');
      btn.addEventListener('click', () => {
        content.classList.toggle('show');
        arrow.classList.toggle('active');
      })
      window.addEventListener("click", function (e) {
        if (!btn.contains(e.target)) {
          content.classList.remove("show");
          arrow.classList.remove('active');
        }
      });
    })
  }

  function accordion() {
    document.querySelectorAll('.accordion').forEach(item => {
      item.addEventListener("click", function () {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    })
  }

  function btnTextArrow() {
    document.querySelectorAll('.dropdown-noauth').forEach(item => {
      let btn = item.querySelector('button');
      let content = item.querySelector('.submenu');
      let arrow = item.querySelector('.btn-text');
      btn.addEventListener('click', () => {
        content.classList.toggle('show');
        arrow.classList.toggle('active');
      })
      window.addEventListener("click", function (e) {
        if (!btn.contains(e.target)) {
          content.classList.remove("show");
          arrow.classList.remove('active');
        }
      });
    });
  }

  function openLeftMenu() {
    let icon = document.querySelector('.menu-icon');
    let menu = document.querySelector('.menu-auth');
    icon.addEventListener("click", () => {
      menu.classList.toggle('show');
    });
    window.addEventListener("click", function (e) {
      if (!icon.contains(e.target)) {
        menu.classList.remove("show");
      }
    })
  }


});
let header = document.querySelector('header');
let headerHeight = header.getBoundingClientRect().height;
console.log(headerHeight);
let footer = document.querySelector('footer');
let footerHeight = footer.getBoundingClientRect().height;
console.log(footerHeight);



// function initFooterAccordeons(accordeons) {
//   if (accordeons.length) {
//     accordeons.forEach((accordeon) => {
//       let chevron = accordeon.querySelector(".icon-chevron-down")
//       accordeon.querySelector("h5")
//         .addEventListener("click", function () {
//           vanillaSlideToggle(accordeon.querySelector(".col-content"))
//           chevron.classList.toggle("icon-chevron-down")
//           chevron.classList.toggle("icon-chevron-up")
//         })
//     })
//   }
// }

// function vanillaSlideToggle(elem, initialHeight) {
//   event.stopPropagation
//   if (initialHeight) {
//     if (elem.style.maxHeight != `${initialHeight}px`) {
//       elem.style.maxHeight = `${initialHeight}px`
//     } else {
//       elem.style.maxHeight = `${elem.scrollHeight}px`
//     }
//   } else {
//     if (elem.style.maxHeight) {
//       elem.style.maxHeight = null
//     } else {
//       elem.style.maxHeight = `${elem.scrollHeight}px`
//     }
//   }
// }