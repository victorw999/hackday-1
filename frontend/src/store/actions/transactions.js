export const createTransaction = users => {
  var newKey = genKey();

  var newSender = randParty(users, "");
  var newReceiver = randParty(users, newSender);
  var newAmt = randAmt(users, newSender);
  var newPayload = {};
  newPayload[newKey] = {
    sender: newSender,
    receiver: newReceiver,
    amt: newAmt
  };
  return (dispatch, getState) => {
    dispatch({
      type: "CREATE_TRANS",
      payload: newPayload
    });
  };
};

// generate transaction key
const genKey = () => {
  return Math.random()
    .toString(36)
    .substring(2, 15);
};

// generate sender & receiver
const randParty = (users, disregard) => {
  var candidates = [...Object.keys(users)];
  if (disregard !== "") {
    // remove certain ppl from the candidates list, so sender/receiver are diff person
    candidates = candidates.filter(c => c !== disregard);
  }
  var result = candidates[Math.floor(Math.random() * candidates.length)]; // pick random sender
  return result;
};

// generate transact amt
const randAmt = (users, sender) => {
  var current_sushi = users[sender].sushi;
  var max = sender === "bank" ? 10 : current_sushi / 2; // random ceiling
  var rand = Math.floor(Math.random() * max + 1);
  // console.log("current:", current_sushi, " rand:", rand);
  return rand;
};
