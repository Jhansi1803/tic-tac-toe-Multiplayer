let InitModule = function (ctx, logger, nk, initializer) {

  const matchInit = function (ctx, logger, nk, params) {
    return {
      state: {
        board: Array(9).fill(""),
        turn: "X",
      },
      tickRate: 1,
      label: "tic-tac-toe-match",
    };
  };

  const matchJoin = function (ctx, logger, nk, dispatcher, tick, state, presences) {
    return { state };
  };

  const matchLoop = function (ctx, logger, nk, dispatcher, tick, state, messages) {

    messages.forEach((msg) => {
      const data = JSON.parse(msg.data);

      if (state.board[data.index] === "") {
        state.board[data.index] = state.turn;
        state.turn = state.turn === "X" ? "O" : "X";
      }
    });

    dispatcher.broadcastMessage(1, JSON.stringify(state));

    return { state };
  };

  const matchLeave = function (ctx, logger, nk, dispatcher, tick, state, presences) {
    return { state };
  };

  const matchTerminate = function (ctx, logger, nk, dispatcher, tick, state, graceSeconds) {
    return { state };
  };

  const matchSignal = function (ctx, logger, nk, dispatcher, tick, state, data) {
    return { state, data: "signal received" };
  };

  initializer.registerMatch("tic-tac-toe-match", {
    matchInit,
    matchJoin,
    matchLoop,
    matchLeave,
    matchTerminate,
    matchSignal,
  });
};

globalThis.InitModule = InitModule;