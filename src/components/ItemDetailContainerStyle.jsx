import { preloaderStyle } from "../assets/PreloaderStyle";
export const itemDetailContainerStyle = (theme) => {
    return {
        itemDetailContainer: {
            display: "flex",
            justifyContent: "center",
            rowGap: "2rem",
        },
        ...preloaderStyle,
    };
};
