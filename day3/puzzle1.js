const input = 289326;

let cornerExp = Math.sqrt(input) + (1 - (Math.sqrt(input) - Math.floor(Math.sqrt(input))));

cornerExp = cornerExp % 2 === 0 ? cornerExp + 1 : cornerExp;

let cornerNumber = Math.pow(cornerExp, 2);
let half = Math.floor(cornerExp / 2);

let se = cornerNumber;
let sw = cornerNumber - (half * 2);
let nw = cornerNumber - (half * 4);
let ne = cornerNumber - (half * 6);

let closestCorner = [se, sw, nw, ne].reduce(function (acc, corner) {
	return Math.max(input, corner) - Math.min(input, corner) < Math.max(input, acc) - Math.min(input, acc) ? corner : acc;
}, Number.MAX_VALUE);

let middle = input > closestCorner ? closestCorner + half : closestCorner - half;

console.log(input - middle + half);