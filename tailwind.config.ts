import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: { 50:"#eef2ff",100:"#dbe4ff",200:"#bac8ff",300:"#91a7ff",400:"#748ffc",500:"#5c7cfa",600:"#4c6ef5",700:"#4263eb",800:"#3b5bdb",900:"#1e3a8a",950:"#0a1628" },
        gold: { 50:"#fdf8e8",100:"#faefc5",200:"#f5e08e",300:"#f0cb4d",400:"#D4AF37",500:"#c49b2a",600:"#a87e21",700:"#86601c",800:"#704f1d",900:"#5f421d",950:"#37240e" },
        cream: { 50:"#FFFDF7",100:"#FFF8F0",200:"#FEF0D5",300:"#FDE4B0" }
      },
      fontFamily: { heading:["Playfair Display","serif"], body:["Inter","sans-serif"] },
      animation: {
        "float":"float 6s ease-in-out infinite",
        "gradient":"gradient 8s ease infinite",
        "marquee":"marquee 30s linear infinite",
        "spin-slow":"spin 8s linear infinite",
        "pulse-gold":"pulse-gold 2s cubic-bezier(0.4,0,0.6,1) infinite"
      },
      keyframes: {
        float:{"0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-20px)"}},
        gradient:{"0%":{backgroundPosition:"0% 50%"},"50%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0% 50%"}},
        marquee:{"0%":{transform:"translateX(0)"},"100%":{transform:"translateX(-50%)"}},
        "pulse-gold":{"0%,100%":{opacity:"1"},"50%":{opacity:"0.5"}}
      },
      backgroundSize:{"300%":"300%"}
    }
  },
  plugins: []
} satisfies Config;
