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
        orange: "var(--orange-dark)",

        purple_ultra_dark: "var(--purple-ultra-dark)",
        purple_dark: "var(--purple-dark)",
        purple: "var(--purple)",
        purple_light_medium: "var(--purple-light-medium)",
        purple_light: "var(--purple-light)",
        purple_ultra_light: "var(--purple-ultra-light)",
        purple_tint: "var(--purple-tint)",
        purple_pastel: "var(--purple-pastel)",

        turquoise_medium_ultra_dark: "var(--turquoise-ultra-dark)",
        turquoise_dark: "var(--turquoise-dark)",
        turquoise_medium: "var(--turquoise-medium)",
        turquoise_light_medium: "var(--turquoise-light-medium)",
        turquoise_light: "var(--turquoise-light)",
        turquoise_ultra_light: "var(--turquoise-ultra-light)",

        green_ultra_dark: "var(--green-ultra-dark)",
        green_dark: "var(--green-dark)",
        green_active: "var(--green-active)",
        green_medium: "var(--green-medium)",
        green_light_medium: "var(--green-light-medium)",
        green_light: "var(--green-light)",
        green_ultra_light: "var(--green-ultra-light)",
        green_pastel: "var(--green-pastel)",
        green_vibrant: "var(--green-vibrant)",

        red_ultra_dark: "var(--red-ultra-dark)",
        red_dark: "var(--red-dark)",
        red_medium: "var(--red-medium)",
        red_light_medium: "var(--red-light-medium)",
        red_light: "var(--red-light)",
        red_ultra_light: "var(--red-ultra-light)",
        red_vibrant: "var(--red-vibrant)",

        yellow_ultra_dark: "var(--yellow-ultra-dark)",
        yellow_dark: "var(--yellow-dark)",
        yellow_medium: "var(--yellow-medium)",
        yellow_light_medium: "var(--yellow-light-medium)",
        yellow_light: "var(--yellow-light)",
        yellow_ultra_light: "var(--yellow-ultra-light)",
        yellow_vibrant: "var(--yellow-vibrant)",

        blue_ultra_dark: "var(--blue-ultra-dark)",
        blue_dark: "var(--blue-dark)",
        blue_medium: "var(--blue-medium)",
        blue_light_medium: "var(--blue-light-medium)",
        blue_light: "var(--blue-light)",
        blue_ultra_light: "var(--blue-ultra-light)",
        blue_pastel: "var(--blue-pastel)",

        orange_ultra_dark: "var(--orange-ultra-dark)",
        orange_dark: "var(--orange-dark)",
        orange_medium: "var(--orange-medium)",
        orange_light_medium: "var(--orange-light-medium)",
        orange_light: "var(--orange-light)",
        orange_ultra_light: "var(--orange-ultra-light)",
        orange_pastel: "var(--orange-pastel)",
        orange_vibrant: "var(--orange-vibrant)",

        grey_ultra_dark: "var(--grey-ultra-dark)",
        grey_dark: "var(--grey-dark)",
        grey_medium: "var(--grey-medium)",
        grey: "var(--grey)",
        grey_light_medium: "var(--grey-light-medium)",
        grey_light: "var(--grey-light)",
        grey_ultra_light: "var(--grey-ultra-light)",
        black: "var(--black)",
        white: "var(--white)",

        teal_pastel: "var(--teal-pastel)",
        pink_pastel: "var(--pink-pastel)",
        lime_vibrant: "var(--lime-vibrant)",

        steal_ultra_light: "var(--steal-ultra-light)",
        steal_light: "var(--steal-light)",
        steal_regular: "var(--steal-regular)",
        steal_dark: "var(--steal-dark)",
        steal_ultra_dark: "var(--steal-ultra-dark)",

        sentiment_negative: "var(--sentiment-negative)",
        sentiment_neutral: "var(--sentiment-neutral)",
        sentiment_positive: "var(--sentiment-positive)",
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
