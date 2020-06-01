import axios from "axios";

export const getTradeList = () => {
  return fetch(`/allCompletedOffers?apiKey=ORfbGjdg9IK4rC5IRmG48kptPkuQb5af`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((reponse) => {
      return reponse.json();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
