exports.getDate = function () {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    return today.toLocaleDateString("eb-US", options);
}