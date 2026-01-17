const universities = [
    { name: "Lovely Professional University", state: "Punjab" },
    { name: "Chandigarh University", state: "Punjab" },
    { name: "Amity University", state: "Uttar Pradesh" },
    { name: "SRM University", state: "Tamil Nadu" },
    { name: "VIT University", state: "Tamil Nadu" },
    { name: "Jain University", state: "Karnataka" },
    { name: "Manipal University", state: "Karnataka" },
    { name: "Symbiosis International University", state: "Maharashtra" },
    { name: "Christ University", state: "Karnataka" },
    { name: "Shiv Nadar University", state: "Uttar Pradesh" },

    { name: "Bennett University", state: "Uttar Pradesh" },
    { name: "Galgotias University", state: "Uttar Pradesh" },
    { name: "Sharda University", state: "Uttar Pradesh" },
    { name: "Jaypee University", state: "Uttar Pradesh" },
    { name: "Noida International University", state: "Uttar Pradesh" },
    { name: "IIMT University", state: "Uttar Pradesh" },
    { name: "GLA University", state: "Uttar Pradesh" },
    { name: "Sanskriti University", state: "Uttar Pradesh" },
    { name: "Mangalayatan University", state: "Uttar Pradesh" },
    { name: "Rama University", state: "Uttar Pradesh" },

    { name: "Invertis University", state: "Uttar Pradesh" },
    { name: "Swami Vivekanand Subharti University", state: "Uttar Pradesh" },
    { name: "Teerthanker Mahaveer University", state: "Uttar Pradesh" },

    { name: "IFHE Hyderabad (ICFAI)", state: "Telangana" },

    { name: "KL University", state: "Andhra Pradesh" },
    { name: "Vignan University", state: "Andhra Pradesh" },
    { name: "GITAM University", state: "Andhra Pradesh" },
    { name: "SRM University AP", state: "Andhra Pradesh" },
    { name: "VIT-AP University", state: "Andhra Pradesh" },

    { name: "Centurion University", state: "Odisha" },
    { name: "KIIT University", state: "Odisha" },
    { name: "SOA University", state: "Odisha" },
    { name: "Xavier University", state: "Odisha" },
    { name: "CV Raman Global University", state: "Odisha" },

    { name: "Birla Institute of Technology", state: "Jharkhand" },
    { name: "ICFAI University", state: "Jharkhand" },

    { name: "Adamas University", state: "West Bengal" },
    { name: "Brainware University", state: "West Bengal" },
    { name: "Techno India University", state: "West Bengal" },
    { name: "University of Engineering & Management", state: "West Bengal" }
];


function renderUniversities(containerId) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    universities.forEach((uni, index) => {
        grid.innerHTML += `
      <div class="flex items-start gap-1 group">
        <div class="relative w-10 h-10 flex-shrink-0">
          <div class="w-8 h-8 flex items-center justify-center rounded-lg
            bg-indigo-50 text-indigo-600
            group-hover:bg-indigo-600 group-hover:text-white transition">
            🏛️
          </div>
        
        </div>

        <div>
          <h4 class="text-sm font-semibold text-slate-700 group-hover:text-indigo-600">
            ${uni.name}
          </h4>
          <p class="text-[10px] text-slate-500 uppercase">
            ${uni.state}
          </p>
        </div>
      </div>
    `;
    });
}
//  <span class="absolute -top-2 -right-0 w-4 h-4 rounded-full
//             bg-indigo-100 text-dark text-[8px] font-bold
//             flex items-center justify-center">
//             ${String(index + 1).padStart(2, "0")}
//           </span>