//Palindrome checker function that works both for String and numbers

function palin_number(number){

    // var number = 12321

    //converting the number format to string format
var str = number.toString()

//declaring the mid of the converted string in a variable 'mid'
var mid = str.length/2

//1st half of the string

//if the string length is an odd number
const ori_odd = str.slice(0,mid+1)

//if the string is an even number
const ori_even = str.slice(0,mid)



//the 2nd half of the string
var latter = str.substring(mid)


//converting the string to array of characters
var arr = latter.split("")

//reversing the characters
var rev = arr.reverse()

//rejoining them in a string format with no space/commas
var nrev = rev.join("")



//if else clause bifurcating first according to length of the string

//enters the 1st block if length = odd number
if(str.length%2==1){

    //checking if the reversed latter piece == 1st half piece of string 
    if(nrev==ori_odd){
        return "Pallindrome odd length string"
    }

    else{
        return "nah..wrong number"
    }
}

//enters the 2nd block below block if length = even number
else if(str.length%2==0){
    //checking if the reversed latter piece == 1st half piece of string
          if(nrev==ori_even){
        return "Pallindrome even length string"
    }

    else{
        return "nah..wrong number"
    }

}


}



console.log(palin_number(1221))


console.log(palin_number(12321))


console.log(palin_number(123321))

console.log(palin_number(1224561))

console.log(palin_number("pomop"))
