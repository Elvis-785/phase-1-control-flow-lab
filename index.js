

function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {
    return "This one is on me!"
  } else if (feet > 400 && feet < 2000) {
    return "That will be twenty bucks."
  } else if (feet > 2000) {
    if (feet > 2500) {
      return "No can do."
    } else {
        return "I will gladly take your thirty bucks."
    }
  
  }
}
function ternaryCheckCity(city){
  return city==="NYC"? "Ok, sounds good." : "No go."
 }

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(true) {
      case tip == "generous":
        return "Thank you so much."
      case tip == "not as generous":
        return "Thank you."
      case tip == "thanks for everything":
        return "Bye."
  }
}