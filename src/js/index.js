const focusTrap = require('focus-trap');

var modaalFocusTrap = null;

$('.image-link').modaal({
    type: 'image',
    after_open: (wrapper) => {
        modaalFocusTrap = focusTrap(wrapper[0]);
        modaalFocusTrap.activate();
    },
    before_close: (wrapper) => {
        modaalFocusTrap.deactivate();
    }
});