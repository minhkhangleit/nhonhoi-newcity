import sendCustomerInfo from "./firebase-config.js";

const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    sendCustomerInfo({
        username: input.value,
        email: "khang@gmail.com",
        phone: "0985293047"
    }).then(function() {
        console.log("done");
    }).catch(function(e) {
        console.log("err", e)
    })
})

// const dbRef = ref(db);
// get(child(dbRef, `customer`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });