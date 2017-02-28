const calculate = function(a, n) {
	var num = a;
	for (var i = 1; i < n; i++) {
		num *= a;
	}
	return num;
};

module.exports = calculate;