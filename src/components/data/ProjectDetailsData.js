import ProfilePic from '../../assets/images/profile.jpg';
import Cave from '../../assets/images/projects/beyond_mankind/cave1.jpg';
import Mountain from '../../assets/images/projects/beyond_mankind/landscape1.jpg';
import Dragon from '../../assets/images/projects/dragon_forge/swamp_2.jpg';

// Project: Anxiety Revelation of Mind
import AnxietyBanner from '../../assets/images/projects/anxiety_revelation_of_mind/anxiety_banner.jpg';
import AnxietyWidget from '../../assets/images/projects/anxiety_revelation_of_mind/anxiey_game.jpg';
import AnxietyDesolateRoom2 from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/desolate_room2.jpg';
import AnxietyHallwayGhost from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/hallway_ghost.jpg';
import AnxietyBoilerRoom from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/boiler_room.jpg';
import AnxietyInventoryUI from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/inventory_ui.jpg';
import AnxietyDesolateRoom1 from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/desolate_room1.jpg';
import AnxietyObjectPhysics from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/physics.gif';

// Project: Beyond Mankind
import BeyondMankindBanner from '../../assets/images/projects/beyond_mankind/monastery.jpg';
import BeyondMankindCave from '../../assets/images/projects/beyond_mankind/cave1.jpg';
import BeyondMankindLandscape1 from '../../assets/images/projects/beyond_mankind/landscape1.jpg';
import BeyondMankindLandscape2 from '../../assets/images/projects/beyond_mankind/landscape2.jpg';
import BeyondMankindCave2 from '../../assets/images/projects/beyond_mankind/cave2.PNG';

// Project: Dragon Forge
import DragonForgeBanner from '../../assets/images/projects/dragon_forge/banner.png';
import DragonForgeWidget from '../../assets/images/projects/dragon_forge/widget.jpg';
import DragonForgeMountainView from '../../assets/images/projects/dragon_forge/mountain_view.png';
import DragonForgeOceanView from '../../assets/images/projects/dragon_forge/ocean_view.png';
import DragonForgeMap from '../../assets/images/projects/dragon_forge/map.gif';
import DragonForgeCity from '../../assets/images/projects/dragon_forge/city.png';
import DragonForgeDesert from '../../assets/images/projects/dragon_forge/desert.png';

// Project: YouTube
import YoutTubeBanner from '../../assets/images/projects/youtube/youtube_banner.png';
import YoutTubeWiget from '../../assets/images/projects/youtube/yt_widget.jpg';

// Project: Sorting Visualiser 
import SortingVisualiserBanner from '../../assets/images/projects/sorting_visualiser/banner.png';
import SortingVisualiserWigdet from '../../assets/images/projects/sorting_visualiser/algorithm_visualisation.jpg';

// Project: VR Lenses
import VRLensesWidget from '../../assets/images/projects/vr_lenses/lenes_vr.jpg';
import VRLensesBanner from '../../assets/images/projects/vr_lenses/banner.png';

// Project: Portfolio
import PortfolioWidget from '../../assets/images/profile_zoom.png';
// Technology SVGs
import UnityLogo from '../../assets/company_logos/unity.svg';
import BlenderLogo from '../../assets/company_logos/blender.svg';
import SteamLogo from '../../assets/company_logos/steamvr-branding.svg';
import CSharp from '../../assets/company_logos/csharp.svg';
import Maya from '../../assets/company_logos/maya.svg';
import React from '../../assets/company_logos/react.svg';
import HTML from '../../assets/company_logos/html-5.svg';
import JS from '../../assets/company_logos/js.svg';
import CSS from '../../assets/company_logos/css.svg';

