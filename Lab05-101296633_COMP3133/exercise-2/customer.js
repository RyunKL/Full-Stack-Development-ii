var Customer = /** @class */ (function () {
    function Customer() {
        var _this = this;
        this.greeter = function () {
            console.log("Hello, ".concat(_this.firstName, " ").concat(_this.lastName, "!"));
        };
    }
    return Customer;
}());
var customer = new Customer();
customer.firstName = "Henry";
customer.lastName = "Shin";
customer.greeter();
