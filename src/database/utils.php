<?php
function redirectURL($url) {
    echo header("Location:{$url}");
}
