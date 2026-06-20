const services = {
  mason: {
    name: "রাজমিস্ত্রি",
    icon: "fa-solid fa-trowel-bricks",
    rate: "₹600 - ₹1500",
    description: "বাড়ি নির্মাণ, প্লাস্টার, ছাদ ঢালাই ও সব ধরনের রাজমিস্ত্রির কাজ।"
  },

  bike: {
    name: "গাড়ি মিস্ত্রি",
    icon: "fa-solid fa-car",
    rate: "₹500 - ₹3000",
    description: "সব ধরনের গাড়ির সার্ভিসিং ও মেরামতের কাজ।"
  },

  electric: {
    name: "ইলেকট্রিশিয়ান",
    icon: "fa-solid fa-bolt",
    rate: "₹300 - ₹1500",
    description: "বৈদ্যুতিক লাইন, সুইচ, ফ্যান, লাইট ও অন্যান্য কাজ।"
  },

  plumber: {
    name: "প্লাম্বার",
    icon: "fa-solid fa-faucet",
    rate: "₹300 - ₹1200",
    description: "পাইপ, কল, বাথরুম ও পানির লাইনের কাজ।"
  },

  carpenter: {
    name: "কাঠমিস্ত্রি",
    icon: "fa-solid fa-hammer",
    rate: "₹500 - ₹2500",
    description: "দরজা, জানালা, খাট, আলমারি ও কাঠের কাজ।"
  },

  painter: {
    name: "রং মিস্ত্রি",
    icon: "fa-solid fa-paint-roller",
    rate: "₹600 - ₹4000",
    description: "বাড়ির ভিতর ও বাইরের রং করার কাজ।"
  },

  bamboo: {
    name: "বাঁশের কাজ",
    icon: "fa-solid fa-tree",
    rate: "₹500 - ₹3000",
    description: "বাঁশের ঘর, বেড়া ও অন্যান্য বাঁশের কাজ।"
  },

  cleaning: {
    name: "পরিষ্কার-পরিচ্ছন্নতা",
    icon: "fa-solid fa-broom",
    rate: "₹300 - ₹1500",
    description: "বাড়ি, অফিস ও দোকান পরিষ্কার করার সেবা।"
  }
};

const id = new URLSearchParams(window.location.search).get("service");

if (services[id]) {

  document.getElementById("serviceName").innerText = services[id].name;

  document.getElementById("serviceDescription").innerText = services[id].description;

  document.getElementById("serviceRate").innerText = services[id].rate;

  document.getElementById("serviceIcon").className = services[id].icon;

}