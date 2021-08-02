console.log("hello");

const addLunchForm = document.querySelector("#addLunch");

addLunchForm.addEventListener("submit", event => {
  event.preventDefault();
  console.log("form submitted!");
  fetch("/api/lunches", {
    method: "POST",
    body: JSON.stringify({
        description:document.querySelector("#lunchDescription").value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      location.reload();
    });
});
