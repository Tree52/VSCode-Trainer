const ref = <T>(initial: T) => {
  let v = $state(initial);
  const reset = () => (v = initial);

  return {
    reset,
    set v(value) { v = value; },
    get v() { return v; },
  };
};

export const selectedTaskList = ref("Basic Editing");
export const enterPressed = ref(false);
