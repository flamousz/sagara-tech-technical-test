const maxProductOfThree = (nums) => {
	if (nums.length < 3) {
		return "you must input at least 3 integers";
	} else {
        let firstMin = Infinity
        let secondMin = Infinity
        let firstMax = -Infinity
        let secondMax = -Infinity
        let thirdMax = -Infinity

        for (const number of nums) {
            if (!Number.isInteger(number)) {
                return 'input must be integer'
            }

            if (number < firstMin) {
                secondMin = firstMin
                firstMin = number
            } else if(number < secondMin) {
                secondMin = firstMin
            }

            if (number > firstMax) {
                thirdMax = secondMax
                secondMax = firstMax
                firstMax = number
            } else if (number > secondMax) {
                thirdMax = secondMax
                secondMax = number
            } else if ( number > thirdMax) {
                thirdMax = number
            }
        }

        return Math.max(firstMin*secondMin*firstMax, firstMax*secondMax*thirdMax)
	}
};

console.log(maxProductOfThree([-10, -10, 1, 3, 2]));
