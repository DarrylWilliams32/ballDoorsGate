//initializes the monsters array
const monsters = [
    {
      name: "slimes",
      monsterName: ["slime", "ice slime", "stone slime"], 
      health: [20, 30, 60],
      power: [1, 2, 1.5],
      defence: [1, 2, 10],
      evade: [3, 5, 1],
      xpGained: [20, 25, 30]
    },
    {
      name: "elves",
      monsterName: ["wood elf", "archer elf", "wizard elf"], 
      health: [50, 40, 50],
      power: [2, 2, 2.5],
      defence: [2, 2, 3],
      evade: [3, 4, 3],
      xpGained: [25, 30, 40]
    },
    {
      name: "orcs",
      monsterName: ["sword orc", "theif orc", "berserker orc"], 
      health: [60, 50, 70],
      power: [2, 2, 3],
      defence: [2, 2, 3],
      evade: [3, 5, 2],
      xpGained: [25, 30, 40]
    }, 
    {
      name: "dragons",
      monsterName: ["fire dragon", "ice dragon", "hulker dragon"], 
      health: [70, 70, 100],
      power: [5, 5, 7],
      defence: [5, 5, 7],
      evade: [4, 5, 2],
      xpGained: [45, 45, 60]
    },
    {
        name: "bosses",
        monsterName: ["King Slime", "Great Elf", "Boss Orc", "Ice Dragon", "High Dragon"], 
        health: [80, 70, 90, 120, 150],
        power: [5, 4, 6, 8, 10],
        defence: [2.5, 4, 5, 7, 10],
        evade: [3, 4, 5, 5, 4],
        xpGained: [50, 60, 75, 80, 100]
    }
  ]