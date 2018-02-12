var SortedList = function() {
	this.items = [];
	this.length = this.items.length

};

SortedList.prototype.add = function(item) {
	this.items.push(item)
	this.length = this.items.length
	this.items.sort(function(a, b)
	{
		return a - b
	})
  
}

SortedList.prototype.get = function(pos) {
	this.length = this.items.length
	return this.items[pos -1]
}

SortedList.prototype.max = function() {
	var max = Math.max.apply(null, this.items)
	return max

}

SortedList.prototype.min = function() {
	var min = Math.min.apply(null, this.items)
	return min
}

SortedList.prototype.average = function() {
	var total = 0;
	for(var i = 0; i < this.items.length; i++) {
		total += this.items[i];
	}
	var avg = total / this.items.length;
	return avg
}

SortedList.prototype.sum     = function() {
	var sum = this.items.reduce(function(a, b) { return a + b; }, 0);
	return sum
}

module.exports = SortedList;