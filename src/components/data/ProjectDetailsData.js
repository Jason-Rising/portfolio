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

// Technology SVGs
import UnityLogo from '../../assets/company_logos/unity.svg';
import BlenderLogo from '../../assets/company_logos/blender.svg';
import SteamLogo from '../../assets/company_logos/steamvr-branding.svg';
import CSharp from '../../assets/company_logos/csharp.svg';

export const ProjectDetailsDTO = (t) => { return [
    {
      // Anxiety Revelation of Mind Game
    route: "/anxiety-revelation-of-mind",
    widgetImg: AnxietyWidget,
    title: t("anxiety-revelation-of-mind.title"),
    banner: AnxietyBanner,
    bannerOpacity: 1,
    overview: t("anxiety-revelation-of-mind.overview"),
    technologies: [
      { image: UnityLogo, text: "Unity" },
      { image: CSharp, text: "C#" },
      { image: BlenderLogo, text: "Blender" }
    ],
    buttons: [
      {
        text: t("anxiety-revelation-of-mind.button-text"),
        href: 'https://sketch-729432.itch.io/anxiety-revelation-of-mind'
      },
    ],
    videos: [
      { src: "https://www.youtube.com/embed/OoUvYfuNVuo?si=JEU5yojGdc54kM8M", title: "Video 1" },
      { src: "https://www.youtube.com/embed/cVKqRjbJ4i8?si=Ui9jrysC0APudi9J", title: "Video 2" },
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
    route: "/dev2",
    title: "VR Test",
    overview: "Yeah nah.",
    technologies: [
      { image: UnityLogo, text: "Unity" },
      { image: BlenderLogo, text: "Blender" },
      { image: SteamLogo, text: "SteamVR" },
    ],
    videos: [
      { src: "https://www.youtube.com/embed/OoUvYfuNVuo?si=JEU5yojGdc54kM8M", title: "Video 1" },
      { src: "https://www.youtube.com/embed/OoUvYfuNVuo?si=JEU5yojGdc54kM8M", title: "Video 2" },
    ],
    images: [
      { src: ProfilePic, alt: "Profile" },
      { src: Cave, alt: "Cave" },
      { src: Mountain, alt: "Dragon" },
      { src: Dragon, alt: "Mountain" },
    ],
  }
]};
  