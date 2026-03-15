import { useEffect, useRef, useState, type RefObject } from "react";

export function Text({
  cubeScreenPos,
  className,
  text,
  color,
}: {
  cubeScreenPos: RefObject<{
    x: number;
    y: number;
    width: number;
    height: number;
  }>;
  className: string;
  text: string;
  color?: string;
}) {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeLetters, setActiveLetters] = useState<Set<number>>(new Set());

  useEffect(() => {
    let frameId: number;
    const newActive = new Set<number>();

    const check = () => {
      const cube = cubeScreenPos.current;
      if (!cube) return;

      const cubeLeft = cube.x - cube.width / 2;
      const cubeRight = cube.x + cube.width / 2;
      const cubeTop = cube.y - cube.height / 2;
      const cubeBottom = cube.y + cube.height / 2;

      // кешируем активные буквы для сравнения
      const updated = new Set<number>();

      for (let i = 0; i < lettersRef.current.length; i++) {
        const el = lettersRef.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        const fullyInside =
          rect.left >= cubeLeft &&
          rect.right <= cubeRight &&
          rect.top >= cubeTop &&
          rect.bottom <= cubeBottom;

        if (fullyInside) updated.add(i);
      }

      // обновляем только если реально изменилось — экономим ререндеры
      if (
        updated.size !== newActive.size ||
        [...updated].some((v) => !newActive.has(v))
      ) {
        setActiveLetters(updated);
      }

      newActive.clear();
      updated.forEach((v) => newActive.add(v));

      frameId = requestAnimationFrame(check);
    };

    frameId = requestAnimationFrame(check);
    return () => cancelAnimationFrame(frameId);
  }, [cubeScreenPos]);

  return (
    <h1 className={className}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          ref={(el) => {
            lettersRef.current[i] = el;
          }}
          className={`transition-colors duration-100 ${
            activeLetters.has(i) ? "text-black" : color ? color : "text-white"
          }`}
        >
          {ch}
        </span>
      ))}
    </h1>
  );
}
