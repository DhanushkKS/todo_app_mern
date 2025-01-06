import {todoApi} from "../redux/Todo/api.ts";

export const rootMiddleware = [
/*Create RTK Query requests/mutations under the redux folder*/
todoApi.middleware
];
