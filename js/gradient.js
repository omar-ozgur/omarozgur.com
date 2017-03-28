// Target to give background to
var $div = document.getElementById("gradient");

// RGB values of the gradients
var gradients = [
  { start: [3, 169, 244], stop: [30, 41, 58] },
  { start: [255, 207, 160], stop: [234, 92, 68] },
  { start: [212, 121, 121], stop: [130, 105, 151] }
];

// How long for each transition
var transition_time = 10;

// Where we are in the gradients array
var currentIndex = 0;

// What index of the gradients array is next
var nextIndex = 1;

// Steps counter
var steps_count = 0;

// Total amount of steps
var steps_total = Math.round(transition_time * 60);

// How much to alter each RGB value
var rgb_steps = {
  start: [0, 0, 0],
  stop: [0, 0, 0]
};

// The current RGB values, which get altered by RGB steps on each interval
var rgb_values = {
  start: [0, 0, 0],
  stop: [0, 0, 0]
};

// For looping through adding styles
var prefixes = ["-webkit-","-moz-","-o-","-ms-",""];

// Short cut to actually adding styles
var div_style = $div.style;
var color1, color2;

// Sets next current and next index of gradients array
function set_next(num) {
  return (num + 1 < gradients.length) ? num + 1 : 0;
}

// Work out how big each RGB step is
function calc_step_size(a,b) {
  return (a - b) / steps_total;
}

// Populate the rgb_values and rgb_steps objects
function calc_steps() {
  for (var key in rgb_values) {
    if (rgb_values.hasOwnProperty(key)) {
      for(var i = 0; i < 3; i++) {
        rgb_values[key][i] = gradients[currentIndex][key][i];
        rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i],rgb_values[key][i]);
      }
    }
  }
}

// Update current RGB values, and update DOM element with new CSS background
function updateGradient(){
  
  // Update the current RGB values
  for (var key in rgb_values) {
    if (rgb_values.hasOwnProperty(key)) {
      for(var i = 0; i < 3; i++) {
        rgb_values[key][i] += rgb_steps[key][i];
      }
    }
  }

  // Generate CSS RGB values
  var t_color1 = "rgb(" + (rgb_values.start[0] | 0) + "," + (rgb_values.start[1] | 0) + "," + (rgb_values.start[2] | 0) + ")";
  var t_color2 = "rgb(" + (rgb_values.stop[0] | 0) + "," + (rgb_values.stop[1] | 0) + "," + (rgb_values.stop[2] | 0) + ")";

  // Check if anything changed on this interation
  if (t_color1 != color1 || t_color2 != color2) {

    // Update color strings
    color1 = t_color1;
    color2 = t_color2;

    // Update DOM element style attribute
    div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from(" + color1 + "), to(" + color2 + "))";
    for (var i = 0; i < 4; i++) {
      div_style.backgroundImage = prefixes[i] + "linear-gradient(45deg, " + color1 + ", " + color2 + ")";
    }
  }

  // Increment steps
  steps_count++;

  // Check if too many steps were completed
  if (steps_count > steps_total) {

    // Reset steps count
    steps_count = 0;

    // Set new indices
    currentIndex = set_next(currentIndex);
    nextIndex = set_next(nextIndex);

    // Calculate steps
    calc_steps();
  }

  if (div_style.backgroundImage.indexOf("gradient") != -1) {
    window.requestAnimationFrame(updateGradient)
  }
}

// Initial step calculation
calc_steps();

// Begin animation
window.requestAnimationFrame(updateGradient);
