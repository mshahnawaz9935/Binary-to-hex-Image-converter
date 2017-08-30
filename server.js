var fs = require("fs");
const http = require('http')  
var express = require('express');
var app = express();
var request = require('request');
 var https = require ('https');
  var _ = require('underscore');
  var base64Img = require('base64-img');
  var sha256 = require('sha256');
  var async = require('async');

var token ='';

var key = '?sv=2016-05-31&ss=bfqt&srt=sco&sp=rwdlacup&se=2017-07-21T18:50:54Z&st=2017-07-21T10:50:54Z&spr=https&sig=76yjezn%2BW6MBbicrncSi76II%2FZ2q9KYHaV3Wij7v3WA%3D';
var x=0;

var accessToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFBOWtUa2xoVnk3U0pUR0F6Ui1wMUJjcFR4UURtTVpuNGEzb3hBT2JzUFppNXU4S1FITmp3TzdlVVd3RDhPbUVOeG9qQ2g3UFptbUhrWjdmVEpmbGNBWFk1M0Z5Q1VXOXpiV3cyWjhtUzBOS0NBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiVldWSWMxV0QxVGtzYmIzMDFzYXNNNWtPcTVRIiwia2lkIjoiVldWSWMxV0QxVGtzYmIzMDFzYXNNNWtPcTVRIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNTk1YmU4ZC1iMzA2LTQ1ZjQtODA2NC05ZTViODJmYmU1MmIvIiwiaWF0IjoxNTA0MTEyODg2LCJuYmYiOjE1MDQxMTI4ODYsImV4cCI6MTUwNDExNjc4NiwiYWNyIjoiMSIsImFpbyI6IlkyRmdZSWlYK3pWNVc0V1YwNzZkN1U4bjhydmZWUkt0ZXM5K3R5VTFmM2JTNGZaSjNxSUEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlNoYWhuYXdheiBBbGFtIiwiZ2l2ZW5fbmFtZSI6Ik1vaGFtbWFkIiwiaXBhZGRyIjoiMTM0LjIyNi4yMTQuMjIyIiwibmFtZSI6Ik1vaGFtbWFkIFNoYWhuYXdheiBBbGFtIiwib2lkIjoiYzMzYTIxZWMtNWZmOS00MTE1LTgzODMtZDg0NjI0ZmQzYjUwIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTM3ODE1ODA2NzgtNjg5MjYwNDM4LTEyMDg0Mjg4NzItMjM4Mjk3IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDM3RkZFQTBGRjgxMUIiLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZSBGaWxlcy5SZWFkV3JpdGUuQWxsIE1haWwuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgUGVvcGxlLlJlYWQgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUYXNrcy5SZWFkV3JpdGUgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIiwic2lnbmluX3N0YXRlIjpbImlua25vd25udHdrIl0sInN1YiI6IlNPMkFjc1UtTmk4Q1owa1ptc08xY3V0V3hyWVdoaC0wS3FPSjlwVzA3cmsiLCJ0aWQiOiJkNTk1YmU4ZC1iMzA2LTQ1ZjQtODA2NC05ZTViODJmYmU1MmIiLCJ1bmlxdWVfbmFtZSI6IlNIQUhOQVdNQHRjZC5pZSIsInVwbiI6IlNIQUhOQVdNQHRjZC5pZSIsInV0aSI6IkUtZHgxdENoUVVXN3ZoUDJpc3NRQUEiLCJ2ZXIiOiIxLjAifQ.reNzmtI1zS0z8ly5CBK0OFvoyoPPfXvGb-1AQrcXv91ZztRgM2zirkekp31vgHvxIzvs5Ex-B6haFprDr1ID6jmo2ferd4Sa84z6lnbMAs2tc4UK-fhVabHgGhvGY7wFFJEBw3afZ2v0Q35Jup7r45MlHgaDXcvo2UtPEfxL0ZS3WxZDFxFhJgs9Bjj5fUTr2PW1CFXuqvsXudO_mEtjNvh_SF3dU_X5_VcKebA_3SsVRbCLb0cgFnSgcCPWa2S4yPZNq8DDZLWeH-ZjF9Df8WDbejEAgmpgwVms1d0UXLqIdZy8DUI6TXJrNXjoUi02SxfPC8LmxTq6IaYyQS7gmQ';
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

