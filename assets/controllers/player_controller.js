import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['play', 'pause'];

    initialize() {
        this.playing = false;
    }

    toggle(event) {
        event.stopImmediatePropagation();

        if (!this.playing) {
            this.audioTarget.play();

            this.playTarget.classList.remove('hidden');
            this.pauseTarget.classList.add('hidden');
            this.playing = true;

            return;
        }

        if (this.playing) {
            this.audioTarget.pause();

            this.playTarget.classList.add('hidden');
            this.pauseTarget.classList.remove('hidden');
            this.playing = false;
        }
    }
}