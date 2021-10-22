(function (window) {
    'use strict';

    var App = window.App || {};

    class Truck {
        constructor(truckId, db) {
            'use strict';
            this.truckId = truckId;
            this.db = db;
        }
        createOrder(order) {
            'use strict';
            console.log('Adding order for ' + order.emailAddress);
            return this.db.add(order.emailAddress, order);
        }
        deliverOrder(customerId) { 
            'use strict';
            console.log('Delivering order for ' + customerId);
            return this.db.remove(customerId);
        }
        printOrders(printFn) {
            'use strict';
            return this.db.getAll() 
                .then(function(orders) {
                    var customerIdArray = Object.keys(orders);
                    console.log('Truck #' + this.truckId + ' has pending orders: ');
                    customerIdArray.forEach(function(id) {
                        console.log(orders[id]);   
                        if (printFn) { printFn(orders[id]); }     
                }.bind(this));
            }.bind(this));
        }
        static runTests(truck) {
            'use strict';
            console.log('==================================== running tests for truck...');

            truck.createOrder({ emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
            truck.createOrder({ emailAddress: 'dr@no.com', coffee: 'decaf'});
            truck.createOrder({ emailAddress: 'm@bond.com', coffee: 'earl grey'});
            truck.printOrders();
            truck.deliverOrder('dr@no.com');
            truck.deliverOrder('m@bond.com');
            truck.printOrders();
        }
    }
    App.Truck = Truck;
    window.App = App;
})(window);