var githubUsername = "ryanmora23";
var url = "https://api.github.com/users/" + githubUsername;
$.get(url).then(function(data) {
    drawProfile(data);
})

function drawProfile(data) {
    document.body.innerHTML = [
        '<h1>',
        data.name,
        '</h1>',
        '<h2 class="link"> blog:',
        data.blog,
        '</h2>',
        '<h2> location:',
        data.location,
        '</h2>',
        '<h2 class="email"> email:',
        data.email,
        '</h2>',
        '<h2 class="link">',
        data.avatar_url,
        '</h2>',
        '<h2 class="link">',
        data.html_url,
        '</h2>'
    ].join('')
}
