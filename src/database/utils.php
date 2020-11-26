<?php
function redirectURL($url) {
    header("Location:{$url}");
}


function phpAlert($msg, $url) {
    echo '<script type="text/javascript">alert("' . $msg . '");window.location.href="' . $url . '"</script>';
}
