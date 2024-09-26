import React from 'react'
import { Link } from 'react-router-dom'
import FirstRegister from './FirstRegister';
import Register from '../pages/Register';

const LoginForm = () => {

  gsap.registerPlugin(ScrollTrigger);

  // Parallax effect
  function parallaxEffect() {
    const layers = document.querySelectorAll('.parallax-layer');
    layers.forEach(layer => {
      const depth = layer.style.transform.match(/-?\d+/)[0];
      const movement = (window.innerHeight + window.scrollY) * (depth / 100);
      gsap.to(layer, {
        y: movement,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });
    });
  }

  // Three.js background
  function initThreeBackground() {
    const canvas = document.getElementById('logo-canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshPhongMaterial({ color: 0x3498db, shininess: 100 });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    scene.add(light);

    function animate() {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.02;
      torusKnot.rotation.y += 0.03





        ;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    parallaxEffect();
    initThreeBackground();

    gsap.from('.login-container', {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.login-container',
        start: 'top bottom-=100',
        end: 'top center',
        scrub: true
      }
    });

    gsap.from('form > *', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      delay: 0.5
    });

    document.getElementById('loginForm').addEventListener('submit', function (event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      console.log('Giriş edildi', email, password);

      gsap.to('#loginButton', {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.to('#loginButton', {
            width: '60px',
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
              document.getElementById('loginButton').innerHTML = '<span class="loading"></span>';
              gsap.to('#loginButton', {
                rotation: 360,
                duration: 1,
                ease: 'none',
                repeat: -3
              });
            }
          });
        }
      });
    });
  });
  return (


    <>

      <div className="parallax-wrapper">
        <div
          className="parallax-layer"
          style={{
            backgroundImage:
              'url("https://via.placeholder.com/1500x1000/3498db/ffffff?text=Layer+1")',
            transform: "translateZ(-300px) scale(2)"
          }}
        />
        <div
          className="parallax-layer"
          style={{
            backgroundImage:
              'url("https://via.placeholder.com/1500x1000/2c3e50/ffffff?text=Layer+2")',
            transform: "translateZ(-200px) scale(1.7)"
          }}
        />
        <div
          className="parallax-layer"
          style={{
            backgroundImage:
              'url("https://via.placeholder.com/1500x1000/34495e/ffffff?text=Layer+3")',
            transform: "translateZ(-100px) scale(1.4)"
          }}
        />
      </div>
      <div className="login-container w-full max-w-5xl flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
        {/* Left side - Gmail login form */}
        <div className="login-form w-full lg:w-1/2 p-8 lg:p-12 bg-white bg-opacity-80 backdrop-blur-md">
          <form id="loginForm" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                Enter your email
              </h2>
              <p className="text-gray-600 text-base lg:text-lg">
                Safe and fast access with Lead2B
              </p>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="input-field w-full px-4 py-3 lg:px-5 lg:py-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-base lg:text-lg"
                required=""
              />
              <label
                htmlFor="email"
                className="input-label absolute left-4 top-3 lg:left-5 lg:top-4 text-gray-500 text-base lg:text-lg transition-all duration-300 pointer-events-none"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder=" "
                className="input-field w-full px-4 py-3 lg:px-5 lg:py-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-base lg:text-lg"
                required=""
              />
              <label
                htmlFor="password"
                className="input-label absolute left-4 top-3 lg:left-5 lg:top-4 text-gray-500 text-base lg:text-lg transition-all duration-300 pointer-events-none"
              >
                Password
              </label>
            </div>
            <div>
              <button
                id="loginButton"
                className="login-btn w-full text-white py-5 lg:py-4 rounded-lg text-lg lg:text-xl font-semibold relative overflow-hidden"
                type="submit"
              >
                <span className="relative z-10">Login</span>
              </button>
            </div>
          </form>
          <Link to={"/register"} >Register</Link>
          <Link to={"/forgot-password"} >Forgot Password</Link>
        </div>
        {/* Right side - Lead2B Logo */}
        <div
          className="logo-container w-full lg:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative"
          style={{ minHeight: 300 }}
        >
          <canvas id="logo-canvas" />
          <div className="logo-content text-center p-8">
            <h1 className="glow-text text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6">
              Lead2B
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100">Future's CRM solution</p>
          </div>
        </div>
      </div>
    </>




  )
}

export default LoginForm