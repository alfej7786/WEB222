var architect = {
    name: "George",
    age: 18,
    occupation: "Programmer",


    setAge: function (newName) 
    {
        this.name = newName
    },
    getAge: function () 
    {
        return this.name
    },


    setAge: function (newAge) 
    {
        this.age = newAge
    },
    getAge: function () 
    {
        return this.age
    },

    outputNameDelay: function (){
        var output= this
        setTimeout(function () {
            console.log(output.name)
        , 1000;});
    }
}

console.log()