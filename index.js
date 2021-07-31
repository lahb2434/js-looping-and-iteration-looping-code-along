// Code your solutions in this file
function writeCards(friends, holiday) {
    let cards = []
    for (let x = 0; x < friends.length; x++) {
      cards.push(`Thank you, ${friends[x]}, for the wonderful ${holiday} gift!`);
    }
    return cards
}

function countDown(num) {
    while (num >= 0 ){
        console.log(num)
        num--;
    } 
}