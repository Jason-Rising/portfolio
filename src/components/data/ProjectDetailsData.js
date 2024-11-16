import ProfilePic from '../../assets/images/profile.jpg';
import Cave from '../../assets/images/projects/beyond_mankind/cave1.jpg';
import Mountain from '../../assets/images/projects/beyond_mankind/landscape1.jpg';
import Anxierty from '../../assets/images/projects/anxiety_revelation_of_mind/anxiety_banner.jpg';
import Dragon from '../../assets/images/projects/dragon_forge/swamp_2.jpg';

import UnityLogo from '../../assets/company_logos/unity.svg';
import BlenderLogo from '../../assets/company_logos/blender.svg';
import SteamLogo from '../../assets/company_logos/steamvr-branding.svg';

export const ProjectDetailsDTO = (t) => { return [
    {
    route: "/dev",
    title: t("project_details_main.images"),
    overview: t("project_details_main.images"),
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
      { src: Anxierty, alt: "Anxiety" },
      { src: Dragon, alt: "Mountain" },
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
      { src: Anxierty, alt: "Anxiety" },
      { src: Dragon, alt: "Mountain" },
    ],
  }
]};
  