var dest = 'file.jpg';
var buf = new Buffer(1024);
function writetofile(filename, url,callback)
{
var file = fs.createWriteStream(filename + ".jpg");
var client = http;
// You can use url.protocol as well 
if (url.toString().indexOf("https") === 0){
            client = https;
}

var request = client.get(url, function(response) {
  response.pipe(file);
  file.on('close', function () {
  console.log('There will be no more data.');
     callback(filename);
});

  
});

}



function decode(filename , callback)
{

fs.readFile(filename+'.jpg', function(err, data) {
  if (err) throw err;
  console.log('raw data is' , data);
  // Encode to base64
       var encodedImage = new Buffer(data, 'binary').toString('base64');

  // Decode from base64
  decodedImage = new Buffer(encodedImage, 'base64').toString('binary');
 // console.log(encodedImage);
  //console.log(encodedImage , decodedImage);
  
  callback(encodedImage);
  //deletefile(filename);
    });
        
 
}

function deletefile(filename)
{
     fs.unlink(filename + '.jpg', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
})
}


app.get('/validatemail', (req, res) => {

    var email = req.query.id;
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
   var k=  re.test(email);
   if(k == true)
   res.json('email correct');
   else
   res.json(sha256());

});


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
            // console.log('result', {
            //     title: 'OneNote API Result',
            //     body: body,
            //     resourceUrl: resourceUrl
            // });
            console.log('result');
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
         
 
            writetofile('xyz', 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/07e72df0-2c01-11e7-aec8-676aa0a8f3e0'+ key, function (data)
        {

            decode(data, function(image){

            

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
        });

    
    }

function encoder(url , callback)
{
  var request = require('request').defaults({ encoding: null });

request.get(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        data = new Buffer(body).toString('base64');
        console.log('Dat Length' ,data.length);
        console.log((data.toString().length));    
        console.log(url);
        callback(data);
    }
});
}
 //createPageWithScreenshotFromHtml2(accessToken , createResultCallback);
      function createPageWithScreenshotFromHtml2(accessToken, callback) {


var fileurl = [
//     'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/6a251030-3bb6-11e7-9286-c7bc5b9945d0.jpg?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/373c3110-2beb-11e7-aec8-676aa0a8f3e0?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/f0cf91d0-30d2-11e7-932e-75387e89fb02?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

//  'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/f13ad6c0-30d2-11e7-932e-75387e89fb02?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/f1542b20-30d2-11e7-932e-75387e89fb02?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',


// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/f06955f0-30d2-11e7-932e-75387e89fb02?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/f0cf91d0-30d2-11e7-932e-75387e89fb02?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/f13ad6c0-30d2-11e7-932e-75387e89fb02?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',


// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/f1542b20-30d2-11e7-932e-75387e89fb02?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/f71dc110-3569-11e7-80a9-d5e0018f516c?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/f7a4a450-3569-11e7-80a9-d5e0018f516c?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

// 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/373c3110-2beb-11e7-aec8-676aa0a8f3e0?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/341e9ef0-201a-11e7-899a-8766c84b575b?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D',

 'https://a4schoolsinternal.blob.core.windows.net/58edec1d2aac9e5830577318/35d3f010-201a-11e7-899a-8766c84b575b?sv=2016-05-31&ss=bfqt&srt=sco&sp=rc&se=2018-04-23T22:53:50Z&st=2017-07-20T14:53:50Z&spr=https&sig=AhAPJr%2BBr5urTfnfBKaF2hnIkpS1xEUCbekiNZW4Od4%3D'
];
           
var binarydata = [];
        fileurl.forEach(function(url)
        {
            encoder(url , function(image)
            {
                binarydata.push(image);

            })
        })    
                    
                      
        setTimeout(function() {
        var htmlPayload =
         "<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
            "    <title>A page created with a screenshot of HTML on it (Node.js Sample)</title>" +
            "    <meta name=\"created\" content=\"" + dateTimeNowISO() + "\"/>" +
            "</head>" +
            "<body>" +
            "    <img src=\"name:HtmlForScreenshot\" /><p>sdsd" +
            "</body>" +
            "</html>";

            binarydata.forEach(function(image)
            {
                htmlPayload = htmlPayload +  "<p>sdsd <img src='data:image/jpeg;base64,"+ image + "' /></p>";

            })


        createPage(accessToken, {
            'Presentation': {
                body: htmlPayload  ,
                contentType: 'text/html'
            },
            'HtmlForScreenshot': {
                body: '',
                contentType: 'image/jpeg'
            }
        }, callback, true);
        }, 4000);
        
    
    }

