var fs = require("fs");
const http = require('http')  
var express = require('express');
var app = express();
var request = require('request');
 var https = require ('https');
  var _ = require('underscore');
  var base64Img = require('base64-img');

var token ='';

var x=0;
var accessToken = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFCbmZpRy1tQTZOVGFlN0NkV1c3UWZkYzduQi1YY2duUlVSdkx1RXRYa2J4MkQ0RGpTVlFidG1NRWtQT2JvVC1SVHdvR251X2tTN2hrWElGZTNaMTdSS2pfNE5abEVQeDJ5MUJQV0pRaklBVGlBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoiOUZYRHBiZk1GVDJTdlF1WGg4NDZZVHdFSUJ3Iiwia2lkIjoiOUZYRHBiZk1GVDJTdlF1WGg4NDZZVHdFSUJ3In0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9kNTk1YmU4ZC1iMzA2LTQ1ZjQtODA2NC05ZTViODJmYmU1MmIvIiwiaWF0IjoxNDk5NTYxNDczLCJuYmYiOjE0OTk1NjE0NzMsImV4cCI6MTQ5OTU2NTM3MywiYWNyIjoiMSIsImFpbyI6IlkyWmdZSGduV2ZOT0xqeklKS2JCUnYzbWJ2Ryt4MWFoeFhOeUxCTmtWNWpXZkNrck1nWUEiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIGV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlNoYWhuYXdheiBBbGFtIiwiZ2l2ZW5fbmFtZSI6Ik1vaGFtbWFkIiwiaXBhZGRyIjoiODMuMTM2LjQ1Ljg5IiwibmFtZSI6Ik1vaGFtbWFkIFNoYWhuYXdheiBBbGFtIiwib2lkIjoiYzMzYTIxZWMtNWZmOS00MTE1LTgzODMtZDg0NjI0ZmQzYjUwIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTM3ODE1ODA2NzgtNjg5MjYwNDM4LTEyMDg0Mjg4NzItMjM4Mjk3IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDM3RkZFQTBGRjgxMUIiLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZSBGaWxlcy5SZWFkV3JpdGUuQWxsIE1haWwuUmVhZFdyaXRlIE5vdGVzLlJlYWRXcml0ZS5BbGwgUGVvcGxlLlJlYWQgU2l0ZXMuUmVhZFdyaXRlLkFsbCBUYXNrcy5SZWFkV3JpdGUgVXNlci5SZWFkQmFzaWMuQWxsIFVzZXIuUmVhZFdyaXRlIiwic3ViIjoiU08yQWNzVS1OaThDWjBrWm1zTzFjdXRXeHJZV2hoLTBLcU9KOXBXMDdyayIsInRpZCI6ImQ1OTViZThkLWIzMDYtNDVmNC04MDY0LTllNWI4MmZiZTUyYiIsInVuaXF1ZV9uYW1lIjoiU0hBSE5BV01AdGNkLmllIiwidXBuIjoiU0hBSE5BV01AdGNkLmllIiwidXRpIjoib2VyOHdsdUZoRW0tbkV5bU1lVVFBQSIsInZlciI6IjEuMCJ9.MFHfbzAfs7b6-I6NtPZJcR0XdZjds_Ak-_aWytDRCCtcvS4-WUEeM7zXwHB8gqPOI9sTtMJeMxGw4qB6yVX9JhDLmgMFlgqneuUZ80J-qxEQOiovQC9JR6WOmJQryLuOi-T5bxGJDQqokO9vfndsAAR_r_pwuijeSCKalLkg6PdNO3hWafgEMzw0VOyY1Sfq2i6DcmNCFB44gV5OmIC1fhHf9eiso6qJPjN_dPm6ytsA2ggY6PG369T6v8MYoZ9E6VegcwzXJAy6Cdhj4NirVtQ44dcRUiDWvqRIYNfxZvq_lZt9JVEsMZpiDErqe-sJFxgvYv0k5_emUrdQ25Bf7g';

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
var request = https.get(url, function(response) {
  response.pipe(file);
  response.on('end', () => {
  console.log('There will be no more data.');
});
   fs.open(filename + '.jpg', 'r+', function(err, fd) {
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
          callback(url);
      });
   });
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
         
 
            writetofile('http://kdeg-vm-43.scss.tcd.ie/cjfallon/chp10/P%2062%20oil%20spill_fmt.jpeg', function (data)
        {

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
        });

    
    }

 //createPageWithScreenshotFromHtml2(accessToken , createResultCallback);
      function createPageWithScreenshotFromHtml2(accessToken, callback) {

          var files= ["521","824"];
          var encode = [];
          files.forEach(function(name) {
              
              decode(name , function (image){
                    encode.push(image);
              });

          });
         setTimeout(function()
         {
             console.log('Encode' ,encode);
        
          
          

        var htmlPayload =
         "<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
            "    <title>A page created with a screenshot of HTML on it (Node.js Sample)</title>" +
            "    <meta name=\"created\" content=\"" + dateTimeNowISO() + "\"/>" +
            "</head>" +
            "<body>" +
            "    <img src=\"name:HtmlForScreenshot\" /><p>sdsd <img src='data:image/jpeg;base64,"+encode[0] + "' /><img src='data:image/jpeg;base64,"+encode[1] + "' /></p>" +
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
         
 
           

            

        createPage(accessToken, {
            'Presentation': {
                body: htmlPayload  ,
                contentType: 'text/html'
            },
            'HtmlForScreenshot': {
                body: encode[0],
                contentType: 'image/jpeg'
            }
        }, callback, true);

 }, 3000);
    
    }

