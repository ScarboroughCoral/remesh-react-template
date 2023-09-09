import { Remesh } from "remesh";
import { RemeshReduxDevtools } from "remesh-redux-devtools";

export const store = Remesh.store({
    inspectors: [RemeshReduxDevtools()]
})