export default class Quiz {
  constructor() {
    this.questionEl = document.querySelector('.question');

    this.$leftDiv = document.querySelector('.leftside-div');
    this.$centerDiv = document.querySelector('.centerside-div');
    this.$rightDiv = document.querySelector('.rightside-div');
    this.$everyDiv = document.querySelectorAll('div');

    this.elementName = '';
    this.listOptions = [];

    this.rightPage = 'redirect.html?redirect=1';
    this.wrongPage = 'redirect.html?redirect=2';

    this.initialPageQuiz = 'quiz.html?quiz=1'
  }

  structures = [
    {
      pageTitle: "Quiz 1 - Gamer Testing",
      question: "Quais destes jogos são exclusivos do PS4?",
      options: {
        first: ["Until Dawn", "Bloodborne", "Horizon: Zero Dawn", "The Last of Us", "God of War"],
        second: ["Dota 2", "CS: GO", "VRs Chat", "Undertale", "Portal 2"],
        third: ["Black Desert", "Days Gone", "COD: Warzone", "NBA 2K21", "Cyberpunk 2077"],
      },
      theRightOne: "left",
    },
    {
      pageTitle: "Quiz 2 - Gamer Testing",
      question: "Quais destes jogos são lançamentos exclusivos da Ubisoft?",
      options: {
        first: ["Just Dance 2021", "Série Tom Clancy's", "Ghost of Tsushima", "No Man's Sky", "Until Dawn"],
        second: ["Minecraft", "Sea of Thieves", "Dead by Daylight", "Destiny 2", "Tell me Why"],
        third: ["Watch Dogs 2", "Assassin's Creed", "Watch Dogs 2", "Far Cry 4", "The Crew 2"]
      },
      theRightOne: "right",
    },
    {
      pageTitle: "Quiz 3 - Gamer Testing",
      question: "Escolha apenas os jogos premiados na Game Awards 2020.",
      options: {
        first: ["Demon's Souls", "Half-Life: Alyx", "Cyberpunk 2077", "Doom Eternal", "Marvel's Avengers"],
        second: ["The Last Of Us 2", "Among Us", "LOL", "Phasmophobia", "Hades"],
        third: ["Rocket Arena", "Valorant", "Dota 2", "Fortnite", "Apex Legends"]
      },
      theRightOne: "center",
    },
    {
      pageTitle: "Quiz 4 - Gamer Testing",
      question: "Escolha apenas os consoles de quarta geração (1993-1999).",
      options: {
        first: ["Virtual Boy", "Nintendo 64", "PocketStation", "Atari Jaguar", "PlayStation 1"],
        second: ["Super Game Boy", "Super Nintendo", "Mega Drive", "Sega Saturn", "Casio PV-1000"],
        third: ["Atari 2600", "Neo-Geo", "Pokémon Mini", "Nintendo DS", "Master System"]
      },
      theRightOne: "left",
    },
    {
      pageTitle: "Quiz 5 - Gamer Testing",
      question: "Quais destes são os 5 consoles mais vendidos do mundo?",
      options: {
        first: ["PlayStation 2", "Nintendo DS", "PlayStation 1", "Game Boy", "Nintendo Wii"],
        second: ["Game Boy Advance", "Xbox One", "Nintendo Switch", "PlayStation 3", "PlayStation 4"],
        third: ["Mega Drive", "Xbox 360", "PlayStation 5", "Mega Drive", "Nintendo 3DS"]
      },
      theRightOne: "left",
    },
    {
      pageTitle: "Quiz 6 - Gamer Testing",
      question: "Quais destes consoles foram feitos pela Nintendo?",
      options: {
        first: ["Nintendo Switch", "Nintendo 64", "Color TV-Game", "NES Classic", "Mega Drive"],
        second: ["Game Boy", "Wii", "Super Nintendo", "GameCube", "Wii U"],
        third: ["Nintendo 3DS", "Atari 5200", "Nintendo Wii", "PlayStation 2", "Sega Saturn"]
      },
      theRightOne: "center",
    },
    {
      pageTitle: "Quiz 7 - Gamer Testing",
      question: "Escolha os jogos de estilo MMORPG",
      options: {
        first: ["Black Desert", "League of Legends", "Aika Online", "The Witcher 3", "Dark Souls"],
        second: ["World of Warcraft", "Ragnarok Online", "TERA", "Perfect World", "MU Legend"],
        third: ["Undertale", "Skyrim", "Neverwinter", "Path of Exile", "Nier: Automata"]
      },
      theRightOne: "center",
    },
    {
      pageTitle: "Quiz 8 - Gamer Testing",
      question: "Quais destes jogos são MOBA?",
      options: {
        first: ["Battlerite", "Teamfight Tactics", "Vainglory", "League of Legends", "Left 4 Dead"],
        second: ["Overwatch", "Warframe", "Team Fortress 2", "Payday 2", "Loadout"],
        third: ["Dota 2", "Smite", "League of Legends", "Paladins", "Clash Royale"]
      },
      theRightOne: "right",
    },
    {
      pageTitle: "Quiz 9 - Gamer Testing",
      question: "Quais destes contém 5 personagens da Saga GTA?",
      options: {
        first: ["Big Smoke", "Carl Johnson (CJ)", "Charles Smith", "Aloy", "Eddie Winter"],
        second: ["Niko Bellic", "Trevor Phillips", "Franklin Clinton", "Tommy Vercetti", "Denise Robinson"],
        third: ["Marcus Holloway", "Pagan Min", "Deacon Lee", "Brian Johnson", "Claude"]
      },
      theRightOne: "center",
    },
    {
      pageTitle: "Quiz 10 - Gamer Testing",
      question: "Quais destes contém 5 vilões da saga Resident Evil?",
      options: {
        first: ["Jack Baker", "Bloodshot", "Duvalia", "Hazmat", "The Spitter"],
        second: ["Volatiles", "Kyle Crane", "The Boomer", "Lurkers", "Creepers"],
        third: ["Del Lago", "Dr. Salvador", "El Gigante", "Mr. X", "Nemesis"]
      },
      theRightOne: "right",
    }
  ]

