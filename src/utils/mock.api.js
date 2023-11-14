const jsonData = [
  { id: 1, name: "Card1" },
  { id: 2, name: "Card2" },
  { id: 3, name: "Card3" },
  { id: 4, name: "Card4" },
  { id: 5, name: "Card5" },
  { id: 6, name: "Card6" },
  { id: 7, name: "Card7" },
  { id: 8, name: "Card8" },
  { id: 9, name: "Card9" },
  { id: 10, name: "Card10" },
  { id: 11, name: "Card11" },
  { id: 12, name: "Card12" },
];

export function getMockData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(jsonData);
    }, 10000);
  });
}
