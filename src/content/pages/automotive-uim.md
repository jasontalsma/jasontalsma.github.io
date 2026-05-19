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
  - "/images/bb857-87d8fb_b72b4a631e574a71832b4d1848805cc7mv2_d_4141_2083_s_2.jpg"
  - "/images/kpax-localnews-kea_uim.png"
  - "/images/75333-87d8fb_b6b92f9d93fa48e9861e445e0a809f80mv2.gif"
  - "/images/fc37c-87d8fb_9cec046580e6411085d7b780da3aec13mv2.jpg"
  - "/images/4d2c1-87d8fb_f6f3d73613fa4693b9234f945a11fed2mv2.jpg"
  - "/images/3d331-87d8fb_3737974674e341ed9d98851eb7e2152emv2.jpg"
  - "/images/bf112-87d8fb_1cb60c6a7a22401b9105febde556cd03mv2.jpg"
  - "/images/3c54f-87d8fb_67a48e1de3484b8ca07f971b6e8a54dfmv2_d_2985_3980_s_4_2.jpg"
---

![Header Image](/images/bb857-87d8fb_b72b4a631e574a71832b4d1848805cc7mv2_d_4141_2083_s_2.jpg)

_See the completed project on the local news: <a href="https://www.kpax.com/news/national/under-proposed-law-alcohol-sensors-could-become-as-commonplace-as-airbags-in-new-vehicles" target="_blank" class="underline hover:text-white/80 transition-colors">kpax news</a>_

I have never before encountered the frustrations SolidWorks offers our world before this automotive design project. I spent weeks learning the software's surfacing tools to create a housing for a PCB + sheet metal user interface system. It was designed to be permanently mounted on a 2017 GM vehicle dashboard. Additive manufacturing was the fabrication method of choice due to the design complexity and need for prototype iterations.

![KEA UIM News](/images/kpax-localnews-kea_uim.png)

Note the special care that was taken to match the existing instrument cluster visor of the dashboard. My team at KEA Technologies was given access to the OEM's CAD files, making my job of perfectly replicating its form very easy.

![Assembly Redo](/images/75333-87d8fb_b6b92f9d93fa48e9861e445e0a809f80mv2.gif)

The first design was more exact in proportions and overall dimensions to the existing instrument cluster's display hood but was too large and required a cover for the instrumentation around the segmented LED screen. A rapid prototyping approach allowed for immediate upstream design changes to create the final product.

The Sketchfab models below show the evolution of the housing design:

*   **Revision 1:** [Left](/engineering/automotive-uim) / [Right](/engineering/automotive-uim)
*   **Revision 2:** [Base](/engineering/automotive-uim) / [Tabbed Mounting](/engineering/automotive-uim)
*   **Revision 3:** [Base](/engineering/automotive-uim) / [Tabbed Mounting](/engineering/automotive-uim)

The second iteration includes a face (holds the electronics secure), mounting (including a separate tab and slot part file), and a decreased footprint.

The final iteration of the design was optimized for installation and stability. The tab and slot mounting piece was rotated vertical to increase its resistance against shear (instead of just sliding out of the slots as Rev. 1 would allow).

Here are more views of the final design rendered directly in the SolidWorks Photoview 360 modelling environment.

![Final View 1](/images/fc37c-87d8fb_9cec046580e6411085d7b780da3aec13mv2.jpg)
![Final View 2](/images/4d2c1-87d8fb_f6f3d73613fa4693b9234f945a11fed2mv2.jpg)
![Final View 3](/images/3d331-87d8fb_3737974674e341ed9d98851eb7e2152emv2.jpg)
![Final View 4](/images/bf112-87d8fb_1cb60c6a7a22401b9105febde556cd03mv2.jpg)

The printing of the SolidWorks model offered a great chance for testing surface finishes on FDM prints. I also experimented with the use of acetone as a smoothing and binding agent for ABS plastics.

![Housing On Print Bed](/images/3c54f-87d8fb_67a48e1de3484b8ca07f971b6e8a54dfmv2_d_2985_3980_s_4_2.jpg)

An intriguing aspect to the design is the tabbed mounting arm limiting moments on the other mounting screws. It also allows for easier installation while maintaining a flush exterior. Note the change in design made to the final CAD model found at the top of the page; the 3 slots are replaced with a single vertical one to limit shearing between the mounting piece and the housing.
