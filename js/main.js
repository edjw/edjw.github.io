if (document.getElementById("scroll_indicator")) {
    window.onscroll = function () {
        moveScrollIndicator()
    };

    function moveScrollIndicator() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scroll_indicator").style.width = scrolled + "%";
    }
}
