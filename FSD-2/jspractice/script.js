
 /* function processClick1() {
    httpRequest = new XMLHttpRequest();

   if (!httpRequest) {
      console.log('Giving up :( Cannot create an XMLHTTP instance');
      return false;
     }
  //   //Setting up the URL to hit
    httpRequest.open('GET', 'https://reqres.in/api/users');
  //   //Setting up the callback/event-handler, which will be triggered when the request completes
    httpRequest.onreadystatechange = alertContents;
  //   //Doing the actual action i.e. hitting the URL and getting response
    httpRequest.send();
   }

  function alertContents() {
  //   //sanity check -- did the state really change
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
  //     //did the request succeed?
      if (httpRequest.status === 200) {
  //       //get the responseText string and convert it into a JSON object
      jsonData = JSON.parse(httpRequest.responseText)
        console.log(jsonData);
  //       //Dynamically modify the 'document'and update it with the data from the URL
       document.querySelector('#users').innerHTML = "email: "+jsonData.data[0].email;
    } else {
        console.log('There was a problem with the request.');
      }
     }
   }
*/
  function populateHtml(data)
  {
    document.querySelector('#users').innerHTML = "email: "+data.email
  }

  function processClick2(){
      fetch('https://reqres.in/api/users')
      .then(res =>  res.json())
      .then(jsonData => 
        {
            console.log(jsonData)
            populateHtml(jsonData.data[0])
        })
      .catch(err => console.log(err))
  }

  function processClick3(){
    setTimeout(()=>{
      populateHtml({email: "subu.k@jj.com"})
    },1000)
  }
