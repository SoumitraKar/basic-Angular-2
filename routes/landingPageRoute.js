function functionName() {
  var http = new XMLHttpRequest();
  var url = "http://ec2-52-43-156-8.us-west-2.compute.amazonaws.com:8080/Thingworx/Things/FlexSMART_Traceability_Thing/Services/getCustomerService";
  var params = "UserName='Administrator'&UserName={'UserName': 'Administrator'}";
  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/json");
  http.setRequestHeader("Accept", 'application/json');
  http.setRequestHeader("appKey", "67447434-8a26-4f44-821c-e51e760e14fe");
  http.setRequestHeader("x-thingworx-session", true);
  http.setRequestHeader("UserName", 'Administrator');
  http.withCredentials = false;
  http.setRequestHeader('Access-Control-Allow-Origin', '*');
  http.onreadystatechange = function() {//Call a function when the state changes.
  	if(http.readyState == 4 && http.status == 200) {
  		alert(http.responseText);
  	}
  }
  http.send(params);
}
