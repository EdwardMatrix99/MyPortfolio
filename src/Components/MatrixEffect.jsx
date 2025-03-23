import React, { useEffect, useRef } from "react";

const MatrixEffect = () => {
    const canvasRef = useRef(null);
    let animationFrame;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const columns = Math.floor(canvas.width / 20);
        const drops = Array(columns).fill(0);
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0f0";
            ctx.font = "16px monospace";
            
            drops.forEach((y, i) => {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * 20, y * 20);
                drops[i] = y * 20 > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
            });
            
            animationFrame = requestAnimationFrame(draw);
        };

        draw();
        
        setTimeout(() => cancelAnimationFrame(animationFrame), 5000);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />;
};

export default MatrixEffect;
