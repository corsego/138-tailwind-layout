import { Controller } from "@hotwired/stimulus"
// https://github.com/stimulus-use/stimulus-use/blob/main/docs/use-click-outside.md
import { useClickOutside } from 'stimulus-use'

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["content"]
  connect() {
    useClickOutside(this)
    // this.close()
  }

  clickOutside(event) {
    this.close()
  }

  closeWithKeyboard(event) {
    if (event.key === "Escape") {
      this.close()
    }
  }

  closeOnBigScreen(event) {
    if (window.innerWidth > 768) {
      this.close()
      console.log('closeOnBigScreen')
    }
  }

  toggle() {
    if (this.contentTarget.classList.contains('hidden')) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    this.contentTarget.classList.remove('hidden')
    let main = document.querySelector('main')
    main.classList.add('blur')
    document.body.classList.add('overflow-hidden')
    // main.classList.add('hidden')
  }

  close() {
    this.contentTarget.classList.add('hidden')
    let main = document.querySelector('main')
    main.classList.remove('blur')
    document.body.classList.remove('overflow-hidden')
    // main.classList.remove('hidden')
  }

}
