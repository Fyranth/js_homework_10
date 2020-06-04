//Задание №2
console.log('Задание №2');
function dayDescription(n, names) {
    let n_str = n.toString().slice(-1);
   
    if(n_str=="1") {
        return names[0];
    }
    if(n_str>="2" && n_str<="4" && !(n >=12 && n <= 14)) {
        return names[1];
    }
    else if(n_str>="5" || n_str=="0" || (n >=12 && n <= 14)) {
        return names[2];
    }
}

function human(name, age, gender, interests){
    this.name = '';
    this.age = 0;
    this.gender = '';
    this.interests = [];

    this.set = function(key, value) {
        if(!key) {return;}
        this[key] = value;
    }

    if(arguments.length>=1) {
        for(let i=0; i<arguments.length; i++) {
            if(i==0) this.name = arguments[i]
            if(i==1) this.age = arguments[i]
            if(i==3) this.gender = arguments[i]
            if(i==4) this.interests = arguments[i]
        }
    }

    this.getPresentation = function () {
        let a = '';
        a = this.interests.reduce(function(a, b) {return a +', '+b});
        let pres = `Человек: ${this.name}. Возраст: ${this.age} ${dayDescription(this.age, 'год, года, лет')}. Пол: ${this.gender}. ` 
        pres += `Интересы: ${a}`;
        return pres;
    }
}

let human1 = new human();
console.log(human1);
human1.set('name', 'Ivanov Petr');
human1.set('age', 31);
human1.set('gender', 'м');
human1.set('interests', ['Рыбалка', 'Походы', 'Скалолазанье']);
console.log(human1.getPresentation());

