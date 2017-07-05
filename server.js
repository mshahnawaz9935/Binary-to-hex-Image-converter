var fs = require("fs");
const http = require('http')  
var express = require('express');
var app = express();
var request = require('request');
 var https = require ('https');
  var _ = require('underscore');
  var base64Img = require('base64-img');

var token ='';
var encodedImage = [];
var x=0;
var accessToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFCbmZpRy1tQTZOVGFlN0NkV1c3UWZkS0JHclFzV2dhVGZPS0ZyQmFCcktvNllSWUNleW9KdVR1T1VhOHNxTjdaakVZQzQzSGM0TFY5VUpTTkQ1cWdsYzdkVzhxOGZKc3Z4N3VLQ1Z2MlBWbVNBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiOUZYRHBiZk1GVDJTdlF1WGg4NDZZVHdFSUJ3Iiwia2lkIjoiOUZYRHBiZk1GVDJTdlF1WGg4NDZZVHdFSUJ3In0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNTk1YmU4ZC1iMzA2LTQ1ZjQtODA2NC05ZTViODJmYmU1MmIvIiwiaWF0IjoxNDk5MjcyMDYxLCJuYmYiOjE0OTkyNzIwNjEsImV4cCI6MTQ5OTI3NTk2MSwiYWNyIjoiMSIsImFpbyI6IlkyWmdZQkNXbEQzSHV1N0d2WVNZVTBVSHBlMnNlV3lGWmxhbDJuN2YrcUR5MmZYNm5uOEEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlNoYWhuYXdheiBBbGFtIiwiZ2l2ZW5fbmFtZSI6Ik1vaGFtbWFkIiwiaXBhZGRyIjoiMTM0LjIyNi4yMTQuMjIyIiwibmFtZSI6Ik1vaGFtbWFkIFNoYWhuYXdheiBBbGFtIiwib2lkIjoiYzMzYTIxZWMtNWZmOS00MTE1LTgzODMtZDg0NjI0ZmQzYjUwIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTM3ODE1ODA2NzgtNjg5MjYwNDM4LTEyMDg0Mjg4NzItMjM4Mjk3IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDM3RkZFQTBGRjgxMUIiLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZSBGaWxlcy5SZWFkV3JpdGUuQWxsIE1haWwuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgUGVvcGxlLlJlYWQgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUYXNrcy5SZWFkV3JpdGUgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIiwic2lnbmluX3N0YXRlIjpbImlua25vd25udHdrIl0sInN1YiI6IlNPMkFjc1UtTmk4Q1owa1ptc08xY3V0V3hyWVdoaC0wS3FPSjlwVzA3cmsiLCJ0aWQiOiJkNTk1YmU4ZC1iMzA2LTQ1ZjQtODA2NC05ZTViODJmYmU1MmIiLCJ1bmlxdWVfbmFtZSI6IlNIQUhOQVdNQHRjZC5pZSIsInVwbiI6IlNIQUhOQVdNQHRjZC5pZSIsInV0aSI6IlRIQ2l5Z0ZtREVHZzR6LTdyLW9ZQUEiLCJ2ZXIiOiIxLjAifQ.Ef5HDqrxlYBaueRR6PUNSgv9gCEcrIhExn09_n2bB1DC7KHcrT1fMg2QsHMHUoTq5kcQJ80dvqLHg-_qsG3JlQOq21JCRW8moF7A13ncnU_73Ma0FFJ-gIBkuV0d9e57EzcYgzjH21zjdZZaJ-kVaJ9d8DJMU73W8I7gSVYkIMuie3BclFTf2SQbbDZzq9eRQOtVASpmSB9lIu7PL2VXZ_0l-0lBcU-qJNmytoavfnSaEwJ7hOjlUyjCbgTtzA34ci1BeHm-FdX890FJzNYmNcT8dvKm2pOlUHoNnHc58O74DWZEWNe4FOqMoMyYfx72tvsH3DCkZgQPPaz5q0-FHw';

function getToken (callback)
{
    var token = '';
    var favourites ={};

   var qs = require("querystring");
   var request = require('request');

    var url = '';
    var queryObject =  qs.stringify({ grant_type: 'client_credentials',
    client_id: '150b9f0f-ab92-4565-a38e-4f28f3deb136',
    client_secret: 'Q1a09Fx13lEcU/RwM8AsVsBolhP/QRvGNJGqzLupivM=',
    resource: '150b9f0f-ab92-4565-a38e-4f28f3deb136' });
    var favourites = {};    
    request({
        url: "https://login.microsoftonline.com/3105192b-76b3-4f26-816e-9b7e773ac262/oauth2/token",
        method: "POST",
        body: queryObject,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",  // <--Very important!!!
        },
        }, function (error, response){
            // console.log (JSON.parse(response.body).access_token);   
             token =  JSON.parse(response.body).access_token;    
             callback(token);
        });
}


    getToken(function (t)
    {
        console.log(t);
        token = t;
        //res.json('ToKEN IS' + t);
    })



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var decodedImage='';

