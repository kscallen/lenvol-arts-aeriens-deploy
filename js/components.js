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

    const headerHTML = `
    <div class="flex justify-between items-center w-full px-margin-desktop py-6 max-w-container-max mx-auto">
        <a href="index.html" class="font-display-hero text-headline-md text-primary tracking-widest cursor-pointer">L'ENVOL</a>
        <nav class="hidden md:flex items-center gap-8">
            <a class="nav-link text-on-surface hover:text-primary-fixed-dim transition-colors font-label-caps text-label-caps" href="propos.html">À Propos</a>
            <a class="nav-link text-on-surface hover:text-primary-fixed-dim transition-colors font-label-caps text-label-caps" href="cours.html">Cours</a>
            <a class="nav-link text-on-surface hover:text-primary-fixed-dim transition-colors font-label-caps text-label-caps" href="horaire.html">Horaire</a>
            <a class="nav-link text-on-surface hover:text-primary-fixed-dim transition-colors font-label-caps text-label-caps" href="evenements.html">Évènements</a>
            <a class="nav-link text-on-surface hover:text-primary-fixed-dim transition-colors font-label-caps text-label-caps" href="galerie.html">Galerie</a>
            <a class="nav-link text-on-surface hover:text-primary-fixed-dim transition-colors font-label-caps text-label-caps" href="contact.html">Contact</a>
        </nav>
        <div class="flex items-center gap-4">
            <a href="https://clients.mindbodyonline.com/classic/ws?studioid=5751367&stype=-101" target="_blank" class="hidden lg:block text-primary font-button-text text-button-text px-4 py-2 hover:bg-primary/10 transition-all duration-300 rounded">Espace Client</a>
            <a href="https://clients.mindbodyonline.com/classic/ws?studioid=5751367&stype=-7&sTG=26&sView=week&sLoc=0" target="_blank" class="bg-primary text-on-primary px-6 py-3 rounded font-button-text text-button-text hover-gold-glow">Réserver</a>
        </div>
    </div>
    `;

    headerPlaceholder.innerHTML = headerHTML;
}

function injectFooter() {
    const footerPlaceholder = document.getElementById('main-footer');
    if (!footerPlaceholder) return;

    const footerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div class="space-y-6">
            <div class="font-display-hero text-headline-md text-primary">L'ENVOL</div>
            <p class="font-body-md text-on-surface-variant">Viens prendre ton envol avec nous dans un espace dédié à l'excellence et au dépassement.</p>
            <div class="flex gap-4">
                <a class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary transition-colors group" href="https://www.facebook.com/p/LEnvol-Arts-Ariens-61581048196675/">
                    <span class="material-symbols-outlined text-white group-hover:text-on-primary">group</span>
                </a>
            </div>
        </div>
        <div>
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
    <div class="px-margin-desktop max-w-container-max mx-auto mt-20 pt-8 border-t border-outline-variant text-center text-on-surface-variant/60 font-body-md text-sm">
        <p class="">© 2024 L'Envol Arts Aériens. Tous droits réservés.</p>
    </div>
    `;

    footerPlaceholder.innerHTML = footerHTML;
}

function setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('text-primary');
            link.classList.remove('text-on-surface');
        }
    });
}
