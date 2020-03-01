// func get random user icons
const getIcon = () => {
  let rand = Math.floor(Math.random() * Math.floor(10));
  return `https://picsum.photos/seed/${rand}/80`;
};

// dummy data
const initState = {
  users: {
    111: { name: "alpha", sushi: 5, icon: getIcon() },
    222: { name: "bravo", sushi: 5, icon: getIcon() },
    333: { name: "charlie", sushi: 5, icon: getIcon() },
    444: { name: "delta", sushi: 5, icon: getIcon() },
    555: { name: "echo", sushi: 5, icon: getIcon() },
    bank: { name: "bank", sushi: 99999, icon: getIcon() }
  },
  transactions: {}
};

const jobReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TRANS":
      // update transacitons
      var payload = action.payload;
      var newTrans = Object.assign({}, state.transactions);
      Object.assign(newTrans, payload);

      // update users
      var sender = Object.values(payload)[0].sender;
      var receiver = Object.values(payload)[0].receiver;
      var amt = Object.values(payload)[0].amt;

      console.log(` ${sender} ${receiver} ${amt} `);
      var newUsers = Object.assign({}, state.users);
      newUsers[sender].sushi -= amt;
      newUsers[receiver].sushi += amt;

      return {
        users: Object.assign({}, newUsers),
        transactions: Object.assign({}, newTrans)
      };
    case "CREATE_ERROR":
      return state;
    default:
      return state;
  }
};

export default jobReducer;
