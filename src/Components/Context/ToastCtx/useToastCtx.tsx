import { useContext } from "react";
import { toastCtx } from "./ToastProvider";

const useToastCtx = () => useContext(toastCtx);

export default useToastCtx;