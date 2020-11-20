let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty','Vito','Vinny','Riley','Saddie','Marge','Sam']
let withMarmaduke = petNames
withMarmaduke.push('Marmaduke')

console.log(petNames.length)

var change = prompt("Enter number to adjust array data: \n 1. Remove Vinny \n 2. Remove Marty \n 3. Add Nancy \n 4. Add your name to the list \n 5. Riley's location in the list \n 6. Cindy's location in the array \n 7. Show list data")

if (change == '1') { 
        let vinny = petNames.indexOf("Vinny")
        withMarmaduke.splice(vinny,1)
        alert(`The action taken was: Remove Vinny \nThe remaining array data is: ${withMarmaduke}`)
        }
else if (change == '2') { 
        let marty = petNames.indexOf("Marty")
        withMarmaduke.splice(marty,1)
        alert(`The action taken was: Remove Marty \nThe remaining array data is: ${withMarmaduke}`)
        }
else if (change == '3') { 
        withMarmaduke.unshift("Nancy")
        alert(`The action taken was: Add Nancy \nThe remaining array data is: ${withMarmaduke}`)
        }
else if (change == '4'){ 
        var name = prompt("Enter your name:")
        withMarmaduke.push(name)
        alert(`The action taken was: Added ${name} \nThe remaining array data is: ${withMarmaduke}`)
        }
else if (change == '5') { 
        alert(`The index of Riley is ${petNames.indexOf("Riley")}`)
        }
else if (change == '6') {
        alert(`The index of Cindy is ${petNames.indexOf("Cindy")}`)
        }
else if (change == '7'){ 
  alert(`The array data is: ${withMarmaduke}`)
        }