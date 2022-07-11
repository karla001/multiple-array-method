function sortedOfAge(arr){
    let newArr = arr.filter( i => i.age>17);
    let liArr = [];
    newArr.sort(function(a,b){
        if (a.lastName < b.lastName)
           return -1;
        else if (a.name == b.name)
           return 0;
        else
           return 1;
    });

    newArr.forEach(e => {
        liArr.push('<li>'+e.firstName+' '+e.lastName+' is '+e.age+'</li>');
    });

    return liArr;
}
  
 /*
 Output:
 [
     "<li>Kyle Mooney is 27</li>",
     "<li>Sarah Palin is 47</li>",
     "<li>Rick Sanchez is 78</li>",
     "<li>Morty Smith is 29</li>",
     "<li>Lev Tolstoy is 82</li>"
 ]
 */
 
 var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

console.log(sortedOfAge(peopleArray));
