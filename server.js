var fs = require("fs");
const http = require('http')  
var express = require('express');
var app = express();
var request = require('request');
 var https = require ('https');
  var _ = require('underscore');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var decodedImage='';

function decode(callback)
{

fs.readFile('Mohammad_1.jpg', function(err, data) {
  if (err) throw err;

  // Encode to base64
  var encodedImage = new Buffer(data, 'binary').toString('base64');

  // Decode from base64
  decodedImage = new Buffer(encodedImage, 'base64').toString('binary');
  //console.log(encodedImage , decodedImage);
  callback(decodedImage);
});
}

var accessToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFCbmZpRy1tQTZOVGFlN0NkV1c3UWZkQk9fUkRwSkNZd2daRW9ibUhxOUJ5bDNWN3ltckotNmdGbUxnM29Zc0pJVTdQRWhRcDJRa0xWTjl0TFlxcElUSGxCUkFyMjVVdWRHcTMtdHhpUUpHOENBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiOUZYRHBiZk1GVDJTdlF1WGg4NDZZVHdFSUJ3Iiwia2lkIjoiOUZYRHBiZk1GVDJTdlF1WGg4NDZZVHdFSUJ3In0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNTk1YmU4ZC1iMzA2LTQ1ZjQtODA2NC05ZTViODJmYmU1MmIvIiwiaWF0IjoxNDk5MTgyNTMwLCJuYmYiOjE0OTkxODI1MzAsImV4cCI6MTQ5OTE4NjQzMCwiYWNyIjoiMSIsImFpbyI6IlkyWmdZSkR2MHZmSXJsUXliSlZzY09DK1hjZi8vK3NCdThhNW5qOTVqbjI3djBGNStWc0EiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlNoYWhuYXdheiBBbGFtIiwiZ2l2ZW5fbmFtZSI6Ik1vaGFtbWFkIiwiaXBhZGRyIjoiMTM0LjIyNi4yMTQuMjIyIiwibmFtZSI6Ik1vaGFtbWFkIFNoYWhuYXdheiBBbGFtIiwib2lkIjoiYzMzYTIxZWMtNWZmOS00MTE1LTgzODMtZDg0NjI0ZmQzYjUwIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTM3ODE1ODA2NzgtNjg5MjYwNDM4LTEyMDg0Mjg4NzItMjM4Mjk3IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDM3RkZFQTBGRjgxMUIiLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZSBGaWxlcy5SZWFkV3JpdGUuQWxsIE1haWwuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgUGVvcGxlLlJlYWQgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUYXNrcy5SZWFkV3JpdGUgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIiwic2lnbmluX3N0YXRlIjpbImlua25vd25udHdrIl0sInN1YiI6IlNPMkFjc1UtTmk4Q1owa1ptc08xY3V0V3hyWVdoaC0wS3FPSjlwVzA3cmsiLCJ0aWQiOiJkNTk1YmU4ZC1iMzA2LTQ1ZjQtODA2NC05ZTViODJmYmU1MmIiLCJ1bmlxdWVfbmFtZSI6IlNIQUhOQVdNQHRjZC5pZSIsInVwbiI6IlNIQUhOQVdNQHRjZC5pZSIsInV0aSI6IkVJb0lvWVVPTVUtZlZwM0s3Z2tKQUEiLCJ2ZXIiOiIxLjAifQ.GM2xHI5riuHjEXUJiMV17g6w7XMMjuZTWZG7U2o1fXLGercSJKtZ0URgKS1UK7knKUAd76s7S77syOhC9u-M6FujjR0u0XSp_-La0rltYNq_TpMzfqZKuFWtqkiEBZok-xMBMvTYbNP99uIaRh8AuSLzOIbwp0ZpUaFo9MU0LANEUj8WBh6CXqigcD0-G3dEyBZKRtiBTaqdM8smgJlq45_JL4NiQBw_PMCU3z2GgemaA2AdeRmP0azSSN7plK6pf-RX9mwO_6_1xQcUzQPV2YdHBGmP4PTvJxvrmERfzz1FRlIPidak3HRvWFnFhsHJrhGChIDUmAaEH9OpwLSgLQ';

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
                console.log(partData ,'part id', partId);
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
            // "<html>" +
            // "<head>" +
            // "   <title>Embedded HTML</title>" +
            // "</head>" +
            // "<body>" +
            // "    <h1>This is a screen grab of a web page</h1>" +
            // "    <p>" +
            // "    Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            // "    Nullam vehicula magna quis mauris accumsan, nec imperdiet nisi tempus. " +
            // "    Suspendisse potenti. Duis vel nulla sit amet turpis venenatis elementum. " +
            // "    Cras laoreet quis nisi et sagittis. Donec euismod at tortor ut porta. " +
            // "    Duis libero urna, viverra idaliquam in, ornare sed orci. " +
            // "    Pellentesque condimentum gravida felis, sed pulvinar erat suscipit sit amet. Nulla id felis quis " +
            // "    sem blandit dapibus. " +
            // "    Utviverra auctor nisi ac egestas. " +
            // "    Quisque ac neque nec velit fringilla sagittis porttitor sit amet quam." +
            // "    </p>" +
            // "</body>" +
            // "</html>";
            '';
            decode(function(image){

            

        createPage(accessToken, {
            'Presentation': {
                body: htmlPayload,
                contentType: 'text/html'
            },
            'HtmlForScreenshot': {
                body: image,
                contentType: 'image/jpeg'
            }
        }, callback, true);
        });
    
    };
    

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