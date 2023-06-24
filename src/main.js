let search = prompt("Search Heare");

const result = devs.filter(
  (data) =>
    data.name === search ||
    data.skill === search ||
    data.location === search ||
    data.income >= 50000
);

const fRes = [];

result.forEach((item, index) => {
  fRes.push(item);
});

console.table(fRes);
