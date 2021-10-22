(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    // var SERVER_URL = 'http://co.audstanley.com/coffeeorders';
    // var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
    var FIREBASE_SERVER_URL = 'http://coffeerun-d24c9.firebaseapp.com'; //IS THIS CORRECT
    var App = window.App;
    var Truck = App.Truck;
    // var DataStore = App.DataStore;
    // var RemoteDataStore = App.RemoteDataStore;
    // var FirebaseConfig = App.FirebaseConfig;
    var firebasedatastore = App.firebasedatastore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;
    // var datastore = new DataStore();
    // var datastore = new RemoteDataStore(SERVER_URL);
    var datastore = new firebasedatastore(FIREBASE_SERVER_URL);
    var truck = new Truck('ncc-1705', datastore);
    window.truck = truck;
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function (data) {
        return truck.createOrder.call(truck, data)
            .then(function () {
                    checkList.addRow.call(checkList, data);
                },
                function () {
                    alert('Server unreachable. Try again later.');
                });
    });
    formHandler.addInputHandler(Validation.isCompanyEmail);
    truck.printOrders(checkList.addRow.bind(checkList));
    console.log(formHandler);
})(window);