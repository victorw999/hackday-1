export default () => {
  const getIcon = () => {
    let rand = Math.floor(Math.random() * Math.floor(10));
    return `https://picsum.photos/seed/${rand}/80`;

    // setTimeout(() => {
    //   // return "https://picsum.photos/200";

    // }, rand);
  };
  return {
    users: [
      { uid: 11, name: "alpha", sushi: 5, icon: getIcon() },
      { uid: 22, name: "bravo", sushi: 5, icon: getIcon() },
      { uid: 33, name: "charlie", sushi: 5, icon: getIcon() },
      { uid: 44, name: "delta", sushi: 5, icon: getIcon() },
      { uid: 55, name: "echo", sushi: 5, icon: getIcon() }
    ]
  };
};
