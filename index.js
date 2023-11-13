// let a = 12;
// let b = 10;
// let c = a+b;
// console.log(c);
//alert(c);


//inputs in js are prompt
//outputs in js are alert, console.log and confirm
//a method is a keyword with parenthesis
//outputing is string concantenations and string literals
// let ur_name = prompt("Plese enter your name:");
// let matno = prompt("Insert your maric number too:");
// let age = prompt("What's your age");
// // alert("Your name is: "+ ur_name +"\nYou are a student of CU with matric number: "+ matno +"\nYou are: " + age+ "yrs old.");
// alert(`Your name is: ${ur_name} \nYou are a student of CU with matric number: ${matno} \nYou are: ${age}yrs old`);

//control structures are 
// let w;
// for(w=0;w<10;w++){
//     alert(w);
// }

//to change the value of an existing textbos.
// function changeValue() {
//     document.getElementById('myTextbox').value = 'New Value';
// }

//variable is a memory location that stores data
//data type specifies a type of data.

//pascal cases, camel case  or case et.c for identifiers. but do not start with numbers, or symbols
//note that prompt has ok and cancel buttons

// //if-else statements
// let a=prompt("Input a number for variable a.")
// const deleteNumber = confirm("Do you want to delete this number?");
// if(deleteNumber ==true)
// {
//    if(deleteNumber==true){
//     alert("Deleted");
//     a=0
//     alert("a= "+ a);
//    }
//    else{
//     alert("Go Home");
//    }
// }

//atm simulator
// const pin = 1234;
// const bal = 10000;
// const name= prompt("Enter your name: ");
// const correctpin=prompt("Enter the pin: ")
// if(correctpin == pin){
//     const quest = prompt("What operation do you want to perform?\n1.Withdraw\n2.Balance\n3.Change pin\n4.Transfer").toLowerCase();
//     if(quest==1){
//         const info=prompt("How much do you want to withdraw?")
//         if(info<bal){
//             alert("Withdrawal done!")
//             const newbal= bal - info;
//             alert("Your Balance is: $"+ newbal);
//         }else{
//             alert("Insufficient funds");
//         }
//     }
//     if(quest==2){
//         alert("Your balance is: $"+ bal);
//     }
//     if(quest==3){
//         const info = prompt("What are you changing your pin to?");
//         pin=info;
//         alert("Pin changed");
//     }
//     if(quest==4){
//         const info = prompt("Destination account?");
//         const bank = prompt("Enter the bank");
//         const amt = prompt("Enter  the amount");
//         if(amt<bal){
//             alert("The amount has been transfered to "+info);
//             const newbal= bal - amt;
//             alert("Your Balance is: $"+ newbal);
//         }else{
//             alert("Insufficient funds");
//         }
        
//     }
// }else{
//     alert("Incorrect pin")
// }
let start = true;
let pin = 1234;
let bal = 10000;
const name= prompt("Enter your name: ");
while(start){ 
    const quest = prompt("What operation do you want to perform?\n1.Withdraw\n2.Balance\n3.Change pin\n4.Transfer\n5.End Trasactions").toLowerCase();
    const correctpin=prompt("Enter the pin: ")
    if(correctpin == pin){
        if(quest==1){
            const info=prompt("How much do you want to withdraw?")
            if(info<bal){
                alert("Withdrawal done!")
                bal -= info;
                alert("Your Balance is: $"+ bal);
            }else{
                alert("Insufficient funds");
            }
        }
        if(quest==2){
            alert("Your balance is: $"+ bal);
        }
        if(quest==3){
            const info = prompt("What are you changing your pin to?");
            pin=info;
            alert("Pin changed");
        }
        if(quest==4){
            const info = prompt("Destination account?");
            const bank = prompt("Enter the bank");
            const amt = prompt("Enter  the amount");
            if(amt<bal){
                alert("The amount has been transfered to "+info);
                bal -= amt;
                alert("Your Balance is: $"+ bal);
            }else{
                alert("Insufficient funds");
            }
        }
        if(quest==5){
            alert("Good bye!!")
            start=false;
        } 
    }
    else{
        alert("Incorrect pin")
        start=false;
    }
}

