;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = ['$mdDialog'];

    function HomepageController($mdDialog) {
        let vm = this;

        vm.select = select;
        vm.selected = 0;
        vm.quantity = {
            tech: 1,
            admins: 1,
            lab: 1
        };
        vm.sum = {
            default_lab: 45,
            default_field: 59,
            default_pro: 104,

        };
        vm.discount = 0;
        vm.totalsum = 0;
        vm.updateSubscriptions = updateSubscriptions;
        vm.changeSubscriptions = changeSubscriptions;
        vm.additional = true;

        function select(type) {
            vm.selected = type;
            switch (type) {
                case 'Lab':
                    showDialog();
                    break;

            }
            console.log(vm.selected);
        }

        function updateSubscriptions() {
            vm.discount = vm.quantity.tech >= 5 ? ((vm.quantity.tech - 5) * 5 + 10) : 0;
            vm.sumOfDiscount = (vm.quantity.tech * 49 + vm.quantity.admins * 10 + 45) * vm.discount / 100;
            vm.sum.default_pro = (vm.quantity.tech * 49 +
                vm.quantity.admins * 10 + 45);
            vm.sum.default_field = (vm.quantity.tech * 49 +
                vm.quantity.admins * 10);
            vm.sum.default_field = vm.sum.default_field - (vm.sum.default_field * (vm.discount / 100));
            vm.sum.default_pro = vm.sum.default_pro - (vm.sum.default_pro * (vm.discount / 100));
            vm.sum.default_field = vm.sum.default_field.toFixed(2);
            vm.sum.default_pro = vm.sum.default_pro.toFixed(2);
        }

        function changeSubscriptions() {
            vm.additional = true;
        }

        function showDialog() {
            var confirm = $mdDialog.confirm()
                .title('Just Lab?')
                .textContent('Only select this option if you' +
                    ' have no field techs' +
                    ' don’t need quoting and invoicing systems')
                .ok('Continue')
                .cancel('Add field');

            $mdDialog.show(confirm).then(function () {
            }, function () {
                vm.selected = 'Pro';
            });
        }
    }
})();