  loadPageStructure(page) {
    const pageInfo = this.structures[page - 1];

    this.clearLocalStorageIfQuizStart(page)
    this.setPageInfo(pageInfo, page)
    this.handleDivClick(pageInfo)
  }

  handleDivClick(pageSelected) {
    this.$everyDiv.forEach(element => {
      element.addEventListener('click', _ => {
        this.switchClassName(element)
        this.handleAnswer(pageSelected.theRightOne, this.elementName)
      });
    });
  }

  handleAnswer(correctOne, selected) {
    this.changeDivClassesOnClick(correctOne)

    correctOne === selected ? localStorage.setItem(`counter${Math.random() * 100000}`, '') : null;
    correctOne === selected ? this.redirect(this.rightPage) : this.redirect(this.wrongPage)
  }

  clearLocalStorageIfQuizStart(currentPage) {
    if (currentPage === 1 || window.location.href === this.initialPageQuiz) {
      localStorage.clear()
    }
  }

  setPageInfo(pageInfo, page) {
    document.title = pageInfo.pageTitle;
    this.questionEl.innerHTML = pageInfo.question;

    document.querySelectorAll('ul').forEach(element => {
      this.loadListOptions(element, page);
    });
  }

  loadListOptions(element, page) {
    this.chooseOptionBasedOnClass(element, page)
    this.insertListOfOptions(element)
  }

  chooseOptionBasedOnClass(element, page) {
    switch (element.className) {
      case 'leftside-answers': this.listOptions = this.structures[page - 1].options.first; break;
      case 'centerside-answers': this.listOptions = this.structures[page - 1].options.second; break;
      case 'rightside-answers': this.listOptions = this.structures[page - 1].options.third; break;
    }
  }

  insertListOfOptions(respectiveElement) {
    for (const listOption of this.listOptions) {
      let li = document.createElement('li');
      li.innerText = listOption;
      respectiveElement.appendChild(li);
    }
  }

  switchClassName(element) {
    switch (element.className) {
      case 'leftside-div': this.elementName = 'left'; break;
      case 'centerside-div': this.elementName = 'center'; break;
      case 'rightside-div': this.elementName = 'right'; break;
    }
  }

  changeDivClassesOnClick(correctOne) {
    let leftSufix = correctOne === "left" ? "" : "-no-display";
    let centerSufix = correctOne === "center" ? "" : "-no-display";
    let rightSufix = correctOne === "right" ? "" : "-no-display";

    this.$leftDiv.classList.replace('leftside-div', `leftside-div-js${leftSufix}`);
    this.$centerDiv.classList.replace('centerside-div', `centerside-div-js${centerSufix}`);
    this.$rightDiv.classList.replace('rightside-div', `rightside-div-js${rightSufix}`);
  }

  redirect(path) {
    setTimeout(() => {
      window.location.href = path;
    }, 2000);
  }
}