// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    //Lo vemos en clase pasarlo de true a false
    devtools: { enabled: false },
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
