// Project: Anxiety Revelation of Mind
import AnxietyBanner from '../../assets/images/projects/anxiety_revelation_of_mind/anxiety_banner.jpg';
import AnxietyBannerSmall from '../../assets/images/projects/anxiety_revelation_of_mind/anxiety_banner_small.jpg';
import AnxietyWidget from '../../assets/images/projects/anxiety_revelation_of_mind/anxiey_game.jpg';
import AnxietyWidgetSmall from '../../assets/images/projects/anxiety_revelation_of_mind/anxiey_game_small.jpg';
import AnxietyDesolateRoom2 from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/desolate_room2.jpg';
import AnxietyHallwayGhost from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/hallway_ghost.jpg';
import AnxietyBoilerRoom from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/boiler_room.jpg';
import AnxietyInventoryUI from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/inventory_ui.jpg';
import AnxietyDesolateRoom1 from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/desolate_room1.jpg';
import AnxietyObjectPhysics from '../../assets/images/projects/anxiety_revelation_of_mind/screenshots/physics.gif';

// Project: Beyond Mankind
import BeyondMankindBanner from '../../assets/images/projects/beyond_mankind/monastery.jpg';
import BeyondMankindBannerSmall from '../../assets/images/projects/beyond_mankind/monastery_small.jpg';
import BeyondMankindCave from '../../assets/images/projects/beyond_mankind/cave1.jpg';
import BeyondMankindLandscape1 from '../../assets/images/projects/beyond_mankind/landscape1.jpg';
import BeyondMankindLandscape2 from '../../assets/images/projects/beyond_mankind/landscape2.jpg';
import BeyondMankindCave2 from '../../assets/images/projects/beyond_mankind/cave2.PNG';

// Project: Dragon Forge
import DragonForgeBanner from '../../assets/images/projects/dragon_forge/banner.png';
import DragonForgeBannerSmall from '../../assets/images/projects/dragon_forge/banner_small.png';
import DragonForgeWidget from '../../assets/images/projects/dragon_forge/widget.jpg';
import DragonForgeWidgetSmall from '../../assets/images/projects/dragon_forge/widget_small.jpg';
import DragonForgeMountainView from '../../assets/images/projects/dragon_forge/mountain_view.png';
import DragonForgeMountainViewSmall from '../../assets/images/projects/dragon_forge/mountain_view_small.png';
import DragonForgeOceanView from '../../assets/images/projects/dragon_forge/ocean_view.png';
import DragonForgeOceanViewSmall from '../../assets/images/projects/dragon_forge/ocean_view_small.png';
import DragonForgeMap from '../../assets/images/projects/dragon_forge/map.gif';
import DragonForgeMapSmall from '../../assets/images/projects/dragon_forge/map_small.jpg';
import DragonForgeCity from '../../assets/images/projects/dragon_forge/city.png';
import DragonForgeCitySmall from '../../assets/images/projects/dragon_forge/city_small.png';
import DragonForgeDesert from '../../assets/images/projects/dragon_forge/desert.png';
import DragonForgeDesertSmall from '../../assets/images/projects/dragon_forge/desert_small.png';

// Project: YouTube
import YoutTubeBanner from '../../assets/images/projects/youtube/youtube_banner.png';
import YoutTubeBannerSmall from '../../assets/images/projects/youtube/youtube_banner_small.png';
import YoutTubeWiget from '../../assets/images/projects/youtube/yt_widget.jpg';
import YoutTubeWigetSmall from '../../assets/images/projects/youtube/yt_widget_small.jpg';

// Project: Sorting Visualiser 
import SortingVisualiserBanner from '../../assets/images/projects/sorting_visualiser/banner.png';
import SortingVisualiserBannerSmall from '../../assets/images/projects/sorting_visualiser/banner_small.png';
import SortingVisualiserWigdet from '../../assets/images/projects/sorting_visualiser/algorithm_visualisation.jpg';
import SortingVisualiserWigdetSmall from '../../assets/images/projects/sorting_visualiser/algorithm_visualisation_small.jpg';

// Project: VR Lenses
import VRLensesWidget from '../../assets/images/projects/vr_lenses/lenes_vr.jpg';
import VRLensesWidgetSmall from '../../assets/images/projects/vr_lenses/lenes_vr_small.jpg';
import VRLensesBanner from '../../assets/images/projects/vr_lenses/banner.png';
import VRLensesBannerSmall from '../../assets/images/projects/vr_lenses/banner_small.png';

