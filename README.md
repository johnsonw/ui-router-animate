# UI Router Animate

## Overview
Learn how to add animations and a spinner to your ui router transitions. This
repo contains a small demo illustrating how to add fade in and fade out
effects to your transitions.

Adding an animation effect to basic transitions is fairly easy to do,
but there are a few important details you should know. Adding animations to
a transition containing resolves requires a little more work. This demo
will cover the following:

* Fade out the `from` content and fade in the `to` content.
* Prevent the `to` transition from occurring until the from transition finishes
its fade out.
* Only display one ui-view at a time during a transition instead of showing
a ui-view for the `from` and `to` states at the same time.
* Display a spinner during the transition.
* Fade out the `from` transition before the resolves fetch. This makes the
transition look very clean when resolves are involved.
* Animate nested state transitions and display the spinner.
