var box = $("#writing-box");
var bar = $("#bar");
var stats = $("#stats");

var time_left = 5.0;
var count_down;

function resetTimer() {
    // 1. Clear any old timer
    clearInterval(count_down);
    time_left = 5.0;

    // Reset opacity to full when the user starts typing again
    box.css("opacity", 1);

    // 2. Start the countDown
    count_down = setInterval(function() {
        time_left -= 0.1;

        // 3. Updating the UI
        bar.css("width", (time_left / 5) * 100 + "%");
        stats.text(time_left.toFixed(1) + "s remaining");


        // Fading Logic: Only starts when less than 2 seconds remain
        if (time_left <= 2.0) {
            box.css("opacity", time_left / 2);
        } else {
            box.css("opacity", 1);
        }

        // 4. Check for death Condition
        if (time_left <= 0) {
            clearInterval(count_down);
            box.val(""); // Deletes the text
            box.css("opacity", 1); // Reset opacity so they can see "Time's Up"
            stats.text("Time's Up");
        }
    }, 100);
}

// 5. The Trigger
box.on("input", resetTimer);