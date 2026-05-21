---
title: "automotive user interface"
date: 2024-04-04
coverImage: "bb857-87d8fb_b72b4a631e574a71832b4d1848805cc7mv2_d_4141_2083_s_2.jpg"
layoutType: "technical"
embeds:
  - "https://sketchfab.com/models/7c78f000a0fd46728a145e04f073eed7/embed"
  - "https://sketchfab.com/models/1e716073b6514f9aa503a9dfb4e51051/embed"
  - "https://sketchfab.com/models/4a2d9f31f69b44f4b08ac89a09f14267/embed"
  - "https://sketchfab.com/models/6dce5a41adbc45db9c593828077c3fe1/embed"
  - "https://sketchfab.com/models/5c261a79531f40c7be28cf33dbdaa904/embed"
  - "https://sketchfab.com/models/31bdb995b1be4f29bcff6c63506692e8/embed"
images:
  - "/images/75333-87d8fb_b6b92f9d93fa48e9861e445e0a809f80mv2.gif"
  - "/images/fc37c-87d8fb_9cec046580e6411085d7b780da3aec13mv2.jpg"
  - "/images/4d2c1-87d8fb_f6f3d73613fa4693b9234f945a11fed2mv2.jpg"
  - "/images/3d331-87d8fb_3737974674e341ed9d98851eb7e2152emv2.jpg"
  - "/images/bf112-87d8fb_1cb60c6a7a22401b9105febde556cd03mv2.jpg"
---

_The goal of this project was to safely mount a custom user interface module connected to our BAC sensor systems for in-vehicle testing and looking good on tv._

See the completed project on the local news: <a href="https://www.kpax.com/news/national/under-proposed-law-alcohol-sensors-could-become-as-commonplace-as-airbags-in-new-vehicles" target="_blank" class="font-bold hover:text-white/80 transition-colors">KPAX news</a>

I learned and leveraged SolidWorks surfacing tools to create a housing for a PCB + sheet metal user interface system. It was designed to be permanently, and safely, mounted on a 2017 GM vehicle dashboard. Additive manufacturing was the fabrication method of choice due to the design complexity and need for prototype iterations.

![KEA UIM News](/images/kpax-localnews-kea_uim.png)

Note the special care that was taken to match the existing instrument cluster visor of the dashboard. My team was given access to the Chevrolet's in-house CAD files, making my job of perfectly replicating its form very easy.

The first design was more exact in proportions and overall dimensions to the existing instrument cluster's display hood but was too large and required a cover for the instrumentation around the segmented LED screen. A rapid prototyping approach allowed for immediate upstream design changes to create the final product.

<iframe 
  title="UIM Housing Rev2" 
  src="https://sketchfab.com/3d-models/uim-housing-rev2-4a2d9f31f69b44f4b08ac89a09f14267" 
  class="w-full aspect-video border-0" 
  allow="autoplay; fullscreen; xr-spatial-tracking" 
  execution-while-out-of-viewport 
  execution-while-not-rendered 
  web-share
></iframe>

The final iteration of the design was optimized for installation and stability. A tab and slot mounting system was created to safely keep the UIM attached to the dash no matter what.

The printing of the SolidWorks model offered a great chance for testing surface finishes on FDM prints. I also experimented with the use of acetone as a smoothing and binding agent for ABS plastics.

![Housing On Print Bed](/images/3c54f-87d8fb_67a48e1de3484b8ca07f971b6e8a54dfmv2_d_2985_3980_s_4_2.jpg)

This project taught me a lot about surfacing in SolidWorks and helped me develop my post-processing skills.