// Project: Portfolio
import PortfolioWidget from '../../assets/images/profile_zoom.png';
import PortfolioWidgetSmall from '../../assets/images/profile_zoom_small.png';

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
    route: "/vr-lenses",
    widget: {
      image: VRLensesWidget,
      imageS: VRLensesWidgetSmall,
      title: t("vr-lenses.title"),
      description: t("vr-lenses.widget-description"),
    },
    title: t("vr-lenses.title"),
    banner: {
      imgL: VRLensesBanner,
      imgS: VRLensesBannerSmall
    },
    bannerTransform: {
      translateY: '-250px',
      translateYMobile: '-280px',
      translateXMobile: '-0px',
    },
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
    // YoutTube
    route: "/youtube",
    widget: {
      image: YoutTubeWiget,
      imageS: YoutTubeWigetSmall,
      title: t("youtube.title"),
      description: t("youtube.widget-description"),
    },
    title: t("youtube.title"),
    banner: {
      imgL: YoutTubeBanner,
      imgS: YoutTubeBannerSmall
    },
    bannerTransform: {
      translateY: '-190px',
      translateYMobile: '-180px',
      translateXMobile: '0px',
    },
    bannerGradient: true,
    bannerOpacity: 1,
    overview: t("youtube.overview"),
    buttons: [
      {
        text: t("youtube.button-channel"),
        href: 'https://www.youtube.com/@sketch3436'
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
      imageS: DragonForgeWidgetSmall,
      title: t("dragon-forge.title"),
      description: t("dragon-forge.widget-description"),
    },
    title: t("dragon-forge.title"),
    banner: {
      imgL: DragonForgeOceanView,
      imgS: DragonForgeOceanViewSmall
    },
    bannerTransform: {
      translateY: '-175px',
      translateYMobile: '-220px',
      translateXMobile: '-200px',
    },
    bannerGradient: true,
    bannerOpacity: 0.8,
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
      { src: DragonForgeCity, imgS: DragonForgeCitySmall, alt: "Cave Encounter" },
      { src: DragonForgeMap, imgS: DragonForgeMapSmall, alt: "Environments" },
      { src: DragonForgeBanner, imgS: DragonForgeBannerSmall, alt: "Cave" },
      { src: DragonForgeOceanView, imgS: DragonForgeOceanViewSmall, alt: "Alpine Landscape 2" },
      { src: DragonForgeDesert, imgS: DragonForgeDesertSmall, alt: "Cave Encounter" },
      { src: DragonForgeMountainView, imgS: DragonForgeMountainViewSmall, alt: "Alpine Landscape 1" },
    ],
  },
  {
    // Beyond Mankind
    route: "/beyond-mankind",
    widget: {
      image: BeyondMankindBanner,
      imageS: BeyondMankindBannerSmall,
      title: t("beyond-mankind.title"),
      description: t("beyond-mankind.widget-description"),
    },
    title: t("beyond-mankind.title"),
    banner: {
      imgL: BeyondMankindBanner,
      imgS: BeyondMankindBannerSmall
    },
    bannerTransform: {
      translateY: '-100px',
      translateYMobile: '-100px',
      translateXMobile: '0px',
    },
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
      imageS: AnxietyWidgetSmall,
      title: t("anxiety-revelation-of-mind.title"),
      description: t("anxiety-revelation-of-mind.widget-description"),
    },
    title: t("anxiety-revelation-of-mind.title"),
    banner: {
      imgL: AnxietyBanner,
      imgS: AnxietyBannerSmall
    },
    bannerTransform: {
      translateY: '0px',
      translateYMobile: '-0px',
      translateXMobile: '-200px',
    },
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
  {    
    // Sorting Visualiser 
    route: "/sorting-visualiser",
    widget: {
      image: SortingVisualiserWigdet,
      imageS: SortingVisualiserWigdetSmall,
      title: t("sorting-visualiser.title"),
      description: t("sorting-visualiser.widget-description"),
    },
    title: t("sorting-visualiser.title"),
    banner: {
      imgL: SortingVisualiserBanner,
      imgS: SortingVisualiserBannerSmall
    },
    bannerTransform: {
      translateY: '-130px',
      translateYMobile: '-40px',
      translateXMobile: '-0px',
    },
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
    // Portfolio 
    route: "/portfolio-project",
    widget: {
      image: PortfolioWidget,
      imageS: PortfolioWidgetSmall,
      title: t("portfolio-project.title"),
      description: t("portfolio-project.widget-description"),
    },
    title: t("portfolio-project.title"),
    banner: {
      imgL: VRLensesBanner,
      imgS: VRLensesBanner
    },
    bannerTransform: {
      translateY: '-250px',
      translateYMobile: '0px',
      translateXMobile: '-350px',
    },
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
  } 
]};
  