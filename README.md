Meteor Edmund's API
==========

Meteor packaging for [Edmund's API](https://github.com/EdmundsAPI/sdk-javascript).

[API doc](http://developer.edmunds.com/)

``` sh
$ meteor add edmunds
```

Usage example (client)
```javascript
  Template.hello.rendered = function() {
    // Instantiate the SDK
    var res = new EDMUNDSAPI('YOUR API KEY');
    // Optional parameters
    var options = {
      "state": "new"
    };

    // Callback function to be called when the API response is returned
    function success(res) {
      console.log("Total number of new Acura MDXs is: " + res.yearsCount);
    }

    // Oops, Houston we have a problem!
    function fail(data) {
      console.log(data);
    }

    // Fire the API call
    res.api('/api/vehicle/v2/acura/mdx/years/count', options, success, fail);
  };
```