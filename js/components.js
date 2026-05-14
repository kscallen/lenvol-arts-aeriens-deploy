/**
 * L'Envol Arts Aériens - Shared Components Injection
 * Handles dynamic header and footer generation and active link state.
 */

document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    injectFooter();
    setActiveLink();
});

function injectHeader() {
    const headerPlaceholder = document.getElementById('main-header');
    if (!headerPlaceholder) return;
    const navHTML = `
        <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20 md:h-24 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-3 group">
                <div class="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <span class="material-symbols-outlined text-on-primary text-2xl md:text-3xl">flight_takeoff</span>
                </div>
                <div class="flex flex-col">
                    <span class="font-display-hero text-lg md:text-xl text-primary tracking-widest leading-none">L'ENVOL</span>
                    <span class="font-label-caps text-[8px] md:text-[10px] text-on-surface-variant tracking-[0.3em] uppercase opacity-60">Arts Aériens</span>
                </div>
            </a>

            <nav class="hidden md:flex items-center gap-8">
                <a class="nav-link font-label-caps text-label-caps text-on-surface hover:text-primary transition-all hover:translate-y-[-2px]" href="propos.html">À Propos</a>
                <a class="nav-link font-label-caps text-label-caps text-on-surface hover:text-primary transition-all hover:translate-y-[-2px]" href="cours.html">Cours</a>
                <a class="nav-link font-label-caps text-label-caps text-on-surface hover:text-primary transition-all hover:translate-y-[-2px]" href="horaire.html">Horaire</a>
                <a class="nav-link font-label-caps text-label-caps text-on-surface hover:text-primary transition-all hover:translate-y-[-2px]" href="evenements.html">Évènements</a>
                <a class="nav-link font-label-caps text-label-caps text-on-surface hover:text-primary transition-all hover:translate-y-[-2px]" href="galerie.html">Galerie</a>
                <a class="nav-link font-label-caps text-label-caps text-on-surface hover:text-primary transition-all hover:translate-y-[-2px]" href="contact.html">Contact</a>
                <a class="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-button-text text-sm hover-gold-glow transition-all" href="espace-client.html">ESPACE CLIENT</a>
            </nav>

            <div class="flex items-center gap-2 md:hidden">
                <a href="horaire.html" class="bg-primary text-on-primary px-4 py-2 rounded-lg font-button-text text-xs hover-gold-glow">RÉSERVER</a>
                <button id="mobile-menu-toggle" class="text-primary p-2 flex items-center justify-center" aria-label="Menu">
                    <span class="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
        </div>
    `;

    const menuHTML = `
    <div id="mobile-menu" class="fixed inset-0 z-[999] bg-[#0e0e0e] transform translate-x-full transition-transform duration-500 md:hidden overflow-y-auto">
        <div class="flex flex-col min-h-full p-6 md:p-8">
            <div class="flex justify-between items-center mb-12">
                <span class="font-display-hero text-2xl text-primary tracking-widest">L'ENVOL</span>
                <button id="close-menu" class="text-primary p-2">
                    <span class="material-symbols-outlined text-4xl">close</span>
                </button>
            </div>
            <nav class="flex flex-col gap-6">
                <a class="nav-link-mobile text-3xl font-display-hero text-on-surface hover:text-primary transition-colors" href="propos.html">À Propos</a>
                <a class="nav-link-mobile text-3xl font-display-hero text-on-surface hover:text-primary transition-colors" href="cours.html">Cours</a>
                <a class="nav-link-mobile text-3xl font-display-hero text-on-surface hover:text-primary transition-colors" href="horaire.html">Horaire</a>
                <a class="nav-link-mobile text-3xl font-display-hero text-on-surface hover:text-primary transition-colors" href="evenements.html">Évènements</a>
                <a class="nav-link-mobile text-3xl font-display-hero text-on-surface hover:text-primary transition-colors" href="galerie.html">Galerie</a>
                <a class="nav-link-mobile text-3xl font-display-hero text-on-surface hover:text-primary transition-colors" href="contact.html">Contact</a>
                <div class="h-px bg-outline-variant my-4"></div>
                <a class="text-3xl font-display-hero text-primary" href="espace-client.html">Espace Client</a>
            </nav>
            <div class="mt-auto pt-12 pb-8">
                <a href="horaire.html" class="w-full bg-primary text-on-primary block text-center py-6 rounded-xl font-button-text text-xl hover-gold-glow">RÉSERVER MAINTENANT</a>
            </div>
        </div>
    </div>
    `;

    headerPlaceholder.innerHTML = navHTML;
    document.body.insertAdjacentHTML('beforeend', menuHTML);

    // Mobile Menu Logic
    const toggle = document.getElementById('mobile-menu-toggle');
    const close = document.getElementById('close-menu');
    const menu = document.getElementById('mobile-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        });
    }

    if (close && menu) {
        close.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking links
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });
    });

    // Check session to update "Espace Client" text
    if (window.supabase) {
        window.supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                const link = document.getElementById('header-espace-client');
                if (link) link.textContent = 'Mon Compte';
            }
        });
    }
}

