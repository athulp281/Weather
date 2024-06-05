import dynamic from "next/dynamic";
export const AnimatedComponent = dynamic(() => import("./TimeStatus"), {
    ssr: false,
});
