import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="calculator"
export default class extends Controller {
  static targets = ["resultat"];

  connect() {
    console.log('hello')
  }

  handleClick(event) {
    if (!isNaN(event.target.dataset.value)) {
      let value = parseInt(event.target.dataset.value);

      let result = this.resultatTarget.value;
      console.log(value);
      console.log(result);

      if ( event.target.dataset.value === "C" ) {
        this.resultatTarget.textContent = "B";
      } else if ( event.target.dataset.value === "=" ) {
        let result = eval(this.resultatTarget.value);
        this.resultatTarget.value = result;
      } else {
        this.resultatTarget.value = result + value;
      }
    }
  }
}
