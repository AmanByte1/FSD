const a = {
  "Name": "Ramesh",
  "Subects": ["Maths", "Scence", "chemistry"],
  "Grade": {
    "Type": "marks",
    "Total": [88, 90, 99, 87]
  },
  "Range": {
    "opt": "100",
    "type": ["secure", "subject", "class"]
  },
  "achive": [
    {
      "Rank": "rank",
      "place": [1, 2, 3]
    },
    {
      "Ordinalindicator": "st"
    },
    "12"
  ],
  "joints": ["outof", "got", "and"]
};

console.log(a.Name+" "+a.joints[1]+" "+a.Grade.Total[1]+" "+a.joints[1]);
