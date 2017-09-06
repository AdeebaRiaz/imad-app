var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


//creating article one object
var articleOne={
    title:'Home',
    heading:'ArticleOne',
    date:'Sept1,2017 ',
    content:` <p> This is my content.If a child is suddenly unable to cry, cough, or speak, something is probably blocking her airway, and you'll need to help her get it out. She may make odd noises or no sound at all while opening her mouth. Her skin may turn bright red or blue.

If she's coughing or gagging, it means her airway is only partially blocked. If that's the case, let her continue to cough. Coughing is the most effective way to dislodge a blockage.

If the child isn't able to cough up the object, ask someone to call 911 or the local emergency number as you begin back blows and abdominal thrusts (see step 2, below)
If you're alone with the child, give two minutes of care, then call 911</p>`
} ;

var htmlTemplate='
<html>
<head>
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
  <div class="container"> 
  <div>
<a href="/">Home</a>
</div>
<hr/>

<h3>  ${heading}  </h3>
<div> ${date}</div>
<div>
${content}
</div>

</div>
</body>

</html>





';
    
    
    
    



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/article-one', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));

});

app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
        res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));

});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
