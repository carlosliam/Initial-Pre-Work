// I was previously familiar with all the concepts I needed for the card counting function.

var count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6)
    count++;
  if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A')
    count--;

  if (count <= 0)
    return count + " Hold";
  return count + " Bet";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
