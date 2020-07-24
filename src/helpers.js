export function clicker = () => {
  setCounter(counter + 1);
  if(counter >= 4){
    setMessage("wow you like clicking")
  } else if (counter >= 9){
    setMessage("careful now you'll break it!")
  }
}
