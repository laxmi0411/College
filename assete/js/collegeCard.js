

function collegeCard(c) {
    return `
  <div class="group relative bg-white border border-gray-200 rounded-[1.5rem] p-5 transition-all hover:shadow-xl hover:border-blue-400">

    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 class="font-extrabold text-gray-900 ">
          ${c.name}
        </h3>
        <p class="text-[10px] font-bold uppercase text-gray-600">
          📍 ${c.location}
        </p>
      </div>
<div class="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-lg border border-amber-200 shrink-0">
  <span class="text-[10px] font-black text-amber-700">${c.rating}</span>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-amber-500 fill-current" viewBox="0 0 24 24">
    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.17L12 18.896l-7.334 3.866 1.4-8.17-5.934-5.782 8.2-1.192z"/>
  </svg>
</div>
      
    </div>

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-2 py-0.5 bg-gray-100 text-gray-800 text-[9px] font-black uppercase rounded">
        ESTD ${c.estd}
      </span>
      <span class="px-2 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-black uppercase rounded">
        ${c.type}
      </span>
      <span class="px-2 py-0.5 bg-emerald-50 text-emerald-800 text-[9px] font-bold uppercase rounded">
        ${c.approvals}
      </span>
     
    </div>

    <div class="flex gap-2 items-center">
      <a href="https://wa.me/918317795774"
        class="flex-1 py-2 bg-[#128C7E] text-white rounded-lg text-[11px] font-bold text-center hover:bg-[#075E54]">
        Whatsapp
      </a>

      <button onclick="openApplyModal()"
        class="flex-1 py-2 bg-gray-900 text-white rounded-lg text-[11px] font-bold hover:bg-black">
        Enquiry
      </button>

   
    </div>
  </div>
  `;
}
//   <a href="${c.link}"
//     class="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white">
//     ↗
//   </a>