function writer(callback)
{   
   // var fulldata;
       getarticle(function(data , obj){
           var  fulldata = data;
           console.log('Object Length' ,obj.length);   
           if(obj.length >0)            
            obj.forEach(function(obj) {
         
            // url = url+ "<p><img src=" + "\"" + "data:image/jpeg;base64," + image + "\"" +  "/><br>" + width +  "</p>"  + "<p>Source:" + attr;
             writetofile(obj.width, obj.fileurl , function(result) {
                            decode(obj.width, function(image){
                                  console.log(' new creation is File url is' ,obj.fileurl, obj.width);
                                fulldata = fulldata +"<p><img src=" + "\"" + "data:image/jpeg;base64," + image + "\"" +  "/><br>" + obj.width +  "</p>"  + "<p>Source:" + obj.attr
                        + "</p>" ;
                            });
                     
                        });
                      
                        
               });
               setTimeout(function() {
                                   callback(fulldata);
               }, obj.length * 800);
            
                      });
                      
}
 function writer2(callback)
    {   
   // var fulldata;
    var moduleid = '599b0d8c62f88c1c3089fb7d';
    var articleid = '9e689d4d22f44052830ace8db185afed';
       getarticle2(articleid,function(data , obj){

          console.log('Object is' , obj);
          
var url = '';
var counter =0;

    var headers = {
        "content-type": "application/json",
        Authorization: 'Bearer ' + token
    }
    var options = {
             url:'https://services.almanac-learning.com/composer/students/593ec91f27d6e412505c1d17/instances/'+ moduleid +'/articles/' + articleid + '/',
        method: 'GET',
        headers: headers,
    }
    console.log(options.url);
 request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
       //         console.log("post query" + response.body);
                favourites = JSON.parse(response.body);
               var counter = 0;
       console.log('response article' , response.body.modes , favourites.modes );
            var x=0;
            if(favourites.modes != undefined)
            {
            console.log('Modes length' ,favourites.modes.length , obj.length);
             obj.forEach(function(obj) {
                  console.log(obj.fileurl);
             })
            favourites.modes.forEach(function (mode)
            {
            // for(var i=0; i< mode.sections.length; i++) 
            // {
              mode.sections.some(function(section)
              {
                //   if(chapter == 'The States of Matter' && counter > 2)
                //   {
                //     console.log('BREAKING' , counter);
                //   return true;
                // }
                // else counter++;
                  
                  url = url + "<h1>" + section.title + "</h1>";
                    url = url + "<h2>" +  section.text.text.substring(9, section.text.text.length-3 ) + "</h2>";
                     if(section.images !==  undefined)
                    url = url + " <h3>Images from this section are as under</h3>";
                    try{
                        var image_len = section.images.length;
                    }
                    catch(err)
                    {   // continue;  
                    }
                    finally { }
                    if(section.videos !== undefined)
                    if(section.videos.length > 0)
                    url = url + "<br><iframe width='340' height='280' data-original-src='https://www.youtube.com/watch?v=" + section.videos[0].url + "' /><br>" ;
                    if(section.images !== undefined)
                    section.images.forEach(function(image)
                    {
                        if(image.caption !==null)
                        {
                        image.caption = image.caption.substring(9,image.caption.length-3 );
                        }
                        else image.caption ='Caption '+ Math.floor((Math.random() * 1000) + 1);
                 //     console.log('Image url is ',favourites.sections[i].images[j].url);
                        if(image.attribution == 'Publisher')   // change name to stop check
                        {   

                       // console.log('Image attribute cj fallon found' ,image.attribution,image.url);
                        var caption =  image.caption;
                        var fileurl = image.url + key;
                        var width =  image.width;
                        var attr = 'Publisher';
                           if(obj.length >0)            
                               obj.some(function(obj) {
                                  
                                 if(obj.fileurl == fileurl)
                                 {
                                   console.log('matched');
                                  console.log('File url is' ,fileurl );
                                    url = url+ "<p><img src=" + "\"data:image/jpeg;base64," + obj.data + "\"" + "/><br>"+
                          obj.width +  "</p><p>Source:" + obj.attr
                          + "</p>" ;
                                  return true;
                                 }
                     
                               })

                        


                        }
                        else {
                    
                    url = url+ "<p><img src=" + "\"" + image.url + "\"" + "/><br>"+
                    image.caption +  "</p><p>Source:" + image.attribution
                    + "</p>" ;
                        }
                        url = url + '<br>';
                    })
             
                })
              })
               }
                callback(url);
        }
        else { console.log('nuffing2 instances' , error ,response.statusCode, response.headers);
      }
           
    });
 });
                      
}


  function createOneNoteArticle(accessToken, callback) {


         writer2(function(data ){

        createPage(accessToken, {
            'Presentation': {
                body:   "<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
            "    <title>A page created with a screenshot of HTML on it (Node.js Sample)</title>" +
            "    <meta name=\"created\" content=\"" + dateTimeNowISO() + "\"/>" +
            "</head>" +
            "<body>" +
            "   <p>"+ data + "</p>" + 
            "</body>" +
            "</html>",
                contentType: 'text/html'
            },
            'HtmlForScreenshot': {
                body: "<html>" +
            "<head>" +
            "    <title>A page created with a new screenshot of HTML on it (Node.js Sample)</title>" +
            "    <meta name=\"created\" content=\"" + dateTimeNowISO() + "\"/>" +
            "</head>" +
            "<body>" +
            "</body>" +
            "</html>",
                contentType: 'text/html'
            }
        }, callback, true);
         });
     

    
    }

