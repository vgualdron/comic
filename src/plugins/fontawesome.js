import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faHome,
    faCaretRight,
    faCaretLeft,
    faBackwardStep,
    faForwardStep,
    faShuffle,
    faFlagCheckered
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHome);
library.add(faCaretRight);
library.add(faCaretLeft);
library.add(faBackwardStep);
library.add(faForwardStep);
library.add(faShuffle);
library.add(faFlagCheckered);

Vue.component('font-awesome-icon', FontAwesomeIcon);