const refs = {
  signUpModalBtn: document.querySelector("[data-modal-signUp]"),
  signInModalBtn: document.querySelector("[data-modal-signIn]"),
  orderModalBtn: document.querySelector("[data-modal-order]"),
  feedbackModalBtn: document.querySelector("[data-modal-feedback]"),
  closeModalBtn: document.querySelectorAll("[data-modal-close]"),
  modal1: document.querySelector("[data-modal1]"),
  modal2: document.querySelector("[data-modal2]"),
  modal3: document.querySelector("[data-modal3]"),
  modal4: document.querySelector("[data-modal4]"),
};

refs.signUpModalBtn.addEventListener("click", toggleModal1);
refs.signInModalBtn.addEventListener("click", toggleModal2);
refs.orderModalBtn.addEventListener("click", toggleModal3);
refs.feedbackModalBtn.addEventListener("click", toggleModal4);

for (let i = 0; i < 4; i++) {
  refs.closeModalBtn[i].addEventListener("click", toggleModal);
}

function toggleModal1() {
  refs.modal1.classList.toggle("is-hidden");
}

function toggleModal2() {
  refs.modal2.classList.toggle("is-hidden");
}

function toggleModal3() {
  refs.modal3.classList.toggle("is-hidden");
}

function toggleModal4() {
  refs.modal4.classList.toggle("is-hidden");
}

function toggleModal() {
  if (!refs.modal1.classList.contains("is-hidden")) {
    refs.modal1.classList.toggle("is-hidden");
  } else if (!refs.modal2.classList.contains("is-hidden")) {
    refs.modal2.classList.toggle("is-hidden");
  } else if (!refs.modal3.classList.contains("is-hidden")) {
    refs.modal3.classList.toggle("is-hidden");
  } else if (!refs.modal4.classList.contains("is-hidden")) {
    refs.modal4.classList.toggle("is-hidden");
  }
}
