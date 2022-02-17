const debounce = (n: number, fn: (...params: unknown[]) => unknown, immed = false) => {
  let timer: number | undefined;
  return function (this: unknown, ...args: unknown[]) {
    if (timer === undefined && immed) {
      fn.apply(this, args);
    }
    clearTimeout(timer);
    timer = window.setTimeout(() => fn.apply(this, args), n);
    return timer;
  };
};
export default debounce;
