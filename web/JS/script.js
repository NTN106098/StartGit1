var  john = {
    firstName: 'NGhia',
    lastName:'NGuyeen',
    birthDay: 1998,
    family:['1','2','3'],
    job: 'alone',
    ismarried: false,
    calcAge: function() {
        return 2020 - this.birthDay;
    }
};

/*console.log(john.calcAge()); */
john.calcAge();
console.log(john);