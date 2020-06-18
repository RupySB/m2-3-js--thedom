// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (let sectionCount = 1; sectionCount <= FROGS; sectionCount++) {
  let lane = document.createElement("li");
  track.appendChild(lane);

  let number = document.createElement("span");
  number.innerText = sectionCount;
  lane.appendChild(number);

  lane.id = "frog's" + "" + sectionCount;
}

let froggy = [];
// 2. Create li

for (let x = 0; x < FROGS; x++) {
  const newFrog = frogStable[x];
  racers.push(newFrog);
}
console.log(froggy);
// 3. Create span and add it to the li

// 4. Assign an id to each lane
