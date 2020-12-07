<?php
function redirectURL($url) {
    header("Location:{$url}");
}


function phpAlert($msg, $url) {
    echo '<script type="text/javascript">alert("' . $msg . '");window.location.href="' . $url . '"</script>';
}


function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
        ');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}
