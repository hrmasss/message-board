import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        "../templates/**/*.html",

        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        "../../templates/**/*.html",

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        "../../**/templates/**/*.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
            },
            colors: {
                foreground: "hsl(var(--foreground))",
                background: "hsl(var(--background))",
                card: "hsl(var(--card))",
                border: "hsl(var(--border))",
                primary: "hsl(var(--primary))",
                accent: "hsl(var(--accent))",
            },
        },
    },
    darkMode: "class",
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
