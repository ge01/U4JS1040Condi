var favoriteFood = prompt("What is your favorite food?");
  if(favoriteFood == 'popcorn'){
    alert("Yum, popcorn!");
  } else {
    alert('Consider eating more popcorn.');
  }

  var favoriteMovie = prompt('What is your favorite movie?');
    switch (favoriteMovie) {
      case 'Star Wars':
        alert('Use the Force, Luke.');
        break;
      case 'King Kong':
        alert('It was beauty killed the beast.');
        break;
      default:
        alert('Sorry, I do not have a good quote.');
    }