export const ProjectDetailsDTO = (t) => { return [
  {    
    // VR Lenses 
    route: "/portfolio-project",
    widget: {
      image: PortfolioWidget,
      title: t("portfolio-project.title"),
      description: t("portfolio-project.widget-description"),
    },
    title: t("portfolio-project.title"),
    banner: VRLensesBanner,
    bannerTranslateY: '-250px',
    bannerGradient: true,
    bannerOpacity: 0.3,
    overview: t("portfolio-project.overview"),
    technologies: [
      { image: React, text: "React" },
      { image: HTML, text: "HTML" },
      { image: CSS, text: "CSS" },
      { image: JS, text: "JS" },
    ],
    buttons: [
      {
        text: t("portfolio-project.button-view-source-code"),
        href: 'https://github.com/Jason-Rising/portfolio'
      },
    ],
  },    
  {    
    // VR Lenses 
    route: "/vr-lenses",
    widget: {
      image: VRLensesWidget,
      title: t("vr-lenses.title"),
      description: t("vr-lenses.widget-description"),
    },
    title: t("vr-lenses.title"),
    banner: VRLensesBanner,
    bannerTranslateY: '-250px',
    bannerGradient: true,
    bannerOpacity: 0.3,
    overview: t("vr-lenses.overview"),
    technologies: [
      { image: UnityLogo, text: "Unity" },
      { image: CSharp, text: "C#" },
      { image: SteamLogo, text: "SteamVR" },
    ],
    buttons: [
      {
        text: t("vr-lenses.button-view-app"),
        href: 'https://github.com/Jason-Rising/Lenses-VR'
      },
    ],
    videos: [
      { src: 'https://www.youtube.com/embed/UwTIil3YcgA?si=P5auWLALeB8QzKzu', title: 'Lenses VR - Preset System Showcase'},
      { src: 'https://www.youtube.com/embed/vI3rvDqMJAQ?si=R1-mu1EHW9nGmLYx', title: 'Lenses VR - Early Development'},
    ]
  },    
  {    
    // Sorting Visualiser 
    route: "/sorting-visualiser",
    widget: {
      image: SortingVisualiserWigdet,
      title: t("sorting-visualiser.title"),
      description: t("sorting-visualiser.widget-description"),
    },
    title: t("sorting-visualiser.title"),
    banner: SortingVisualiserBanner,
    bannerTranslateY: '-130px',
    bannerGradient: true,
    bannerOpacity: 1,
    overview: t("sorting-visualiser.overview"),
    technologies: [
      { image: React, text: "React" },
      { image: HTML, text: "HTML" },
      { image: CSS, text: "CSS" },
      { image: JS, text: "JavaScript" }
    ],
    buttons: [
      {
        text: t("sorting-visualiser.button-view-app"),
        href: 'https://jason-rising.github.io/Sorting-Visualiser/'
      },
      {
        text: t("sorting-visualiser.button-view-source-code"),
        href: 'https://github.com/Jason-Rising/Sorting-Visualiser'
      },
    ],
    videos: [
      { src: 'https://www.youtube.com/embed/3nnnnRLn2MY?si=B7Zzq9dSC5RJMlAe', title: 'Sorting Visualiser Showcase'},
    ]
  },  
  {
    // YoutTube
    route: "/youtube",
    widget: {
      image: YoutTubeWiget,
      title: t("youtube.title"),
      description: t("youtube.widget-description"),
    },
    title: t("youtube.title"),
    banner: YoutTubeBanner,
    bannerTranslateY: '-190px',
    bannerGradient: true,
    bannerOpacity: 1,
    overview: t("youtube.overview"),
    buttons: [
      {
        text: t("youtube.button-channel"),
        href: 'https://store.steampowered.com/app/1163930/Dragon_Forge/'
      },
    ],
    videos: [
      { src: 'https://www.youtube.com/embed/Rfn9zM8Dfog?si=jigwCquxjKpaZTX5', title: 'Unity Tips and Tricks for Photorealism | Tutorial 2020'},
      { src: 'https://www.youtube.com/embed/osqC1-j0Oa8?si=xx_jLIyBs_488dUB', title: 'I Recreated The Witcher 1 with Realistic Graphics in Unity!'},
      { src: 'https://www.youtube.com/embed/PT-ve1R6Xxo?si=ZLM5LOmXfVD49_Uo', title: 'Uncharted Mansion Level Design - Unity | + Asset Showcase'},
      { src: 'https://www.youtube.com/embed/pezeF6Vv5rI?si=jsFMtWqBpfo5hkp7', title: 'How to improve game performance | Unity 2019'},
      { src: 'https://www.youtube.com/embed/PELoyIT437Y?si=L02Tu4SSS7m866Ld', title: 'Forest Level Design in 30mins using Free Assets | Unity 2019 Follow Along Tutorial'},
      { src: 'https://www.youtube.com/embed/TxLdL46rfxg?si=GAAzLKQv2gtqpswQ', title: 'Photorealistic Desert in Unity HDRP | Castle Valley Collection'},
    ]
  },  
  {
    // Dragon Forge
    route: "/dragon-forge",
    widget: {
      image: DragonForgeWidget,
      title: t("dragon-forge.title"),
      description: t("dragon-forge.widget-description"),
    },
    title: t("dragon-forge.title"),
    banner: DragonForgeOceanView,
    bannerTranslateY: '-175px',
    bannerGradient: true,
    bannerOpacity: 1,
    overview: t("dragon-forge.overview"),
    technologies: [
      { image: UnityLogo, text: "Unity" },
      { image: CSharp, text: "C#" },
      { image: BlenderLogo, text: "Blender" }
    ],
    buttons: [
      {
        text: t("dragon-forge.button-steam"),
        href: 'https://store.steampowered.com/app/1163930/Dragon_Forge/'
      },
      {
        text: t("dragon-forge.button-website"),
        href: 'https://legendstudio.com/'
      },
    ],
    videos: [
      { src: 'https://www.youtube.com/embed/lvYCJrjPjAw?si=9CWWbMKlnEFLXvN3', title: 'Dragon Forge: Gameplay Trailer'},
      { src: 'https://www.youtube.com/embed/Ad9SL3-ZX9E?si=LsFv__8jYUqR5OWR', title: 'Long Play Demo Stream'}
    ],
    images: [
      { src: DragonForgeCity, alt: "Cave Encounter" },
      { src: DragonForgeMap, alt: "Environments" },
      { src: DragonForgeBanner, alt: "Cave" },
      { src: DragonForgeOceanView, alt: "Alpine Landscape 2" },
      { src: DragonForgeDesert, alt: "Cave Encounter" },
      { src: DragonForgeMountainView, alt: "Alpine Landscape 1" },
    ],
  },
  {
    // Beyond Mankind
    route: "/beyond-mankind",
    widget: {
      image: BeyondMankindBanner,
      title: t("beyond-mankind.title"),
      description: t("beyond-mankind.widget-description"),
    },
    title: t("beyond-mankind.title"),
    banner: BeyondMankindBanner,
    bannerTranslateY: '-100px',
    bannerGradient: true,
    bannerOpacity: 1,
    overview: t("beyond-mankind.overview"),
    technologies: [
      { image: UnityLogo, text: "Unity" },
      { image: CSharp, text: "C#" },
      { image: BlenderLogo, text: "Blender" }
    ],
    buttons: [
      {
        text: t("beyond-mankind.button-steam"),
        href: 'https://store.steampowered.com/app/1301590/Beyond_Mankind_The_Awakening/'
      },
      {
        text: t("beyond-mankind.button-website"),
        href: 'https://www.brytenwaldastudios.com/'
      },
    ],
    videos: [
      { src: 'https://www.youtube.com/embed/UAeYelMAzeY?si=iUoVvxRx6HEtutSY', title: 'Beyond Mankind: Trailer 1'},
      { src: 'https://www.youtube.com/embed/SX4zm4_Bu3I?si=55KwOXPp4_qfq9yf', title: 'Beyond Mankind: Trailer 2'}
    ],
    images: [
      { src: BeyondMankindCave, alt: "Cave" },
      { src: BeyondMankindLandscape1, alt: "Alpine Landscape 1" },
      { src: BeyondMankindLandscape2, alt: "Alpine Landscape 2" },
      { src: BeyondMankindBanner, alt: "Monastery" },
      { src: BeyondMankindCave2, alt: "Cave Encounter" }
    ],
  },
  {
    // Anxiety Revelation of Mind Game
    route: "/anxiety-revelation-of-mind",
    widget: {
      image: AnxietyWidget,
      title: t("anxiety-revelation-of-mind.title"),
      description: t("anxiety-revelation-of-mind.widget-description"),
    },
    title: t("anxiety-revelation-of-mind.title"),
    banner: AnxietyBanner,
    bannerOpacity: 1,
    overview: t("anxiety-revelation-of-mind.overview"),
    technologies: [
      { image: UnityLogo, text: "Unity" },
      { image: CSharp, text: "C#" },
      { image: Maya, text: "AutoDesk Maya" }
    ],
    buttons: [
      {
        text: t("anxiety-revelation-of-mind.button-text"),
        href: 'https://sketch-729432.itch.io/anxiety-revelation-of-mind'
      },
    ],
    videos: [
      { src: "https://www.youtube.com/embed/OoUvYfuNVuo?si=JEU5yojGdc54kM8M", title: "CJU Anxiety: Revelation of Mind Let's Play" },
      { src: "https://www.youtube.com/embed/cVKqRjbJ4i8?si=Ui9jrysC0APudi9J", title: "Game Tralier" },
    ],
    images: [
      { src: AnxietyDesolateRoom1, alt: "Desolate Room 1" },
      { src: AnxietyInventoryUI, alt: "Inventory UI" },
      { src: AnxietyBoilerRoom, alt: "Boiler Room" },
      { src: AnxietyObjectPhysics, alt: "Object Physics" },
      { src: AnxietyDesolateRoom2, alt: "Desolate Room 2" },
      { src: AnxietyHallwayGhost, alt: "Hallway Ghost" },
    ],
  },
]};
  