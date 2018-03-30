function goodVsEvil(good, evil){
  //splits both the good and evil army strings so that they can be traversed with
//  index and stores them in respective variables
  // the powerGood and powerEvil variables store the sumed amounts of power
  let goodArmy = good.split(' ');
  let evilArmy = evil.split(' ');
  let powerGood = goodArmy[0]*1+goodArmy[1]*2+goodArmy[2]*3+goodArmy[3]*3+goodArmy[4]*4+goodArmy[5]*10;
  let powerEvil = evilArmy[0]*1+evilArmy[1]*2+evilArmy[2]*2+evilArmy[3]*2+evilArmy[4]*3+evilArmy[5]*5+evilArmy[6]*10;


//if powerEvil is greater than powerGood return Battle Result: Evil eradicates all trace of Good
//if powergood is greater than powerEvil return Battle Result: Good triumphs over Evil
//if its a draw (both values are equal) return Battle Result: No victor on this battle field
  if(powerEvil>powerGood){
  	return 'Battle Result: Evil eradicates all trace of Good';
  } else if(powerEvil<powerGood){
  	return 'Battle Result: Good triumphs over Evil';
  } else {
  	return 'Battle Result: No victor on this battle field';
  }
}
