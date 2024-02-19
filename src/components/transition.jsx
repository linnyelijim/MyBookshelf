import { useNavigate } from 'react-router-dom'
import { useEffect } from 'next/client'
import '../assets/transition.css'

function Transition() {
    const navigate = useNavigate();
    useEffect(() => {
        function createScene() {
            const main = document.createElement('main');
            main.classList.add('scene');

            const body = document.querySelector('body');
            const header = document.querySelector('header');
            const headerChildren = header.children;
            for (let i = 0; i < headerChildren.length; i++) {
                const child = headerChildren[i];
                if (child !== main) {
                    child.style.display = 'none';
                }
            }
            body.insertBefore(main, body.firstElementChild);
            CreateDiv(main);
        }
        const CreateDiv = () => {
            const scene = document.querySelector('.scene');
            for (let i = 0; i < 210; i++) {
                scene.innerHTML += "<div></div>";
            }
        }
        const createStars = () => {
            const stars = document.querySelectorAll('div');
            stars.forEach(star => {
                let x = `${Math.random() * 200}vmax`;
                let y = `${Math.random() * 100}vh`;
                let z = `${Math.random() * 200 - 100}vmin`;
                let rx = `${Math.random() * 360}deg`;
                star.style.setProperty('--x', x);
                star.style.setProperty('--y', y);
                star.style.setProperty('--z', z);
                star.style.setProperty('--rx', rx);
                let delay = `${Math.random() * 1.5}s`;
                star.style.animationDelay = delay;
            })
        }
        function fadeOut(element, duration, callback) {
            element.style.transition = `opacity ${duration / 1000}s ease-out`;
            element.style.opacity = '0';
            setTimeout(() => {
                if (typeof callback === 'function') {
                    callback();
                }
            }, duration);
        }
        function fadeIn(element, duration, callback) {
            element.style.transition = `opacity ${duration / 1000}s ease-in forwards`;
            element.style.opacity = '1';

            window.setTimeout(() => {
                if (typeof callback === 'function') {
                    callback();
                }
            }, duration);
        }
        function navigateWithFadeOut() {
            const body = document.body;
            fadeOut(body, 3000, function () {
                navigate('./pages/List');
            });
        }
        const handleEnterBookClick = () => {
            fadeOut(document.body, 2500, () => {
                createScene();
                createStars();
                fadeIn(document.body, 4000, () => {
                    navigateWithFadeOut();
                });
            });
        };
        document.querySelector('.enter-book').addEventListener('click', handleEnterBookClick);
        return () => {
            document.querySelector('.enter-book').removeEventListener('click', handleEnterBookClick);
        };
    }, [history]);

}
export default Transition;