function injectFooter() {
    const footerPlaceholder = document.getElementById('main-footer');
    if (!footerPlaceholder) return;

    const footerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div class="space-y-6">
            <div class="font-display-hero text-headline-md text-primary">L'ENVOL</div>
            <p class="font-body-md text-on-surface-variant">Viens prendre ton envol avec nous dans un espace dédié à l'excellence et au dépassement.</p>
            <div class="flex gap-4">
                <a class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary transition-colors group" href="https://www.facebook.com/p/LEnvol-Arts-Aeriens-61581048196675/">
                    <span class="material-symbols-outlined text-white group-hover:text-on-primary">group</span>
                </a>
            </div>
        </div>
        <div class="hidden sm:block">
            <h4 class="font-label-caps text-label-caps text-primary mb-8">Liens Légaux</h4>
            <ul class="space-y-4">
                <li class=""><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#">Termes et conditions</a></li>
                <li class=""><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="https://lenvolartsaeriens.com/politique-de-confidentialite/">Politique de confidentialité</a></li>
            </ul>
        </div>
        <div>
            <h4 class="font-label-caps text-label-caps text-primary mb-8">Liens Rapides</h4>
            <ul class="space-y-4">
                <li class=""><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="propos.html">À propos</a></li>
                <li class=""><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="cours.html">Cours</a></li>
                <li class=""><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="horaire.html">Horaire et Tarifs</a></li>
                <li class=""><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="evenements.html">Évènements</a></li>
                <li class=""><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="galerie.html">Galerie</a></li>
                <li class=""><a class="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="contact.html">Contact</a></li>
            </ul>
        </div>
        <div>
            <h4 class="font-label-caps text-label-caps text-primary mb-8">Nos coordonnées</h4>
            <div class="space-y-4 text-on-surface-variant font-body-md">
                <p class="flex gap-3"><span class="material-symbols-outlined text-primary text-sm">location_on</span> 454 Av. Marconi, Québec, QC, G1N 4A8</p>
                <p class="flex gap-3"><span class="material-symbols-outlined text-primary text-sm">mail</span> lenvol.arts.aeriens@gmail.com</p>
                <p class="flex gap-3"><span class="material-symbols-outlined text-primary text-sm">call</span> (418) 431-7010</p>
                <div class="mt-6 rounded-md overflow-hidden border border-outline-variant h-32">
                    <img class="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700" alt="Map of L'Envol Studio location" src="assets/studio-map.png">
                </div>
            </div>
        </div>
    </div>
    <div class="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-20 pt-8 border-t border-outline-variant text-center text-on-surface-variant/60 font-body-md text-sm">
        <p class="">© 2024 L'Envol Arts Aériens. Tous droits réservés.</p>
    </div>
    `;

    footerPlaceholder.innerHTML = footerHTML;
}

function setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('text-primary');
            link.classList.remove('text-on-surface');
        }
    });
}
