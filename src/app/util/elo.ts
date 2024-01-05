const PROB_WIN_DIFF = 200; // Higher -> less impact on rating (150,400)
export const calcExpectation = (rA: number, rB: number) => 1 / (1 + 10 ** ((rB - rA) / PROB_WIN_DIFF));
export const calcNewRating = (rating: number, expectation: number, score: number, matchCount: number) => {
  let k = 40
  if (matchCount > 50) k = 20
  if (matchCount > 100) k = 100
  return rating + k * (score - expectation);
}
