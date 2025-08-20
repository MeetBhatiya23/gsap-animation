import React, { useEffect, useRef } from "react";
import "./estate.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "../common/NavBar";
import ServiceCards from "./ServiceCards";
import Footer from "../common/Footer";

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

const Estate = () => {
    const bannerRef = useRef(null);
    const bgCityRef = useRef(null);

    useEffect(() => {
        // Load SVG and initialize animations
        const loadAndAnimate = async () => {
            try {
                // 1. Load SVG
                const response = await fetch("/public/city.svg");
                const svgText = await response.text();

                if (bgCityRef.current) {
                    bgCityRef.current.innerHTML = svgText;
                    const svgElement = bgCityRef.current.querySelector("svg");

                    if (svgElement) {
                        // 2. Set SVG attributes
                        svgElement.setAttribute(
                            "preserveAspectRatio",
                            "xMidYMid slice"
                        );
                        svgElement.style.width = "100%";
                        svgElement.style.height = "100%";

                        // 3. Wait for next frame to ensure SVG is rendered
                        await new Promise((resolve) =>
                            requestAnimationFrame(resolve)
                        );

                        // 4. Initialize animations
                        setupAnimations();
                    }
                }
            } catch (error) {
                console.error("Error loading SVG:", error);
            }
        };

        // Animation setup function
        const setupAnimations = () => {
            // Verify all target elements exist
            const elements = {
                svg: bgCityRef.current?.querySelector("svg"),
                fullCity: document.getElementById("full_city"),
                buildingTop: document.getElementById("building_top"),
                wallSide: document.getElementById("wall_side"),
                wallFront: document.getElementById("wall_front"),
                interiorWallSide: document.getElementById("interior_wall_side"),
                interiorWallTop: document.getElementById("interior_wall_top"),
                interiorWallSide2: document.getElementById(
                    "interior_wall_side_2"
                ),
                interiorWallFront: document.getElementById(
                    "interior_wall_front"
                ),
            };

            // Log missing elements for debugging
            Object.entries(elements).forEach(([name, element]) => {
                if (!element) console.warn(`Element not found: ${name}`);
            });

            // Only proceed if we have the main SVG
            if (!elements.svg) return;

            // Kill any existing ScrollTriggers
            ScrollTrigger.getAll().forEach((t) => t.kill());

            // Create master timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bannerRef.current,
                    start: "top top",
                    end: "+=1000",
                    scrub: 1,
                    pin: true,
                    // markers: true, // Helpful for debugging
                    // anticipatePin: 1
                },
            });

            // Animation sequence
            tl
                // First group (parallel animations)
                .add(
                    gsap
                        .timeline()
                        .to(elements.svg, { scale: 1.5, duration: 2 }, 0)
                        .to(elements.fullCity, { opacity: 0, duration: 2 }, 0)
                )
                // Second group
                .add(
                    gsap
                        .timeline()
                        .to(
                            elements.buildingTop,
                            { y: -200, opacity: 0, duration: 2 },
                            0
                        )
                        .to(
                            elements.wallSide,
                            { x: -200, opacity: 0, duration: 2 },
                            0
                        )
                        .to(
                            elements.wallFront,
                            { x: 200, y: 200, opacity: 0, duration: 2 },
                            0
                        )
                )
                // Third group
                .add(
                    gsap
                        .timeline()
                        .to(
                            elements.interiorWallSide,
                            { x: -200, opacity: 0, duration: 2 },
                            0
                        )
                        .to(
                            elements.interiorWallTop,
                            { y: -200, opacity: 0, duration: 2 },
                            0
                        )
                        .to(
                            elements.interiorWallSide2,
                            { opacity: 0, duration: 2 },
                            0
                        )
                        .to(
                            elements.interiorWallFront,
                            { opacity: 0, duration: 2 },
                            0
                        )
                );

            // Refresh ScrollTrigger after setup
            ScrollTrigger.refresh();
        };

        loadAndAnimate();

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div className="main-section">
            <NavBar />
            <div className="hero_section container">
                Diamond City💎<p data-content="SURAT">SURAT</p>
            </div>
            <div className="banner" ref={bannerRef}>
                <div id="bg_city" ref={bgCityRef}></div>
            </div>
            <div>

            <div id="#about" className="about_containt">
                <h1>
                    Meet Bhatiya <p>Developer & Designer</p>
                </h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, deserunt dolorem error nesciunt illum minima quo, debitis facere itaque hic laborum quam aliquam placeat eum, quasi deleniti consequuntur. Cumque, tempora.</span>
            </div>
            </div>
            
            <ServiceCards />
            <Footer />
        </div>
    );
};

export default Estate;
