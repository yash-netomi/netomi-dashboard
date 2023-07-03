module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--purple)",
        secondary: "var(--turquoise-medium)",
        success: "var(--green-dark)",
        warning: "var(--yellow-dark)",
        error: "var(--red-dark)",
      },
      keyframes: {
        mercuryTypingAnimation: {
          "0%": {
            transform: "translateY(0px)",
          },
          "28%": {
            transform: "translateY(-5px)",
          },
          "44%": {
            transform: "translateY(0px)",
          },
        },
        dots: {
          "0%, 20%": {
            content: `"."`,
          },
          "40%": {
            content: `".."`,
          },
          "60%": {
            content: `"..."`,
          },
          "90%, 100%": {
            content: `""`,
          },
        },
      },
      animation: {
        typing: "mercuryTypingAnimation 1s infinite ease-in-out",
        loadingDots: "dots 2s linear infinite",
      },
    },
  },
  plugins: [],
};
