let lovePoints = 0;
let currentScene = 0;

// Extended Scene data
const scenes = [
  {
    text: "Your date with Riddle Rosehearts begins. He looks at you thoughtfully. Where do you want to go first?",
    choices: [
      { text: "Invite Riddle to the garden for a quiet stroll.", nextScene: 1, points: 10 },
      { text: "Suggest a trip to the Heartslabyul library for some peace.", nextScene: 2, points: 5 },
      { text: "Head to the café for some tea and sweets.", nextScene: 3, points: 15 }
    ]
  },
  {
    text: "In the garden, Riddle admires the flowers, his eyes softening as he talks about the Queen's Rules. 'It’s such a peaceful place, don’t you think?'",
    choices: [
      { text: "Agree with him and ask about his favorite flowers.", nextScene: 4, points: 10 },
      { text: "Compliment his knowledge and express interest in learning from him.", nextScene: 5, points: 15 },
      { text: "Thank him for spending time with you here.", nextScene: 6, points: 10 }
    ]
  },
  {
    text: "At the library, Riddle pulls out a favorite book and smiles faintly. 'It’s been a while since I could just enjoy a good book. What about you?'",
    choices: [
      { text: "Ask him to recommend his favorite books.", nextScene: 7, points: 10 },
      { text: "Tell him you’d love to study with him sometime.", nextScene: 8, points: 5 },
      { text: "Say you’d rather talk about something lighter.", nextScene: 9, points: 5 }
    ]
  },
  {
    text: "In the café, Riddle orders tea and a small pastry. He looks at you, clearly pleased. 'Thank you for inviting me here. It’s rare that I indulge like this.'",
    choices: [
      { text: "Mention how he deserves a break sometimes.", nextScene: 10, points: 15 },
      { text: "Ask if he’d like to do this more often with you.", nextScene: 11, points: 10 },
      { text: "Compliment his refined taste.", nextScene: 12, points: 5 }
    ]
  },
  // More steps with detailed responses and Riddle's reactions
  {
    text: "Riddle looks at you, surprised. 'I must say, you’re different from others. It’s… refreshing.' His voice softens as he continues.",
    choices: [
      { text: "Respond with a compliment of your own.", nextScene: 13, points: 15 },
      { text: "Smile and thank him.", nextScene: 14, points: 10 },
      { text: "Blush and change the subject.", nextScene: 15, points: 5 }
    ]
  },
  {
    text: "After an hour together, Riddle begins to open up about his life. 'It hasn’t always been easy. Following all those rules…'",
    choices: [
      { text: "Encourage him to share more about his feelings.", nextScene: 16, points: 20 },
      { text: "Sympathize with him and offer support.", nextScene: 17, points: 15 },
      { text: "Ask how he manages it all so well.", nextScene: 18, points: 10 }
    ]
  },
  {
    text: "Riddle takes a deep breath and continues, 'Sometimes, I feel like I can’t truly be myself. But… maybe with you, it’s different.'",
    choices: [
      { text: "Smile and tell him he can trust you.", nextScene: 19, points: 20 },
      { text: "Reach for his hand reassuringly.", nextScene: 20, points: 15 },
      { text: "Tell him you’re glad he feels that way.", nextScene: 21, points: 10 }
    ]
  },
  // Final scene when reaching 100 points
  {
    text: "With 100 points in your love meter, Riddle pauses and looks at you with a soft expression. 'I never thought I’d say this, but… I think I love you.'",
    choices: []
  }
];

// Function to update the scene
function updateScene() {
  const scene = scenes[currentScene];
  document.getElementById("dialogue-text").innerText = scene.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  // Add choices
  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => {
      lovePoints += choice.points;
      currentScene = choice.nextScene;
      updateLoveMeter();
      updateScene();
    };
    choicesDiv.appendChild(button);
  });

  // Show or hide the "Next" button based on whether there are choices
  if (scene.choices.length === 0) {
    choicesDiv.innerHTML = "<button onclick='resetGame()'>Play Again</button>";
  }
}

// Function to update love meter
function updateLoveMeter() {
  const meter = document.getElementById("meter-fill");
  const percent = Math.min((lovePoints / 100) * 100, 100);
  meter.style.width = percent + "%";
  meter.innerText = `${percent}%`;
}

// Reset game function
function resetGame() {
  lovePoints = 0;
  currentScene = 0;
  updateLoveMeter();
  updateScene();
}

// Initialize the game
updateScene();
