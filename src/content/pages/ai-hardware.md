---
title: "ai classroom hardware"
date: 2024-10-09
coverImage: "mirror-high-five.gif"
layoutType: "technical"
textColor: "black"
images:
  - "/images/mirror-whiteboard-session.png"
  - "/images/mirror-small-group.png"
  - "/images/mirror-teacher-recording.png"
  - "/images/pxl_20211203_002824160.mp_-3185202769-e1729025421742.jpg"
  - "/images/pxl_20211202_232534805.mp_-2051497039-e1729025410760.jpg"
  - "/images/PXL_20211203_002832755.MP.jpg"
  - "/images/PXL_20211202_232531458.MP.jpg"
  - "/images/pxl_20211021_223714859.mp_.jpg"
  - "/images/pxl_20211021_225324348.mp_.jpg"
  - "/images/pxl_20211022_191926400.mp_.jpg"
  - "/images/pxl_20220215_001752172.mp_.jpg"
  - "/images/PXL_20230408_005801821.MP.jpg"
  - "/images/PXL_20230210_001055343.MP.jpg"
  - "/images/PXL_20220518_205141561.jpg"
  - "/images/img_9667.jpg"
---

_The goal of this project was to design and produce a rugged audio visual system that leverages AI for students and teachers._  
  
As seen on the local news: <a href="https://www.knoe.com/2026/05/08/louisiana-tech-ruston-high-school-testing-new-technology-classroom/
" target="_blank" class="font-bold hover:text-white/100 transition-colors">KNOE news</a>

As one of only two engineers on this project, I was involved in every part of every phase -- from pre-concept development to the first shipments. The product is a battery powered integrated speaker, friction hinge mounted touch display, microphone array, and camera with an **[IR tracking remote/mic.](/engineering/remote)** packaged in a multi-modal, ruggedized form custom designed for the classroom.

![Design Overview](/images/2023-04-12-10_57_41-greenshot-e1728510886911.png)

My focus of interest was on Experience Design, approaching questions like: What diameter does a hand want for the rollbar/handle system? What is the optimal display size for human-like interaction? How do you make audio sound like a real-person? Do red LEDs look scary? To answer these questions, I led extensive brainstorming, iterative design cycles, and user testing at all stages of product development.

<div class="grid grid-cols-2 gap-4">
  <img src="/images/stand.gif"/>
  <img src="/images/stand2.gif"/>
</div>

Dividing responsibilities between the two engineers, I owned the **[remote.](/engineering/remote)**, the protective hinge and roll-cage system, and all interfaces with cables, accessories, and docking. I also lead PN and BOM control. After my colleague left, I inherited the entire mechanical system, ensuring continuity and successful delivery.

Prototyping was the main driver to our design cycles. There were pine 2x4s and pvc pipes, 80/20, repurposed products with in-house 3d printed housings, and high-grade out-sourced prototypes. Prototypes included looks-like and works-like of the full assembly, subassemblies, accessories, and single parts.

<div class="grid grid-cols-2 gap-4 ">
  <img src="/images/PXL_20210628_201510831.MP.jpg"/>
  <img src="/images/PXL_20210628_234710649.MP.jpg"/>
  <img src="/images/protogif2.gif"/>
  <img src="/images/protogif.gif"/>
</div>

Material studies were always a good source of information and inspiration. purchasing products for multiple team members or shipping samples proved an effective means of communication throughout this project. Although nothing could beat a few in-person sessions to drive points home efficiently.

<div class="grid grid-cols-3 gap-4 ">
  <img src="/images/pxl_20211012_024155031.mp_.jpg"/>
  <img src="/images/pxl_20210816_225646028.mp_.jpg"/>
  <img src="/images/pxl_20210817_163244849.mp_.jpg"/>
</div>

I fine-tuned every physical interaction and user experience element to ensure optimal performance across all orientations and environments — including docking mechanics, friction hinges, microphone arrays, cameras, speaker experience, and satisfying LED recording illumination — while working closely with top-tier external consultants.

![LED Testing 2](/images/img_20230626_210953.jpg)

I led extensive aesthetic explorations with my remote team. We explored design elements such as CMF, audio screen materials, attachments, stands, the shape of the Remote dock to ensure charging and pairing reliability while maintaining a clean aesthetic and much more. Communication of these explorations mainly relied on photos and videos.

<div class="grid grid-cols-2 gap-4 ">
  <img src="/images/pxl_20220112_225432641.mp_.jpg"/>
  <img src="/images/pxl_20220112_225344345.mp_.jpg"/>
  <img src="/images/pxl_20220209_183435889.mp_.jpg"/>
  <img src="/images/pxl_20220112_224611866.mp_.jpg"/>
</div>

My role also included constant in-person and digital communication with teams in China, Thailand, and Ukraine. I was managing verification and modification requests for all assembly fixtures and jigs, line optimization and troubleshooting, conducting drop tests, vibration table tests, plastics and assembly verification, and internal cable routing.

<div class="grid grid-cols-2 gap-4">
  <div class="aspect-square w-full overflow-hidden bg-[#111]">
    <img src="/images/outdoor-drop-test.gif" class="w-full h-full object-cover"/>
  </div>
  <div class="aspect-square w-full overflow-hidden bg-[#111]">
    <img src="/images/shake.gif" class="w-full h-full object-cover"/>
  </div>
</div>

<h3 id="major-challenges">Major Challenges</h3>

<ul class="list-disc pl-6 space-y-2">
<li>The rollbar's hinges proved to be tricky, failing during drop tests due to a combination of plastic blend choice, packaging design, and fluctuating production conditions. I mounted a troubleshooting process that taught me a valuable lesson: always explore multiple potential root causes. In the future I would incorporate earlier subassembly testing and environmental stress tests (like shipping).</li>
</ul>

<div class="grid grid-cols-2 gap-4 ">
  <img src="/images/pxl_20230822_230015225.jpg"/>
  <img src="/images/pxl_20230822_224554640.jpg"/>
</div>

<ul class="list-disc pl-6 space-y-2">
<li>Resonant frequencies vibrating the plastics.</li>
<li>Heat dissipation using heat sinks and increased airflow.</li>
<li>We committed to a blow-molded part, a process we had no prior experience with. This choice introduced a variety of issues, like gas-assisted tool mods and post-processing fixes.</li>
<li>I worked closely with the electrical engineering team to trace an LED brightness throttling issue, eventually identifying a power constraint in the PCB design.</li>
</ul>

![lights](/images/PXL_20230509_215826382.MP.jpg)