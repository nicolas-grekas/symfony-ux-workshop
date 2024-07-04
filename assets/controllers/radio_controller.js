import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['play', 'pause'];

    initialize() {
        this.playing = false;
    }

    toggle(event) {
        event.stopImmediatePropagation();

        if (!this.playing) {
            this.playTarget.classList.toggle('hidden');
            this.pauseTarget.classList.toggle('hidden');
            this.playing = true;

            return;
        }

        if (this.playing) {
            this.playTarget.classList.toggle('hidden');
            this.pauseTarget.classList.toggle('hidden');
            this.playing = false;
        }
    }
}
