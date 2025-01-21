window.onload = function () {
    // Get the current URL path
    var path = window.location.pathname;

    // Check if the URL ends with ".html"
    if (path.endsWith(".html")) {
        // Remove the ".html" from the path
        var newPath = path.replace(".html", "");

        // Update the URL without reloading the page
        window.history.pushState({}, "", newPath);
    }
};
