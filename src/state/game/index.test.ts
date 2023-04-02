import gameReducer, {
    gameSlice,
    setLatestScore,
    selectGameLatestScore,
    GameState
  } from './index';
  
  describe('game reducer', () => {
    const initialState: GameState = {
      latestScore: 0
    };
    it('should handle initial state', () => {
      expect(gameReducer(undefined, { type: 'unknown' })).toEqual({
        latestScore: 0
      });
    });
  
    it('should handle increment', () => {
      const actual = gameReducer(initialState, setLatestScore(8));
      expect(actual.latestScore).toEqual(8);
    });
  });
  