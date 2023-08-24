const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCu0R4-pT3MvN37g9FJCaTNCpcxwZqG7HU";

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API
}

form.addEventListener("submit", searchAddressHandler);
