function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/);
    delimiter = new RegExp(match[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&')); // Escape regex chars
    numbers = numbers.slice(match[0].length);
  }

  const parts = numbers.split(delimiter).filter(n => n !== '');
  const nums = parts.map(Number);
  const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
  return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
