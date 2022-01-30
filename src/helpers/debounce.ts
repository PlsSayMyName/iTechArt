/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable func-names */
const debounce = (func: { apply: (arg0: unknown, arg1: unknown[]) => void }) => {
  let timer: NodeJS.Timeout | null;
  return function (...args: Array<unknown>) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 600);
  };
};

export default debounce;
