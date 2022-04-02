import { createRootReducer, initialState } from "../reducers";
import { rootSaga } from "../sagas";
import { applyMiddleware, createStore as createReduxStore } from "redux";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

axios.interceptors.request.use(async (cfg) => {
  cfg.headers = { ...cfg.headers, Authorization: `Bearer qwerty123` };
  return cfg;
});

const initializeSagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const enhancer = composeEnhancers(applyMiddleware(initializeSagaMiddleware));
export const store = createReduxStore(
  createRootReducer(),
  initialState,
  enhancer
);

initializeSagaMiddleware.run(rootSaga);
