
var workshop = {
    teacher: "Kyle",
    ask(question, x) {
        console.log(this.teacher, question, x);
    }
};

workshop.ask("is this a module?","NO!");