// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://b.top4top.io/p_3352h8eby1.jpg',
        'https://c.top4top.io/p_3352w5dq51.jpg',
        'https://f.top4top.io/p_3352hlu1t1.jpg',
        'https://g.top4top.io/p_3352xbxtd1.jpg',
        'https://k.top4top.io/p_3352j8s7c1.jpg',
        'https://i.top4top.io/p_3352hgy2s1.jpg',
        'https://h.top4top.io/p_3352545251.jpg',
        'https://j.top4top.io/p_3352662d01.jpg',
        'https://l.top4top.io/p_3352i7hfz1.jpg',
        'https://a.top4top.io/p_335252znd1.jpg',
        'https://b.top4top.io/p_3352kkch41.jpg'
    ];

    const gallery = document.getElementById('gallery');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    function initGallery() {
        images.forEach((imgUrl, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.style.animationDelay = `${index * 0.1}s`;
            
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = `Design ${index + 1}`;
            
            item.appendChild(img);
            gallery.appendChild(item);

            item.addEventListener('click', () => {
                lightbox.innerHTML = '';
                const lbImg = document.createElement('img');
                lbImg.src = imgUrl;
                lightbox.appendChild(lbImg);
                lightbox.classList.add('active');
            });
        });
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightbox) return;
        lightbox.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            lightbox.classList.remove('active');
        }
    });

    // Intersection Observer for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });

    function addMoreImages(newImages) {
        newImages.forEach(imgUrl => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = imgUrl;
            
            item.appendChild(img);
            gallery.appendChild(item);
            observer.observe(item);
        });
    }

    // Example for adding more images:
    // addMoreImages(['new_image_url_here']);

    initGallery();
});