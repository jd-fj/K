// useFairyDustCursor.tsx
import { useEffect } from 'preact/hooks';

class Particle {
  initialLifeSpan!: number;
  lifeSpan!: number;
  velocity!: { x: number, y: number };
  position!: { x: number, y: number };
  canv!: HTMLCanvasElement;

  constructor(x: number, y: number, canvasItem: HTMLCanvasElement) {
    this.reset(x, y, canvasItem);
  }

  reset(x: number, y: number, canvasItem: HTMLCanvasElement) {
    const lifeSpan = Math.floor(Math.random() * 30 + 60);
    this.initialLifeSpan = lifeSpan;
    this.lifeSpan = lifeSpan;
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
      y: Math.random() * 0.7 + 0.9,
    };
    this.position = { x: x - 6, y: y - 10 };
    this.canv = canvasItem;
  }

  update(context: CanvasRenderingContext2D) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.lifeSpan--;

    this.velocity.y += 0.02;

    const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0);

    context.drawImage(
      this.canv,
      this.position.x - (this.canv.width / 2) * scale,
      this.position.y - this.canv.height / 2,
      this.canv.width * scale,
      this.canv.height * scale
    );
  }
}

class ParticlePool {
  private readonly particles: Particle[] = [];
  private nextAvailable = 0;

  constructor(size: number, canvasItem: HTMLCanvasElement) {
    for (let i = 0; i < size; i++) {
      this.particles[i] = new Particle(0, 0, canvasItem);
    }
  }

  getParticle(x: number, y: number, canvasItem: HTMLCanvasElement) {
    const particle = this.particles[this.nextAvailable];
    particle.reset(x, y, canvasItem);

    this.nextAvailable = (this.nextAvailable + 1) % this.particles.length;

    return particle;
  }
}

export function useFairyDustCursor(options?: { colors?: string[], element?: HTMLElement }) {
  useEffect(() => {
    const fairyDust = fairyDustCursor(options);

    return () => {
      fairyDust.destroy();
    };
  }, []);

  const fairyDustCursor = (options?: { colors?: string[], element?: HTMLElement }) => {
    let possibleColors = options?.colors || [
      "#000000",
      "#000000",
      "#000000",
    ];
    let hasWrapperEl = options?.element;
    let element = hasWrapperEl || document.body;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const cursor = { x: width / 2, y: width / 2 };
    const lastPos = { x: width / 2, y: width / 2 };
    const particles: Particle[] = [];
    const canvImages: HTMLCanvasElement[] = [];
    let particlePool: ParticlePool;
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;

    const chars = ["✦"]

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    function init() {
      particlePool = new ParticlePool(1000, canvas);  // Changed canvasItem to canvas
      if (prefersReducedMotion.matches) {
        console.log(
          "This browser has prefers reduced motion turned on, so the cursor did not init"
        );
        return false;
      }

      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");

      if (!context) {
        console.error("Failed to get 2D context");
        return;
      }
      canvas.style.top = "0px";
      canvas.style.left = "0px";
      canvas.style.pointerEvents = "none";

      if (hasWrapperEl) {
        canvas.style.position = "absolute";
        element.appendChild(canvas);
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        canvas.style.position = "fixed";
        element.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
      }

      context.font = "21px serif";
      context.textBaseline = "middle";
      context.textAlign = "center";

      possibleColors.forEach((color) => {
        const randomChar = chars[Math.floor(Math.random() * chars.length)]; // Select a random char from the array
        let measurements = context!.measureText(randomChar); // Use randomChar instead of char

        let bgCanvas = document.createElement("canvas");
        let bgContext = bgCanvas.getContext("2d");

        if (!bgContext) {
          console.error("Failed to get 2D context for bgCanvas");
          return;
        }

        bgCanvas.width = measurements.width;
        bgCanvas.height =
          measurements.actualBoundingBoxAscent +
          measurements.actualBoundingBoxDescent;

        bgContext.fillStyle = color; // Here we set the color for the fill
        bgContext.textAlign = "center";
        bgContext.font = "21px serif";
        bgContext.textBaseline = "middle";

        bgContext.fillText(
          randomChar,
          bgCanvas.width / 2,
          measurements.actualBoundingBoxAscent
        );

        canvImages.push(bgCanvas);
      });

      bindEvents();
      loop();
    }

    function bindEvents() {
      element.addEventListener("mousemove", onMouseMove);
      element.addEventListener("touchmove", onTouchMove, { passive: true });
      element.addEventListener("touchstart", onTouchMove, { passive: true });
      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize(_e: any) {
      width = window.innerWidth;
      height = window.innerHeight;

      if (hasWrapperEl) {
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        canvas.width = width;
        canvas.height = height;
      }
    }

    function onTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          addParticle(
            e.touches[i].clientX,
            e.touches[i].clientY,
            canvImages[Math.floor(Math.random() * canvImages.length)]
          );
        }
      }
    }

    function onMouseMove(e: { clientX: number; clientY: number; }) {
      window.requestAnimationFrame(() => {
        if (hasWrapperEl) {
          const boundingRect = element.getBoundingClientRect();
          cursor.x = e.clientX - boundingRect.left;
          cursor.y = e.clientY - boundingRect.top;
        } else {
          cursor.x = e.clientX;
          cursor.y = e.clientY;
        }

        const distBetweenPoints = Math.hypot(
          cursor.x - lastPos.x,
          cursor.y - lastPos.y
        );

        if (distBetweenPoints > 0) {
          addParticle(
            cursor.x,
            cursor.y,
            canvImages[Math.floor(Math.random() * canvImages.length)]
          );

          lastPos.x = cursor.x;
          lastPos.y = cursor.y;
        }
      });
    }

    function addParticle(x: number, y: number, color: HTMLCanvasElement) {
      particles.push(particlePool.getParticle(x, y, color));
    }

    function updateParticles() {
      if (particles.length == 0) {
        return;
      }

      context!.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(context!);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].lifeSpan < 0) {
          particles.splice(i, 1);
        }
      }

      if (particles.length == 0) {
        context!.clearRect(0, 0, width, height);
      }
    }

    function loop() {
      updateParticles();
      animationFrame = requestAnimationFrame(loop);
    }

    function destroy() {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onWindowResize);
      element.removeEventListener("mousemove", onMouseMove);
      element.removeEventListener("touchmove", onTouchMove);
      element.removeEventListener("touchstart", onTouchMove);

      if (canvas) {
        canvas.remove();
      }
    }

    init();

    return { destroy };
  };
}
