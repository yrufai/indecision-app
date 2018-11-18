const fullName = "Yakubu Rufai Mahatma"
/*const getFirstName = (x) => {
    let firstName;
    if (x) {
        firstName = x.split(" ")[0];
    }
    console.log(firstName);
};

getFirstName(fullName);*/

const getFirstName = (ful)=> ful.split(" ")[0];
console.log(getFirstName(fullName));
  

const multiplier = {
    ages: [2,5,23,6,4,56,5],
    multiplyBy : 3,
    multiply(){
        return this.ages.map((c)=> c*this.multiplyBy );
    }
}
console.log(multiplier.multiply());