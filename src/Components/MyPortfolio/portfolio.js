class Portfolio {
    constructor(img_src, title, app_link, repo_link, text) {
        this.img_src = img_src;
        this.title = title;
        this.app_link = app_link;
        this.repo_link = repo_link;
        this.text = text;
    }
}

const PORTFOLIO = [
    new Portfolio('./project-1.png', 'Trading Game', "https://kevinngth.github.io/Project-1-Game/", "https://github.com/kevinngth/Project-1-Game", "this is my project 1"),
    new Portfolio('./project-2.png', 'Jyggr', "https://jyggr.herokuapp.com/", "https://github.com/kevinngth/project-2-App", "this is my project 2"),
    new Portfolio('./project-3.png', 'Nat-Jio', "https://nat-jio.herokuapp.com/", "https://github.com/kevinngth/traveller-guide-app", "this is my project 3"),
    new Portfolio('./project-4.png', 'Quizter', "http://quizter.herokuapp.com/", "https://github.com/EugeneTan9/Quizter", "this is my project 4"),
];

export default PORTFOLIO;