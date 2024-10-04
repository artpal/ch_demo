function artpal_demo() {
    var script = document.createElement('script');
    script.src = "https://code.jquery.com/ui/1.14.0/jquery-ui.js";
    script.type = "text/javascript";
    script.onload = function() {
        jQuery('.second-level-menu, .third-level-menu').each(function() { jQuery(this).sortable() });
    };
    document.head.appendChild(script);
    
}
artpal_demo();
