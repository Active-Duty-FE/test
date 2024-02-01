import Util from "./util";

export function useUtil(){
    const util = new Util(2, 4)
    util.add()
    util.multi()
}