var favourites;

function getarticle2(articleid , callback)
{
    var favourites ={};
var url = '';
var moduleid = '599b0d8c62f88c1c3089fb7d';
var modulename = 'Geography';
var obj = [];
var counter =0;

    var headers = {
        "content-type": "application/json",
        Authorization: 'Bearer ' + token 
    }
    var options = {
       url:'https://services.almanac-learning.com/composer/students/593ec91f27d6e412505c1d17/instances/599b0d8c62f88c1c3089fb7d/articles/' + articleid + '/',   
     method: 'GET',
        headers: headers,
    }
    console.log(options.url);
 request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
       //         console.log("post query" + response.body);
                favourites = JSON.parse(response.body);
       console.log('response article' , response.body.modes , favourites.modes);
       var x=0;
            if(favourites.modes != undefined)
            {
            console.log('Modes length' ,favourites.modes.length);
            favourites.modes.forEach(function (mode)
            {
            // for(var i=0; i< mode.sections.length; i++) 
            // {
              mode.sections.forEach(function(section)
              {
                    url = url + " <h3>Images from this section are as under</h3>";
                    url = url + "<h4>" +  section.text.text.substring(9, section.text.text.length-3 ) + "</h4>";
                    try{
                        var image_len = section.images.length;
                    }
                    catch(err)
                    {   // continue;  
                    }
                    finally { }
                    if(section.videos !== undefined)
                    if(section.videos.length > 0)
                    url = url + "<br><iframe width='340' height='280' data-original-src='https://www.youtube.com/watch?v=" + section.videos[0].url + "' /><br>" ;
                    if(section.images !== undefined)
                    section.images.forEach(function(image)
                    {
                        if(image.caption !==null)
                        {
                        image.caption = image.caption.substring(9,image.caption.length-3 );
                        }
                        else image.caption ='Caption '+ Math.floor((Math.random() * 1000) + 1);
                 //     console.log('Image url is ',favourites.sections[i].images[j].url);
                        if(image.attribution == 'Publisher')   // change name to stop check
                        {   
                        var caption =  image.caption;
                        var fileurl = image.url + key;
                          console.log('Image attribute cj fallon found' ,image.attribution, fileurl);
                        var attr = 'Publisher';
                        //  console.log('File url is' ,fileurl );
                       
                        encoder(fileurl ,function(image)
                        {
                        //         url = url +"<p><img src=" + "\"" + "data:image/jpeg;base64," + image + "\"" +  "/><br>" + obj1.width +  "</p>"  + "<p>Source:" + obj1.attr
                        // + "</p>" ;
                               var obj1 = {"attr" : attr , "fileurl" : fileurl , "width" : caption , "data" : image };
                            obj.push(obj1);
                          x++;
                        });
                        }
                      
                    })
                })
              })
       
               }
                 callback(url , obj);
               
        }
        else { console.log('nuffing2 instances' , error ,response.statusCode, response.headers);
        callback(url , obj);
        }
    });
  
}


app.get('/writenote', function (req, res) {

     createPageWithScreenshotFromHtml2(accessToken , createResultCallback);

     //createOneNoteArticle(accessToken , createResultCallback);
   
    res.end('wrote');
  

   
});




const port = process.env.PORT || '3000';
app.get('/', function (req, res) {

  
      res.end('<h1>Node Server Running on 3000</h1>' + port);
});

app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));