import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const texts = ["Programar", "Ler", "Estudar", "Aprender"];
    const navigate = useNavigate();
    const canvasRef = useRef(null);
    const mouse = useRef({ x: null, y: null });
    const particlesArray = useRef([]);

    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delay = 2000;

    // Particle class
    class Particle {
        constructor(width, height) {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 3 + 2; // Tamanho entre 2 e 5
            this.baseOpacity = 0.5;
            this.opacity = this.baseOpacity;
            this.speedX = (Math.random() - 0.5) * 0.05;
            this.speedY = (Math.random() - 0.5) * 0.05;
            this.isNearMouse = false;
        }

        draw(ctx) {
            ctx.fillStyle = `rgba(245, 158, 11, ${this.opacity})`; // amber-400
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }

        update(width, height, mouseX, mouseY) {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0) {
                this.x = 0;
                this.speedX *= -1;
            } else if (this.x > width) {
                this.x = width;
                this.speedX *= -1;
            }
            if (this.y < 0) {
                this.y = 0;
                this.speedY *= -1;
            } else if (this.y > height) {
                this.y = height;
                this.speedY *= -1;
            }

            if (mouseX !== null && mouseY !== null) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) {
                    this.isNearMouse = true;
                    this.size = Math.min(this.size + 2, 5); // Aumenta até 7px
                    this.opacity = this.baseOpacity + 0.5 * (1 - distance / 120);
                } else {
                    this.isNearMouse = false;
                    this.size = Math.max(this.size - 0.1, 2); // Volta ao tamanho base
                    this.opacity = this.baseOpacity;
                }
            } else {
                this.isNearMouse = false;
                this.size = Math.max(this.size - 0.1, 2);
                this.opacity = this.baseOpacity;
            }
        }
    }

    // Canvas animation
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particlesArray.current = [];
            const particleCount = Math.floor((canvas.width * canvas.height) / 3000);
            for (let i = 0; i < particleCount; i++) {
                particlesArray.current.push(new Particle(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesArray.current.forEach((particle) => {
                particle.update(canvas.width, canvas.height, mouse.current.x, mouse.current.y);
                particle.draw(ctx);
            });

            for (let i = 0; i < particlesArray.current.length; i++) {
                for (let j = i + 1; j < particlesArray.current.length; j++) {
                    const p1 = particlesArray.current[i];
                    const p2 = particlesArray.current[j];
                    const distance = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
                    if (distance < 120 && p1.isNearMouse && p2.isNearMouse) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(245, 158, 11, ${1 - distance / 120})`; // amber-400
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.current.x = null;
            mouse.current.y = null;
        };

        resizeCanvas();
        animate();
        window.addEventListener("resize", resizeCanvas);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    // Typing effect logic
    useEffect(() => {
        let interval;
        let timeout;

        if (!isDeleting) {
            interval = setInterval(() => {
                setText((prev) => prev + texts[textIndex].charAt(prev.length));
                if (text.length === texts[textIndex].length) {
                    clearInterval(interval);
                    timeout = setTimeout(() => setIsDeleting(true), delay);
                }
            }, typingSpeed);
        } else {
            interval = setInterval(() => {
                setText((prev) => prev.slice(0, prev.length - 1));
                if (text.length === 0) {
                    clearInterval(interval);
                    setIsDeleting(false);
                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }, deletingSpeed);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [text, isDeleting, textIndex, texts]);

    return (
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
            {/* Hero Section com Partículas */}
            <div className="relative overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-x-0 top-0 w-full h-screen z-0 pointer-events-auto"
                />
                <section className="container mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center justify-between relative z-10 pointer-events-none">
                    <div className="mt-10 md:mt-0 flex flex-col items-center md:items-start md:w-1/2 mb-10 md:mb-0 pointer-events-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center md:text-left leading-tight">
                            <span className="text-white">Olá, eu sou </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">João Vitor Rossi Ferreira</span>
                        </h1>
                        
                        <div className="text-2xl sm:text-3xl md:text-4xl mb-8 text-center md:text-left">
                            <span className="text-gray-300">Eu amo </span>
                            <span className="text-amber-400 border-r-2 border-amber-400 animate-pulse">
                                {text}
                            </span>
                        </div>
                        
                        <p className="text-lg sm:text-xl md:text-xl text-gray-300 mb-8 text-center md:text-left max-w-lg leading-relaxed">
                            Desenvolvedor apaixonado por transformar café em código e ideias em realidade. 
                            Quando não estou programando, provavelmente estou lendo um bom livro ou 
                            tentando aprender algo novo (mesmo que não seja sobre tecnologia!).
                        </p>
                        
                        <div className="flex space-x-4 pointer-events-auto">
                            <button 
                                onClick={() => navigate('/projetos')}
                                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                            >
                                Meus Projetos
                            </button>
                            <button 
                                onClick={() => navigate('/sobre-mim')}
                                className="px-8 py-3 border-2 border-amber-400 text-amber-400 rounded-full font-medium hover:bg-amber-400 hover:bg-opacity-10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                            >
                                Sobre Mim
                            </button>
                        </div>
                    </div>

                    <div className="relative pointer-events-auto">
                        <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-md opacity-75 animate-pulse"></div>
                        <img
                            src="rossi.jpeg"
                            alt="João Vitor Rossi Ferreira"
                            className="relative rounded-full object-cover w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-gray-800 z-10 hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </section>
            </div>

            {/* Tech Stack Section (sem partículas) */}
            <section className="py-12 relative z-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                            Minhas Habilidades
                        </span>
                    </h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {/* Linguagens */}
                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                                    alt="Python"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">Python</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                                    alt="Java"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">Java</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                    alt="JavaScript"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">JavaScript</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                                    alt="TypeScript"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">TypeScript</span>
                        </div>

                        {/* Frontend */}
                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                                    alt="React"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">React</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
                                    alt="HTML"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">HTML5</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
                                    alt="CSS"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">CSS3</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                                    alt="Figma"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">Figma</span>
                        </div>

                        {/* Backend/Databases */}
                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
                                    alt="Flask"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">Flask</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
                                    alt="MongoDB"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">MongoDB</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                                    alt="MySQL"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">MySQL</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg"
                                    alt="Redis"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">Redis</span>
                        </div>

                        {/* Cloud/DevOps */}
                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                                    alt="AWS"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">AWS</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
                                    alt="Docker"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">Docker</span>
                        </div>

                        {/* Ferramentas */}
                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                    alt="GitHub"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">GitHub</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
                                    alt="Canva"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">Canva</span>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="p-6 bg-gray-800 rounded-2xl shadow-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                                <img
                                    src="https://ollama.com/public/ollama.png"
                                    alt="Ollama"
                                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <span className="mt-4 text-lg font-medium text-gray-300">Ollama</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;