function ContactCtrl($scope) {
    $scope.contacts = [

        {"name":"Amit Vishwakarma",
            "group":"Office",
            "mobile":"894512368",
            "address":"Jabalpur, M.P."},
            
        {"name":"Rohit Porwal",
                "group":"Friend",
                "mobile":"9989555556",
                "address":"Ratlam, M.P."},
                
        {"name":"Saket Baghel",
                    "group":"Family",
                    "mobile":"9827930928",
                    "address":"Old Palasia, Indore"},
    ];
    
    
    $scope.deleteContact = function(index){
    $scope.contacts.splice(index,1);	

    };
}

function ContactListCtrl($scope) {
    $scope.mode = 'vignette';
}

function ContactEditCtrl($scope,$routeParams,$location) {
    var newContact = false;
    if ($routeParams.contactId) {
        $scope.contact = $scope.contacts[$routeParams.contactId];
    } else {
        $scope.contact = {};
        newContact = true;
    }
    $scope.saveContact = function() {
        if (newContact) {
            $scope.contacts.push($scope.contact);
        }
        $location.path("/list");
    };
}
