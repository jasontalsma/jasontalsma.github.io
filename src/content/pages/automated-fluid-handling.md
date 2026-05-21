---
title: "automated fluid handling system"
date: 2024-04-04
coverImage: "fluidhandlingcropped.png"
layoutType: "technical"
embeds:
  - "https://sketchfab.com/models/2a79757e73d64d76ba0050e407fbf6bb/embed"
  - "https://sketchfab.com/models/ad3bb32eeb254769b07b7cc500ece599/embed"
  - "https://sketchfab.com/models/a2378674ac1b4bd5b4849375c2bcac3d/embed"
  - "https://sketchfab.com/models/032ffc50b08d47f4bcf2b5bbe7d70203/embed"
images:
  - "/images/4396f-87d8fb_08a71b9d2c6b4767af8ef0c624d3842bmv2_d_5312_2988_s_4_2.jpg"
  - "/images/1dbf1-87d8fb_cf5d87241e9043c393a4f6c13cf03543mv2_d_5312_2988_s_4_2.jpg"
  - "/images/ef3ad-87d8fb_8e9a150b582940aa9dc8997839b4bf99mv2_d_2988_5312_s_4_2.jpg"
  - "/images/3f406-87d8fb_464ed0d78332411e9d42b5b8261cef50mv2_d_5312_2988_s_4_2.jpg"
  - "/images/2032e-87d8fb_d953c1f2438446c48f04b66de60495b3mv2_d_2988_5312_s_4_2.jpg"
  - "/images/e13f0-87d8fb_5784c90d379f44d7a3f68e6cbae1bb72mv2_d_2988_5312_s_4_2.jpg"
  - "/images/ed76b-87d8fb_a3ea0915e51f40a19a2425595ef416c9mv2_d_5312_2988_s_4_2.jpg"
  - "/images/202c2-87d8fb_b1ca111f1bc749c1a7b68224e064934dmv2_d_5312_2988_s_4_2.jpg"
---

_The goal of this project was to create an automated microchip reagent exposure and rinsing system. Awarded Most Technically Complete Project and the 2019 Gorlov Innovation Award._

A team of five mechanical engineers designed and fabricated an automated system for current lab processes at Northeastern University as a senior capstone design project. Sourcing, budgeting, planning, designing, fabricating, coding, troubleshooting, and assembling tasks were all completed by our team. While all tasks were split among team members to account for very short lead times, my primary roles included 3D modelling with SolidWorks, 3D scanning with Creaform/VX Elements, mechanical design, sourcing, and fabrication.

Please click the digital version of the poster board below to see a summary of the project.

![Poster board automated device](/images/475b7-87d8fb_b44b2b263a634e5eaf5405a405ddba40mv2_d_9600_7200_s_4_2.png)

Microchips are post-processed with chemical reagents to modify electrical surface properties. In order to meet the demand for chips available for testing in research labs, this process must be improved.

The current process is prone to human error, inconsistent, and time intensive. My team designed and fabricated a device to automate the chip reagent exposure and rinsing process, reducing cycle time and increasing process repeatability.

![process diagram fuid handling](/images/3d34b-87d8fb_daf0b92055da4c87b8ca50f4980fb9a5mv2.png)

The process can be summarized by the top view model found above and five simple repeated steps. This device is designed to completely accomplish a specific laboratory assay (similar to the ELISA process) as well as others requiring similar 96-well plate processes, a huge majority of existing assays.

<ol class="list-decimal pl-5 my-4 space-y-2 text-neutral-300">
<li>Reagent 1 is dispensed into a 96-well plate</li>
<li>Microchips are lowered into the plate and incubated for a predefined time</li>
<li>Deionized water is dispensed into a fresh 96-well plate</li>
<li>The chips are moved from reagent to DI water</li>
<li>Microchips must be transferred into at least four more fresh rinse plates to properly clean the samples to repeat the process for reagent 2 and so on</li>
</ol>

These tasks are currently performed manually by a lab technician over about 48 hours, requiring a system level solution with the following design constraints:

### Accuracy
- Fluid dispensing: ≈250µL ±1 µL
- Motion: ±1 mm

### Sample Handling
- Avoid shear stress on chip surfaces
- Microchips can only be exposed to air for ≤10 seconds.

### Cleanliness
- Avoid cross-contamination of reagents
- Rinse reagents & particulates from chips
- No reagent spillage in any area of machine

Here you can see the summarized progression of the overall design and approach with Rev 1 to the final model used for fabrication and assembly.

<div class="grid grid-cols-1 gap-4">
  <img src="/images/c3fde-87d8fb_ba22db733f4a40bfbf143567caf9424fmv2.jpg" alt="rev1" />
  <img src="/images/3756c-87d8fb_c0d1298e894b4ec4adde3657b2f21782mv2.jpg" alt="rev2" />
  <img src="/images/c9a7d-87d8fb_f771ed6eb6a345abb97c28f97550874bmv2_d_9600_4495_s_4_2.png" alt="rev3" />
</div>

The entire system is made up of five linear actuators, a conveyor belt, an off the shelf micropipette, Arduino, motor drivers, limit switches, and a lot of 80/20 framing. Component integration and lead time logistics were both critical at this stage. The system's degrees of freedom are detailed below.

