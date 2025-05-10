 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
let response_email_message = document.getElementById("successMessage");
  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

let prototype_viewer = document.getElementById("prototype-viewer");
let prototype_base_choice = document.getElementById("base-choice");
let prototype_cover_choice = document.getElementById("cover-choice");
let prototype_covering_choice = document.getElementById("covering-choice");
let prototype_pipepart_choice = document.getElementById("pipepart-choice");
let prototype_rotor_choice = document.getElementById("rotor-choice");
let modelID = "RfyxF";


prototype_viewer.src = "https://p3d.in/e/" + modelID;

prototype_base_choice.onclick = function() {
  modelID = "RfyxF";  
  prototype_viewer.src = "https://p3d.in/e/" + modelID;
};

prototype_cover_choice.onclick = function() {
  modelID = "gGklM/RfyxF";  
  prototype_viewer.src = "https://p3d.in/e/" + modelID;
};

prototype_covering_choice.onclick = function() {
  modelID = "6D6oQ";  
  prototype_viewer.src = "https://p3d.in/e/" + modelID;
};

prototype_pipepart_choice.onclick = function() {
  modelID = "pFTXE";  
  prototype_viewer.src = "https://p3d.in/e/" + modelID;
};

prototype_rotor_choice.onclick = function() {
  modelID = "6Jjyu";  
  prototype_viewer.src = "https://p3d.in/e/" + modelID;
};

