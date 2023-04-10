export function getBestHand(cards: any) {
  const cardsRank = [];
  cards.map((card) => cardsRank.push(card.slice(0, -1)));

  console.log(cardsRank);

  const cardOccurence: any = Object.values(
    cardsRank.reduce((occur, i) => {
      return occur[i] ? ++occur[i] : (occur[i] = 1), occur;
    }, {})
  );

  const maxOccurence = Math.max(...cardOccurence);
  console.log(maxOccurence);

  let bestHand = "none";

  // pair
  if (maxOccurence == 2) {
    console.log("pair");
    bestHand = "pair";
  }

  // 3-of-a-kind
  if (maxOccurence == 3) {
    console.log("3-of-a-kind");
    bestHand = "3-of-a-kind";
  }

  // straight
  if (
    (cardsRank.includes("A") &&
      cardsRank.includes("2") &&
      cardsRank.includes("3") &&
      cardsRank.includes("4") &&
      cardsRank.includes("5")) ||
    (cardsRank.includes("2") &&
      cardsRank.includes("3") &&
      cardsRank.includes("4") &&
      cardsRank.includes("5") &&
      cardsRank.includes("6")) ||
    (cardsRank.includes("3") &&
      cardsRank.includes("4") &&
      cardsRank.includes("5") &&
      cardsRank.includes("6") &&
      cardsRank.includes("7")) ||
    (cardsRank.includes("4") &&
      cardsRank.includes("5") &&
      cardsRank.includes("6") &&
      cardsRank.includes("7") &&
      cardsRank.includes("8")) ||
    (cardsRank.includes("5") &&
      cardsRank.includes("6") &&
      cardsRank.includes("7") &&
      cardsRank.includes("8") &&
      cardsRank.includes("9")) ||
    (cardsRank.includes("6") &&
      cardsRank.includes("7") &&
      cardsRank.includes("8") &&
      cardsRank.includes("9") &&
      cardsRank.includes("10")) ||
    (cardsRank.includes("7") &&
      cardsRank.includes("8") &&
      cardsRank.includes("9") &&
      cardsRank.includes("10") &&
      cardsRank.includes("J")) ||
    (cardsRank.includes("8") &&
      cardsRank.includes("9") &&
      cardsRank.includes("10") &&
      cardsRank.includes("J") &&
      cardsRank.includes("Q")) ||
    (cardsRank.includes("9") &&
      cardsRank.includes("10") &&
      cardsRank.includes("J") &&
      cardsRank.includes("Q") &&
      cardsRank.includes("K")) ||
    (cardsRank.includes("10") &&
      cardsRank.includes("J") &&
      cardsRank.includes("Q") &&
      cardsRank.includes("K") &&
      cardsRank.includes("A"))
  ) {
    console.log("straight");
    bestHand = "straight";
  }

  // 4-of-a-kind
  if (maxOccurence == 4) {
    console.log("4-of-a-kind");
    bestHand = "4-of-a-kind";
  }

  // royal flush
  if (
    (cards.includes("AS") &&
      cards.includes("KS") &&
      cards.includes("QS") &&
      cards.includes("JS") &&
      cards.includes("10S")) ||
    (cards.includes("AC") &&
      cards.includes("KC") &&
      cards.includes("QC") &&
      cards.includes("JC") &&
      cards.includes("10C")) ||
    (cards.includes("AD") &&
      cards.includes("KD") &&
      cards.includes("QD") &&
      cards.includes("JD") &&
      cards.includes("10D")) ||
    (cards.includes("AH") &&
      cards.includes("KH") &&
      cards.includes("QH") &&
      cards.includes("JH") &&
      cards.includes("10H"))
  ) {
    console.log("royal flush");
    bestHand = "royal flush";
  }

  // joker
  if (cards.includes("JOKER")) {
    console.log("got a joker");
    bestHand = "joker";
  }

  return bestHand;
}
