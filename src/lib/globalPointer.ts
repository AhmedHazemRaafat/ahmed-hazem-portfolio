export const globalPointer = { x: 0, y: 0 };

let initialized = false;

export function initGlobalPointer() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  const update = (clientX: number, clientY: number) => {
    globalPointer.x = (clientX / window.innerWidth) * 2 - 1;
    globalPointer.y = -(clientY / window.innerHeight) * 2 + 1;
  };

  const onMouseMove = (e: MouseEvent) => update(e.clientX, e.clientY);
  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    if (touch) update(touch.clientX, touch.clientY);
  };

  window.addEventListener("mousemove", onMouseMove, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: true });
}
