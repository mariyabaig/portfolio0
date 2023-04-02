import React, { useRef, useEffect } from "react";

function Drawing() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    function draw(e) {
      if (!isDrawing) return;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      [lastX, lastY] = [e.clientX, e.clientY];
      hue++;
      if (hue >= 360) {
        hue = 0;
      }
      if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
      if (direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
    }

    canvas.addEventListener("mousedown", (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.clientX, e.clientY];
    });

    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));
    canvas.addEventListener("scroll", draw);

    return () => {
      canvas.removeEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.clientX, e.clientY];
      });
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", () => (isDrawing = false));
      canvas.removeEventListener("mouseout", () => (isDrawing = false));
      canvas.removeEventListener("scroll", draw);
    };
  }, []);

  return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />;
}

export default Drawing;