<div style="display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 1rem !important; margin-top: 3rem !important; margin-bottom: 3rem !important; aspect-ratio: 1 / 1 !important; width: 100% !important;">

  <div style="background-color: #ffffff !important; display: flex !important; align-items: center !important; justify-content: center !important; overflow: hidden !important; width: 100% !important; height: 100% !important;">
    <img style="max-width: 100% !important; max-height: 100% !important; object-fit: contain !important; display: block !important;" src="/images/db43c-87d8fb_d79379168f7b46f0ac06c2aeeb8ec946mv2.jpg" />
  </div>
  
  <div style="background-color: #ffffff !important; display: flex !important; align-items: center !important; justify-content: center !important; overflow: hidden !important; width: 100% !important; height: 100% !important;">
    <img style="max-width: 100% !important; max-height: 100% !important; object-fit: contain !important; display: block !important;" src="/images/75c7c-87d8fb_0d1ec1f2dd954912aaf3859dfc0fa0a1mv2.jpg" />
  </div>
  
  <div style="background-color: #ffffff !important; display: flex !important; align-items: center !important; justify-content: center !important; overflow: hidden !important; width: 100% !important; height: 100% !important;">
    <img style="max-width: 100% !important; max-height: 100% !important; object-fit: contain !important; display: block !important;" src="/images/a122d-87d8fb_44d9a57175f4454092c652d780109a44mv2.png" />
  </div>
  
  <div style="background-color: #ffffff !important; display: flex !important; align-items: center !important; justify-content: center !important; overflow: hidden !important; width: 100% !important; height: 100% !important;">
    <img style="max-width: 100% !important; max-height: 100% !important; object-fit: contain !important; display: block !important;" src="/images/ad6a5-87d8fb_ab05ac861c28409a9cb1552fbe20fdc9mv2.png" />
  </div>
</div>

The microchip samples are moved along the Z-axis by a 100mm linear stage. The samples are mounted to adjustable aluminum arms to allow for use with many different lab processes. Drafted contact surfaces between the highlighted component below and a 96-well plate accurately moves each sample into a 96-well plate. Furthermore, the removable design reduces microchip exposure time.

Here you can see the actual CAD model itself (made with SolidWorks 2019) and annotations detailing a couple more important and creative design elements.


<iframe 
  title="Chip Block Holder Cover" 
  src="https://sketchfab.com/3d-models/chip-block-holder-cover-2a79757e73d64d76ba0050e407fbf6bb" 
  class="w-full aspect-video border-0" 
  allow="autoplay; fullscreen; xr-spatial-tracking" 
  execution-while-out-of-viewport 
  execution-while-not-rendered 
  web-share
></iframe>

A few more 3D printed components can be explorer below. These are the fluid containment components aligned with the linear actuator mounted micropipette for reagent drawing, tip loading, and tip ejecting. They are all designed to be easily removable from the frame and completely adjustable.

<iframe 
  title="Reservoir Trough Mount" 
  src="https://sketchfab.com/3d-models/reservoir-trough-mount-ad3bb32eeb254769b07b7cc500ece599" 
  class="w-full aspect-video border-0" 
  allow="autoplay; fullscreen; xr-spatial-tracking" 
  execution-while-out-of-viewport 
  execution-while-not-rendered 
  web-share
></iframe>

<iframe 
  title="Tip Trash" 
  src="https://sketchfab.com/3d-models/tip-trash-a2378674ac1b4bd5b4849375c2bcac3d" 
  class="w-full aspect-video border-0" 
  allow="autoplay; fullscreen; xr-spatial-tracking" 
  execution-while-out-of-viewport 
  execution-while-not-rendered 
  web-share
></iframe>

<iframe 
  title="Tip Rack Mount" 
  src="https://sketchfab.com/3d-models/tip-rack-mount-032ffc50b08d47f4bcf2b5bbe7d70203" 
  class="w-full aspect-video border-0" 
  allow="autoplay; fullscreen; xr-spatial-tracking" 
  execution-while-out-of-viewport 
  execution-while-not-rendered 
  web-share
></iframe>

The first (above) holds the disposable reagent troughs with two pins for securing the off the shelf fluid reservoir. Next is the used tip container; it is large enough to hold more than 100 tips without threat of spillage and therefore cross contamination. Finally, the strengthened form of the clean tip container was essential to providing stability while pressing the new tips onto the 8-headed micropipette.

Finite element analysis was conducted for this component as it is a clear possible point of failure. A similarly critical component was also analysed alongside. Both are worst case scenarios.

<div class="grid grid-cols-2 gap-4">
  <img src="/images/7dc06-87d8fb_eb664d36b9194c868ade2e0ba76da663mv2.jpg" alt="Result 1" />
  <img src="/images/cf7c9-87d8fb_7f1ac658555c47db820318af27232929mv2.jpg" alt="Result 2" />
</div>

Another bespoke additive manufactured component was designed to house the two motors actuating the aspiration and expulsion of all fluids and ejection of used pipette tips. Some clever tricks were necessary to get the cheap components working satisfactorily.

![Motor Housing 1](/images/84804-87d8fb_d041751825c64ae5a62ad1b8b34fd93dmv2.jpg)
![Motor Housing 2](/images/34a49-87d8fb_cf32cbf2bad841569d82242ee74d74e1mv2.jpg)

The most difficult portion of the project, for a team of five mechanical engineers, was controls. The automation of multiple linear actuators with daisy-chained drivers connected to an Arduino board. Arduino IDE (C/C++ language) was used for programming all actuators, limit switches, stepper motor drivers, and procedures.

![autodriver hookup](/images/2e6e8-87d8fb_61d6924afa114fbe92a1108a83cf0034mv2.png)

Professionals currently working in the industry were presented with this project summary poster board alongside the bench top system as well as an oral presentation and slideshow.

The entirety of this eight month process solidified my 3D modelling competency, team management, project management, mechatronics integration, mechanical design, supplier coordination, client communication, and oral/written presentation skills.
