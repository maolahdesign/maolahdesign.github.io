let parent_DOM = document.getElementById("content");
var prev_pto = 0;
var next_pto = 0;
var elements = document.querySelectorAll('#content img');
var all_photo = [];
Array.prototype.forEach.call(elements, function (el, i) {
    all_photo.push(el.src);
});
var $ = function (selector) {
    return document.querySelector(selector);
};
var images = $('#content').getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
    var image = images[i];
    image.onclick = show_box;
}

$('.close').onclick = close_box;
$('.prev').onclick = prev_photo;
$('.next').onclick = next_photo;

function show_box() {
    var img_src = this.src;
    make_photo(img_src);
    $('#lightbox').style.display = "block";
}

function make_photo(image) {
    $('#lightbox img').setAttribute('src', "");
    $('#lightbox img').setAttribute('src', image);
    for (var key in all_photo) {
        if (all_photo[key] == image) set_loop_value(parseInt(key));
    }
}

function set_loop_value(image_id) {
    prev_pto = image_id - 1;
    next_pto = image_id + 1;
    if (prev_pto < 0) prev_pto = all_photo.length - 1;
    if (next_pto > all_photo.length - 1) next_pto = 0;
}

function close_box() {
    $('#lightbox').style.display = "none";
    $('#lightbox img').setAttribute('src', "");
}

function prev_photo() {
    make_photo(all_photo[prev_pto]);
}

function next_photo() {
    make_photo(all_photo[next_pto]);
}