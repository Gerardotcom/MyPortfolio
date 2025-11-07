import { useEffect } from "react";

const BackgroundAnimated = () => {
  useEffect(() => {
    const canvasEl = document.getElementById("backgroundCanvas") as HTMLCanvasElement | null;
    if (!canvasEl) return;

    const context = canvasEl.getContext("2d");
    if (!context) return;

    const canvas = canvasEl; // ✅ TypeScript ya sabe que esto NO es null
    const ctx = context;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points: { x: number; y: number; vx: number; vy: number }[] = [];
    const maxPoints = 100;

    for (let i = 0; i < maxPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDarkMode = document.documentElement.classList.contains("dark");

      const triangleFillColor = isDarkMode
        ? "rgba(0, 119, 255, 0.02)"
        : "rgba(0, 119, 255, 0.04)";
      const triangleStrokeColor = isDarkMode
        ? "rgba(138, 199, 255, 0.07)"
        : "rgba(226, 238, 255, 0.08)"; 

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          const distance1 = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (distance1 < 110) {
            for (let k = j + 1; k < points.length; k++) {
              const p3 = points[k];
              const distance2 = Math.hypot(p2.x - p3.x, p2.y - p3.y);
              const distance3 = Math.hypot(p1.x - p3.x, p1.y - p3.y);

              if (distance2 < 100 && distance3 < 100) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineTo(p3.x, p3.y);
                ctx.closePath();

                ctx.fillStyle = triangleFillColor;
                ctx.fill();
                ctx.strokeStyle = triangleStrokeColor;
                ctx.lineWidth = 2;
                ctx.stroke();
              }
            }
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      id="backgroundCanvas"
      className="w-screen h-screen bg-gradient-to-b from-sky-200 to-blue-400 dark:from-slate-900 dark:to-blue-950/90 transition-colors duration-500"
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    ></canvas>
  );
};

export default BackgroundAnimated;
