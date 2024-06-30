import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["sidebarContainer"];

  toggle(e) {
    e.preventDefault();
    this.switchCurrentState();
  }

  switchCurrentState() {
    const newState = this.element.dataset.expanded === "true" ? "false" : "true";
    this.element.dataset.expanded = newState;
    document.cookie = `sidebar_expanded=${newState}`;
    // document.cookie = `sidebar_expanded=${newState}; path=/`;
  }
}
