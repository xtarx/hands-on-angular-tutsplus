'use strict';
angular.module('swFrontApp')
.filter('edges', function () {
	return function  (edges,filterBy) {

		if(filterBy.category.name==="All"){
			return edges;
		}

		var getRank=function (reqs) {

			var req={};
			for (var i = reqs.length - 1; i >= 0; i--) {	
				if(reqs[i].type=="rank"){
					req=reqs[i];
					break;
				}
			};
			
			return req.value;
		}
		return edges.filter(function(element,index,array) {

			var category=(element.category.name === filterBy.category.name||filterBy.category.name==="All")
			var rank=(getRank(element.requirements)===filterBy.rank.name||filterBy.rank.name==="All")
			return category && rank;
		});
	}

});
