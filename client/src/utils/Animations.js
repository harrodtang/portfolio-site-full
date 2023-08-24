export default class Animations {
  static animations = new Animations();

  fadeInScreen = (screenName) => {
    let screen = document.getElementById(screenName);
    if (!screenName || !screen) return;

    screen.style.opacity = "5";
    screen.style.transform = "translateY(1px)";
  };
}
