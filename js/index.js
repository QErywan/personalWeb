// ── Ember particles ────────────────────────────────────────────────────────
particlesJS("background", {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800,
            },
        },

        color: {
            value: ["#c9a227", "#e8b84b", "#f0c84a", "#a07818", "#ffdf80"],
        },

        shape: {
            type: "circle",
        },

        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0.1,
                sync: false,
            },
        },

        size: {
            value: 2.5,
            random: true,
            anim: {
                enable: true,
                speed: 1.5,
                size_min: 0.5,
                sync: false,
            },
        },

        line_linked: {
            enable: false,
        },

        move: {
            enable: true,
            speed: 0.6,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },

    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true,
        },
    },

    retina_detect: true,
});

// ── Menu interaction ───────────────────────────────────────────────────────
(function () {
    const buttons = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll(".content-section");

    function activateSection(targetId) {
        buttons.forEach(function (btn) {
            const isTarget = btn.dataset.section === targetId;
            btn.classList.toggle("active", isTarget);
            btn.setAttribute("aria-pressed", String(isTarget));
        });

        sections.forEach(function (section) {
            const isTarget = section.id === "section-" + targetId;
            if (isTarget) {
                // Force reflow so animation re-triggers even on same section
                section.classList.remove("active");
                section.setAttribute("aria-hidden", "false");
                void section.offsetHeight;
                section.classList.add("active");
            } else {
                section.classList.remove("active");
                section.setAttribute("aria-hidden", "true");
            }
        });
    }

    buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            activateSection(btn.dataset.section);
        });
    });
}());
