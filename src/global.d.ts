type ButtonProps = {
  buttonLink: string; // "/url style string"
  buttonText: string;
  buttonStyle: string;
  buttonColorType: "red" | "light";
  buttonType?: "button" | "submit" | "reset";
};

type MenuItems = {
  /* Variable number of page labels and their corresponding URLS */
  [label: string]: string;
};

type BubbleProps = {
  title: string;
  className: string;
  skillsList: string[];
  skillsIconList: string[];
};

type GalleryFrameProps = {
  imagePath: string;
  clickDirection: "left" | "right";
};
