num_map = {
	1: "one",		2: "two",		3: "three",		4: "four",		5: "five",		6: "six",		7: "seven",		8: "eight",		9: "nine",
	10: "ten",		11: "eleven",		12: "twelve",		13: "thirteen",		15: "fifteen",		18: "eighteen",
	20: "twenty",		30: "thirty",		50: "fifty",		80: "eighty",
};

num_degree_map = [
	{
		"degree": 100,
		"name": " hundred"
	},
	{
		"degree": 1000,
		"name": " thousand"
	},
	{
		"degree": 1000000,
		"name": " million"
	},
	{
		"degree": 1000000000,
		"name": " billion"
	},
];


function convert_num2words(num) {
	if (num <= 0) {
		return "";
	}
	if (num_map.hasOwnProperty(num)) {
		return num_map[num];
	} else if (num < 20) {
		return num_map[num - 10] + "teen";
	} else if (num < 100) {
		if (num_map.hasOwnProperty(Math.floor(num / 10) * 10)) {
			return num_map[Math.floor(num / 10) * 10] + " " + num_map[num % 10];
		} else {
			num_word = num_map[Math.floor(num / 10)] + "ty ";
			if (num % 10 > 0) {
				num_word += num_map[num % 10];
			}
			return num_word;
		}
	} else {
		num_degree_map.push({
			'degree': num_degree_map[num_degree_map.length-1]['degree'] * 1000,
			'name': ''
		});
		// loop through the numerical degrees
		for (var i = 0; i < num_degree_map.length; i++) {
			if (num < num_degree_map[i+1]['degree']) {
				num_word = convert_num2words(Math.floor(num / num_degree_map[i]['degree'])) + num_degree_map[i]['name'];
				if (num % num_degree_map[i]['degree'] > 0) {
					num_word += " and " + convert_num2words(num % num_degree_map[i]['degree']);
				}
				return num_word;
			}
		}
	}
	// } else if (num < 1000) {
	// 	num_word = num_map[Math.floor(num / 100)] + " hundred"
	// 	if (num % 100 > 0) {
	// 		num_word += " and " + convert_num2words(num % 100);
	// 	}
	// 	return num_word;
	// } else if (num < 1000000) {
	// 	num_word = convert_num2words(Math.floor(num / 1000)) + " thousand";
	// 	if (num % 1000 > 0) {
	// 		num_word += " and " + convert_num2words(num % 1000);
	// 	}
	// 	return num_word;
	// }
	return num;
}