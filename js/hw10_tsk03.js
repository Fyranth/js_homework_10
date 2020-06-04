//Задание 3
console.log('Задание №3');
function User(){
    this.toString = function() {
        return this.name;    
    }
}

User.CreateAnonim = function() {
    let user = new User();
    user.name = "Анонимный";
    this.toString = function() {
        return user.name;    
    }
    return user;
}

User.CreateUser = function(data) {
    let user = new User();
    user.name = data['name'];
    user.age = data['age'];
    this.toString = function() {
        return user.name;    
    }
    return user;   
}

let Anonim = User.CreateAnonim();
console.log(Anonim.toString());

let Usver = User.CreateUser({name: 'IvanMichalych', age: 23});
console.log(Usver.toString());

