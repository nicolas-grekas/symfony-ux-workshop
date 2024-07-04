import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static values = {source: String, stream: String};

    static targets = ['play', 'pause'];

    initialize() {
        this.playing = false;
    }

    toggle(event) {
        event.stopImmediatePropagation();

        if (!this.playing) {
            this.dispatch('playRadio', {
                detail: {
                    source: this.sourceValue,
                    stream: this.streamValue
                }
            });

            this.playTarget.classList.toggle('hidden');
            this.pauseTarget.classList.toggle('hidden');
            this.playing = true;

            return;
        }

        if (this.playing) {
            this.dispatch('pauseRadio');

            this.playTarget.classList.toggle('hidden');
            this.pauseTarget.classList.toggle('hidden');
            this.playing = false;
        }
    }
}