var url = 'http://kdeg-vm-43.scss.tcd.ie/cjfallon/chp04/imgs-694.jpg';
var dest = 'file.jpg';
var buf = new Buffer(1024);
function writetofile()
{
var file = fs.createWriteStream("file.jpg");
var request = http.get(url, function(response) {
  response.pipe(file);
});
 fs.open('file.jpg', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // Close the opened file.
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("File closed successfully.");
      });
   });
});
}

writetofile();



function decode(callback)
{

fs.readFile('file.jpg', function(err, data) {
  if (err) throw err;
  console.log('raw data is' , data);
  // Encode to base64
         encodedImage[x] = new Buffer(data, 'binary').toString('base64');

  // Decode from base64
  decodedImage = new Buffer(encodedImage, 'base64').toString('binary');
  console.log(encodedImage);
  //console.log(encodedImage , decodedImage);
  callback(encodedImage[0]);
  x++;
    });
}


function aboutme(token, callback)
{
    var options = {
    host: 'graph.microsoft.com',
    path: '/v1.0/me',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  };

  https.get(options, function (response) {
    var body = '';
    response.on('data', function (d) {
      body += d;
    });
    response.on('end', function () {
      var error;
      if (response.statusCode === 200) {
                console.log(body);
                console.log(JSON.parse(body).displayName); 
           //     res.json('Welcome ' + JSON.parse(body).displayName);
        callback(JSON.parse(body).userPrincipalName);

      } else {
        error = new Error();
        error.code = response.statusCode;
        error.message = response.statusMessage;
     
        // The error body sometimes includes an empty space
        // before the first character, remove it or it causes an error.
        body = body.trim();
        error.innerError = JSON.parse(body).error;
        console.log(error, null);
           if(error.code === 401 &&
      error.innerError.code === 'InvalidAuthenticationToken' ||
      error.innerError.message === 'Access token has expired.')
      {     
         console.log('Error occured. Token invalid');
          
        }
      }
    });
  }).on('error', function (e) {
    console.log((e, null));
  });

}

function createPage(accessToken, payload, callback, multipart) {

        console.log('here');
        var options = {
            url: 'https://graph.microsoft.com/v1.0/me/onenote/pages',
            headers: {'Authorization': 'Bearer ' + accessToken}
        };
        // Build simple request
        if (!multipart) {
            options.headers['Content-Type'] = 'text/html';
            options.body = payload;
        }
        var r = request.post(options, callback);
        // Build multi-part request
        if (multipart) {
            var CRLF = '\r\n';
            var form = r.form(); // FormData instance
            _.each(payload, function (partData, partId) {
                form.append(partId, partData.body, {
                    // Use custom multi-part header
                    header: CRLF +
                        '--' + form.getBoundary() + CRLF +
                        'Content-Disposition: form-data; name=\"' + partId + '\"' + CRLF +
                        'Content-Type: ' + partData.contentType + CRLF + CRLF
                });
                console.log(form);
            });
        }
    }



 function dateTimeNowISO() {
        return new Date().toISOString();
    }


