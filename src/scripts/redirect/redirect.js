export default class Redirect {
    constructor() {
        this.$topMessage = document.querySelector('.topMessage-js')
        this.$bottomMessage = document.querySelector('.bottomMessage-js')
        this.$body = document.querySelector('.body')
        this.history = document.referrer
        this.urlBase = 'http://127.0.0.1:5500/src/pages/quiz.html';
        this.quizNum = 0;
        this.resultPage = 'http://127.0.0.1:5500/src/pages/redirect.html?redirect=3'
    }

    structures = [
        {
            pageTitle: "Gamer Testing - Redirecting...",
            topMessage: "Você mais uma vez provou que é um gamer de verdade.",
            bottomMessage: "Redirecionando para a próxima pergunta. Prepare-se.",
            topClass: "redirectFirstMessageTop",
            bottomClass: "redirectFirstMessageBottom",
            bodyImageClass: "bodyFirstImage"
        },
        {
            pageTitle: "Gamer Testing - Redirecting...",
            topMessage: "Não foi dessa vez, Player!",
            bottomMessage: "Redirecionando para a próxima pergunta. Prepare-se.",
            topClass: "redirectSecondMessageTop",
            bottomClass: "redirectSecondMessageBottom",
            bodyImageClass: "bodySecondImage"
        },
        {
            pageTitle: "Gamer Testing - Ending",
            topMessage: "Parabéns, você concluiu o nosso teste.",
            bottomMessage: `A sua pontuação foi ${localStorage.length} de 10.`,
            topClass: "finishMessageTop",
            bottomClass: "finishMessageBottom",
            bodyImageClass: "bodyThirdImage",
        }
    ]

    loadPageStructure(page) {
        const pageInfo = this.structures[page - 1]

        //Setting page title
        document.title = pageInfo.pageTitle;

        //Setting top message: 
        this.$topMessage.innerHTML = pageInfo.topMessage

        //Setting bottom message:
        this.$bottomMessage.innerHTML = pageInfo.bottomMessage

        //Adding class to the h1, p:
        this.$topMessage.classList.add(pageInfo.topClass)
        this.$bottomMessage.classList.add(pageInfo.bottomClass)

        //Adding background-image
        this.$body.classList.add(pageInfo.bodyImageClass)

        this.redirectToNextPage(this.history)
    }

    handleTimeout(pageChosen, time = 3000) {
        setTimeout(() => {
            window.location.href = pageChosen
        }, time);
    }

    handleRedirection(urlChosen) {
        let urlParameters = new URL(urlChosen).searchParams;
        let quizParameter = urlParameters.get('quiz');

        this.quizNum = Number(quizParameter) + 1

        if (window.location.href !== this.resultPage)
            this.handleTimeout(`${this.urlBase}?quiz=${this.quizNum}`)
    }

    redirectToNextPage(url) {
        if (url === `${this.urlBase}?quiz=10`) {
            this.handleTimeout(this.resultPage)
            return;
        }

        if (url === this.urlBase) {
            this.handleTimeout(`${this.urlBase}?quiz=2`)
            return;
        }

        this.handleRedirection(url)
    }
}