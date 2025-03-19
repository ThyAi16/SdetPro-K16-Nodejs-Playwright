const Request = require("./Request");
//Child class / Sub class / Derived class
class GetRequest extends Request {
  // Overriding the parent class method: xuất hiện kế thừa 2 class khác nhau, child class có method trùng tên parent class
  setMethod() {
    super.setMethod("GET");
  }
  newMethod() {
    console.log("New method defined?");
  }
}

let getRequest = new GetRequest();
getRequest.setMethod();
getRequest.sendRequest();
getRequest.verifyResponse();
getRequest.newMethod();