app.get('/details', function (req, res) {

  aboutme(accessToken , function(name)
  {
      res.end('<h1>User Logged in is '+ name + '</h1>');
  });
});

    var createResultCallback = function (error, httpResponse, body) {
        if (error) {
            return res.render('error', {
                message: 'HTTP Error',
                error: {details: JSON.stringify(error, null, 2)}
            });
        }

        // Parse the body since it is a JSON response
        var parsedBody;
        try {
            parsedBody = JSON.parse(body);
        } catch (e) {
            parsedBody = {};
        }
        // Get the submitted resource url from the JSON response
        var resourceUrl = parsedBody['links'] ? parsedBody['links']['oneNoteWebUrl']['href'] : null;

        if (resourceUrl) {
            console.log('result', {
                title: 'OneNote API Result',
                body: body,
                resourceUrl: resourceUrl
            });
        } else {
            console.log('error', {
                message: 'OneNote API Error',
                error: {status: httpResponse.statusCode, details: body}
            });
        }
    };
    function createPageWithScreenshotFromHtml(accessToken, callback) {
        var htmlPayload =
            "<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
            "    <title>A page created with a screenshot of HTML on it (Node.js Sample)</title>" +
            "    <meta name=\"created\" content=\"" + dateTimeNowISO() + "\"/>" +
            "</head>" +
            "<body>" +
            "    <img src=\"name:HtmlForScreenshot\" />" +
            "</body>" +
            "</html>",

            htmlForScreenshot =
            "<html>" +
            "<head>" +
            "   <title>Embedded HTML</title>" +
            "</head>" +
            "<body>" +
            "    <h1>This is a screen grab of a web page</h1>" +
            "    <p>" +
            "    Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            "    Nullam vehicula magna quis mauris accumsan, nec imperdiet nisi tempus. " +
            "    Suspendisse potenti. Duis vel nulla sit amet turpis venenatis elementum. " +
            "    Cras laoreet quis nisi et sagittis. Donec euismod at tortor ut porta. " +
            "    Duis libero urna, viverra idaliquam in, ornare sed orci. " +
            "    Pellentesque condimentum gravida felis, sed pulvinar erat suscipit sit amet. Nulla id felis quis " +
            "    sem blandit dapibus. " +
            "    Utviverra auctor nisi ac egestas. " +
            "    Quisque ac neque nec velit fringilla sagittis porttitor sit amet quam." +
            "    </p><img src='http://kdeg-vm-43.scss.tcd.ie/cjfallon/chp04/imgs-431.jpg' />" +
            "</body>" +
            "</html>";
         
            decode(function(image){

            

        createPage(accessToken, {
            'Presentation': {
                body:   "<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
            "    <title>A page created with a screenshot of HTML on it (Node.js Sample)</title>" +
            "    <meta name=\"created\" content=\"" + dateTimeNowISO() + "\"/>" +
            "</head>" +
            "<body>" +
            "    <img src=\"name:HtmlForScreenshot\" /><p>sdsd <img src='data:image/jpeg;base64,"+image + "' /></p>" +
            "</body>" +
            "</html>",
                contentType: 'text/html'
            },
            'HtmlForScreenshot': {
                body: image,
                contentType: 'image/jpeg'
            }
        }, callback, true);
        });
    
    };
var favourites = {};
app.get('/posts', (req, res) => {

console.log('Post token ' + token);
var url;
var topic = req.query.topic;
var chapter = req.query.chapter;
var moduleid = '5922b41f74748a1b1c8e440e';
var modulename = 'Geography';
var articleid = '864fd1a3aaf64158a8394f617a8b40cb';





    var headers = {
        "content-type": "application/json",
        Authorization: 'Bearer ' + token 
    }
    var options = {
         url:'http://services.almanac-learning.com/personalised-composition-service/composer/students/593ec91f27d6e412505c1d17/instances/5922b41f74748a1b1c8e440e/articles/' + articleid + '/',
        method: 'GET',
        headers: headers,
    }
    console.log(options.url);
 request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
       //         console.log("post query" + response.body);
                favourites = response.body;
       console.log('response article' , response.body , favourites.sections);
            if(favourites.sections != undefined)
            {
        //    console.log(favourites.sections.length);
            for(var i=0; i< favourites.sections.length; i++) 
            {  
                    url = url + " <h3>Images from section "+ (i+1) + " are as under</h3>";
                    url = url + "<h4>" +  favourites.sections[i].text.text + "</h4>";
                    try{
                        var image_len = favourites.sections[i].images.length;
                    }
                    catch(err)
                    {    continue;  }
                    finally { }
                    for(var j=0; j< image_len;j++)
                    {
                 //     console.log('Image url is ',favourites.sections[i].images[j].url);
                    url = url+ "<p><img src=" + "\"" + favourites.sections[i].images[j].url + "\"" + "/><br>"+
                    favourites.sections[i].images[j].caption +  "</p><p>" + favourites.sections[i].images[j].attribution
                    + "</p>" ;
                    }
                }
               }
               console.log('Url is ' + url);
            res.send(response.body);
        }
        else console.log('nuffing2 instances' , error ,response.statusCode, response.headers);
    });
});
    

app.get('/writenote', function (req, res) {

     createPageWithScreenshotFromHtml(accessToken , createResultCallback);
   
    res.end('wrote');
  

   
});

const port = process.env.PORT || '3000';
app.get('/', function (req, res) {

  
      res.end('<h1>Node Server Running on 3000</h1>' + port);
});

app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));