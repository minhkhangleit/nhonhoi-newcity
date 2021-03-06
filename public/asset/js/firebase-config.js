// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzX5FP7NNP04JJA6En8-tGaNR3tLJ4Anw",
  authDomain: "nhonhoi-newcity.firebaseapp.com",
  databaseURL: "https://nhonhoi-newcity-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nhonhoi-newcity",
  storageBucket: "nhonhoi-newcity.appspot.com",
  messagingSenderId: "1049688572663",
  appId: "1:1049688572663:web:084a616275991c9a5449f2",
  measurementId: "G-5X0DPNJ0D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

function sendCustomerInfo(customer) {
  let customerId = Date.now().toString(36) + Math.random().toString(36).substr(2);
  let registDate = Date.now(); 
  return set(ref(db, `customer/${customerId}`), {
    id: customerId,
    registDate,
    isdelete: false,
    ...customer,
  })
}

const registerForm = document.getElementById('register');

function registProcessForm(e) {
  if (e.preventDefault) e.preventDefault();
  if (validateregister()) {
    $("#btn-register-submit").attr("disabled", "disabled");
    $("#btn-register-submit").css("pointer-events", "none");
    $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
    var data = $('#register').serializeArray().reduce(function (obj, item) {
      obj[item.name] = item.value;
      return obj;
    }, {});
    sendCustomerInfo(data).then(function () {
      $(".loadx").remove();
      document.getElementById("register").reset();
      $(".register-form .close").trigger("click");
      $(".overlay-dark").after("<div  class='contact-success color-blue'>Th??ng tin c???a qu?? kh??ch ???? ???????c g???i. Ch??ng t??i s??? li??n h??? v???i qu?? kh??ch s???m nh???t! </div>");

    }).catch(function () {
      $(".overlay-dark").after("<div  class='contact-success color-red'>???? x???y ra l???i, qu?? kh??ch vui l??ng th??? l???i sau ??t ph??t ho???c li??n h??? tr???c ti???p ?????n hotline: 0902971833 ????? ???????c h??? tr??? nhanh nh???t.</div>");
      $("#btn-register-submit").removeAttr("disabled");
      $("#btn-register-submit").css("pointer-events", "auto");
    })
    setTimeout(hidemsg, 5e3)
  }
}

if (registerForm.attachEvent) {
  registerForm.attachEvent("submit", registProcessForm);
} else {
  registerForm.addEventListener("submit", registProcessForm);
}