function writer(callback)
{   
    var fulldata;
       getarticle(function(data , obj){
           fulldata = data;               
            obj.forEach(function(obj) {
         
            // url = url+ "<p><img src=" + "\"" + "data:image/jpeg;base64," + image + "\"" +  "/><br>" + width +  "</p>"  + "<p>Source:" + attr;
             writetofile(obj.width, obj.fileurl , function(result) {
                            decode(obj.width, function(image){
                                  console.log(' new creation is File url is' ,obj.fileurl, obj.width);
                                fulldata = fulldata +"<p><img src=" + "\"" + "data:image/jpeg;base64," + image + "\"" +  "/><br>" + obj.width +  "</p>"  + "<p>Source:" + obj.fileurl
                        + "</p>" ;
                            });
                     
                        });
                      
                           
               });
                setTimeout(function() {
                                callback(fulldata);
                            }, 3000);
            
                      });
                      
}


  function createOneNoteArticle(accessToken, callback) {


         writer(function(data){

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
app.get('/posts', (req, res) => {


        
        var images = [];
        x=0;
        writetofile('http://kdeg-vm-43.scss.tcd.ie/cjfallon/chp10/P%2062%20oil%20spill_fmt.jpeg', function (data)
        {
        console.log(data);
        decode(function(image){
            images.push(image);
            x++;
        });
    });
        setTimeout(function() {
      writetofile('http://kdeg-vm-43.scss.tcd.ie/cjfallon/chp04/imgs-431.jpg', function (data)
        {
        console.log(data);
        decode(function(image){
            images.push(image);
            x++;
        });
    });
    res.json(images.length);
    console.log(images.length);
        },3000);

});

function getarticle(callback)
{
console.log('Post token ' + token);
var url = '';
var topic = 'lava';
var chapter = 'pppp';
var moduleid = '5922b41f74748a1b1c8e440e';
var modulename = 'Geography';
var articleid = 'bbebae794f1440108be30a2cb8dddd8e';
var obj = [];
var counter =0;

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
                favourites = JSON.parse(response.body);
       console.log('response article' , response.body.sections , favourites.sections);
            if(favourites.sections != undefined)
            {
            console.log('Sections length' ,favourites.sections.length);
            for(var i=0; i< favourites.sections.length; i++) 
            {
       
                    url = url + " <h3>Images from section "+ (i+1) + " are as under</h3>";
                    url = url + "<h4>" +  favourites.sections[i].text.text + "</h4>";
                             console.log('Top of loop i is', i);  
                    try{
                        var image_len = favourites.sections[i].images.length;
                    }
                    catch(err)
                    {    continue;  }
                    finally { }
                    var x=0;
                    for(var j=0; j< image_len;j++)
                    {
                        if(favourites.sections[i].images[j].caption !==null)
                        {
                        favourites.sections[i].images[j].caption = favourites.sections[i].images[j].caption.substring(9,favourites.sections[i].images[j].caption.length-3 );
                        }
                        else favourites.sections[i].images[j].caption ='No Caption';
                 //     console.log('Image url is ',favourites.sections[i].images[j].url);
                        if(favourites.sections[i].images[j].attribution == 'flickr')
                        {   
                        
                        console.log('Image attribute cj fallon found' ,favourites.sections[i].images[j].attribution,favourites.sections[i].images[j].url , 'i is ', i , 'j is' ,j);
                        var caption =  favourites.sections[i].images[j].caption;
                        var fileurl =favourites.sections[i].images[j].url;
                        var width = favourites.sections[i].images[j].width;
                          console.log('File url is' ,fileurl );
                          var details = {"caption" : caption , "fileurl" : fileurl , "width" : width  };
                          obj.push(details);
                          x++;


                        // writetofile(width, fileurl , function(result) {
                        //     decode(width, function(image){
                        //           console.log('File url is' ,fileurl, width);
                        //         url = url+ "<p><img src=" + "\"" + "data:image/jpeg;base64," + image + "\"" +  "/><br>" + width +  "</p>"  + "<p>Source:" + attr
                        // + "</p>" ;
                        //     });
                        // });
                        }
                        else {
                    
                    url = url+ "<p><img src=" + "\"" + favourites.sections[i].images[j].url + "\"" + "/><br>"+
                    favourites.sections[i].images[j].caption +  "</p><p>Source:" + favourites.sections[i].images[j].attribution
                    + "</p>" ;
                        }
                    }
                }
               }
               setTimeout(function(){   callback(url , obj); } , 2000 );
               
        }
        else { console.log('nuffing2 instances' , error ,response.statusCode, response.headers);
        callback(url , obj);
        }
    });
}
    

app.get('/writenote', function (req, res) {

   //  createPageWithScreenshotFromHtml(accessToken , createResultCallback);

     createOneNoteArticle(accessToken , createResultCallback);
   
    res.end('wrote');
  

   
});

const port = process.env.PORT || '3000';
app.get('/', function (req, res) {

  
      res.end('<h1>Node Server Running on 3000</h1>' + port);
});

app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));