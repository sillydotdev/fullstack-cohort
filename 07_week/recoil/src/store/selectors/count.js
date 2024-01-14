import { countAtom } from "../atoms/count"

export const evenSelector = selector({
    name: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2;
    }
});