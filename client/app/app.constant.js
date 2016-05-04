(function(angular, undefined) {
  angular.module("fullstackSqlApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);