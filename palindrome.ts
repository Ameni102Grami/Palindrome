
function rev(n: number, temp: number): number {

    return (n == 0) ? temp : rev(Math.floor(n / 10), (temp * 10) + (n % 10));
}



function ispalindrome(n: number) {
 return(rev(n, 0) == n)? 1:0
   
}


console.log(ispalindrome(10255201))
