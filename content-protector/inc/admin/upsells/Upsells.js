(()=>{"use strict";!function(){const e=async(e,s)=>{e.preventDefault();try{const e=await wp.apiFetch({path:`passster/v1/${s}-modal`,method:"GET"});document.body.classList.add("modal-open"),document.body.insertAdjacentHTML("beforeend",e),document.addEventListener("click",(e=>{(e.target.matches(".passster-modal__overlay")||e.target.matches(".passster-modal__dismiss"))&&t()}),{once:!0})}catch(e){console.error("Error fetching modal content:",e)}},t=()=>{const e=document.querySelector(".passster-modal__overlay");e&&e.remove(),document.body.classList.remove("modal-open")};document.querySelector('#adminmenu #toplevel_page_passster ul li a[href="admin.php?page=#password-lists"]').addEventListener("click",(function(t){e(t,"password-lists")})),document.querySelector('#adminmenu #toplevel_page_passster ul li a[href="admin.php?page=#statistics"]').addEventListener("click",(function(t){e(t,"statistics")}))}()})();