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
var customerData = [];

const tableBody = document.getElementById('table-body');
console.log(tableBody)
function updateCustomer(customer) {
    return set(ref(db, `customer/${customer.id}`), {
        ...customer,
    })
}

const dbRef = ref(db);
get(child(dbRef, `customer`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
        converData(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});

function converData(firebaseData) {
    for (var key in firebaseData) {
        if (firebaseData.hasOwnProperty(key)) {
            customerData.push(firebaseData[key]);
        }
    }
    customerData.sort().reverse();
    tableBody.innerHTML = renderTableBody(customerData);
}

function renderTableBody(data) {
    return data.reduce(function (html, customer, index) {
        const registDate = new Date(customer.registDate);
        
        return html +
            `<tr>
            <td>${index + 1}</td>
            <td>${registDate.toLocaleString()}</td>
            <td>${customer.nameregister}</td>
            <td>${customer.emailregister}</td>
            <td>${customer.phoneregister}</td>
            <td>${customer.commentregister}</td>
        </tr>`;
    }, '');
}

