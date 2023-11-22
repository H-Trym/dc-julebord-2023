"use client";

import Image from "next/image";
import { useEffect } from "react";

interface Settings {
  face: HTMLElement | null;
  x: number;
  y: number;
  dirX: number;
  dirY: number;
  speed: number;
}

export default function Face({
  isChristmas,
  name,
}: {
  isChristmas: boolean;
  name: string;
}) {
  const animationSettings: Settings = {
    face: null,
    x: Math.floor(Math.random() * 350 + 1),
    y: Math.floor(Math.random() * 350 + 1),
    dirX: Math.floor(Math.random() * 2 + 1),
    dirY: Math.floor(Math.random() * 2 + 1),
    speed: 4.5,
  };

  let { face, x, y, dirX, dirY, speed } = animationSettings;

  useEffect(() => {
    face = document.getElementById(`${name}-face`);
    window.requestAnimationFrame(animate);
  });

  function animate() {
    const faceWidth = 100;
    const faceHeight = 200;
    const screenHeight = document.body.clientHeight;
    const screenWidth = document.body.clientWidth;

    if (y + faceHeight >= screenHeight || y < 0) {
      dirY *= -1;
    }
    if (x + faceWidth >= screenWidth || x < 0) {
      dirX *= -1;
    }
    x += dirX * speed;
    y += dirY * speed;
    //x += dirX * (Math.random() * 0.5) * speed;
    //y += dirY * (Math.random() * 0.5) * speed;

    face && (face.style.left = x + "px");
    face && (face.style.top = y + "px");
    window.requestAnimationFrame(animate);
  }

  return (
    <>
      <Image
        src={`/${name}.png`}
        alt="trym"
        width="50"
        height="50"
        id={`${name}-face`}
        className={"face " + (isChristmas ? "face-visible" : "face-hidden")}
      />
    </>
  );
}
