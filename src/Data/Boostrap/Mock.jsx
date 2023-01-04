import U5 from "../../assets/images/UserImages/U5.jpg";
import U6 from "../../assets/images/UserImages/U6.jpg";
import U15 from "../../assets/images/UserImages/U15.jpg";
import U14 from "../../assets/images/UserImages/U14.jpg";

/* <--- BOOTSTRAP ALERTS ---> */
export const DefaultAlertList = [
  {
    id: "1",
    variant: "primary",
    text: "Primary alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "2",
    variant: "secondary",
    text: " Secondary alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "3",
    variant: "success",
    text: " Success alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "4",
    variant: "info",
    text: "Info alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "5",
    variant: "warning",
    text: "Warning alert—At vero eos et accusamus praesentium!",
  },
  {
    id: "6",
    variant: "danger",
    text: "Danger alert—At vero eos et accusamus praesentium!",
  },
];

export const LinkAlertList = [
  {
    id: "1",
    show: "Well done!",
    variant: "primary",
    text1: " You successfully read",
    text2: "this important alert message.",
  },
  {
    id: "2",
    show: "Well done!",
    variant: "secondary",
    text1: " You successfully read",
    text2: "this important alert message.",
  },
  {
    id: "3",
    show: "Well done!",
    variant: "success",
    text1: " You successfully read",
    text2: "this important alert message.",
  },
  {
    id: "4",
    show: "Heads up!",
    variant: "info",
    text: "This",
    text2: "alert needs your attention,",
    text3: "but its not super important.",
  },
  {
    id: "5",
    show: "Warning!",
    variant: "warning",
    text: "Better check yourself, youre",
    text2: "not looking too good.",
  },
  {
    id: "6",
    show: "Oh snap!",
    variant: "danger",
    text: "Change a few things up",
    text2: "and try submitting again.",
  },
];

export const IconAlertList = [
  {
    id: "1",
    icon: <i className="fa fa-check-circle-o me-2" aria-hidden="true"></i>,
    variant: "success",
    text: " Well done! You successfully read this important alert message.",
  },
  {
    id: "2",
    icon: <i className="fa fa-bell-o me-2" aria-hidden="true"></i>,
    variant: "info",
    text: " Heads up! This alert needs your attention, but it's not super important.",
  },
  {
    id: "3",
    icon: <i className="fa fa-exclamation me-2" aria-hidden="true"></i>,
    variant: "warning",
    text: " Warning! Better check yourself, you're not looking too good.",
  },
  {
    id: "4",
    icon: <i className="fa fa-frown-o me-2" aria-hidden="true"></i>,
    variant: "danger",
    text: "Oh snap!Change a few things up and try submitting again.",
  },
];

export const AvatarList = [
  {
    id: "1",
    classname: "alert-avatar alert-primary alert-dismissible",
    variant: "primary",
    pic: U14,
  },
  {
    id: "2",
    classname: "alert-avatar alert-success alert-dismissible",
    variant: "success",
    pic: U5,
  },
  {
    id: "3",
    classname: "alert-avatar alert-warning alert-dismissible",
    variant: "warning",
    pic: U15,
  },
  {
    id: "4",
    classname: "alert-avatar alert-danger alert-dismissible",
    variant: "danger",
    pic: U6,
  },
];

export const AlertList = [
  {
    id: "1",
    classname: "alert-default",
    variant: "default",
    icon: <i className="fe fe-download"></i>,
    show: "Default!",
  },
  {
    id: "2",
    classname: "alert-primary",
    variant: "primary",
    icon: <i className="fe fe-check-square"></i>,
    show: "Primary!",
  },
  {
    id: "3",
    classname: "alert-success",
    variant: "success",
    icon: <i className="fe fe-thumbs-up"></i>,
    show: "Success!",
  },
  {
    id: "4",
    classname: "alert-info",
    variant: "info",
    icon: <i className="fe fe-bell"></i>,
    show: "Info!",
  },
  {
    id: "5",
    classname: "alert-warning",
    variant: "warning",
    icon: <i className="fe fe-info"></i>,
    show: "Warning!",
  },
  {
    id: "6",
    classname: "alert-danger mb-0",
    variant: "danger",
    icon: <i className="fe fe-slash"></i>,
    show: "Danger!",
  },
];

export const IconDismissList = [
  {
    id: "1",
    classname: "alert-default",
    variant: "default",
    icon: <i className="fe fe-download"></i>,
    show: "Default!",
  },
  {
    id: "2",
    classname: "alert-primary",
    variant: "primary",
    icon: <i className="fe fe-check-square"></i>,
    show: "Primary!",
  },
  {
    id: "3",
    classname: "alert-success",
    variant: "success",
    icon: <i className="fe fe-thumbs-up"></i>,
    show: "Success!",
  },
  {
    id: "4",
    classname: "alert-info",
    variant: "info",
    icon: <i className="fe fe-bell"></i>,
    show: "Info!",
  },
  {
    id: "5",
    classname: "alert-warning",
    variant: "warning",
    icon: <i className="fe fe-info"></i>,
    show: "Warning!",
  },
  {
    id: "6",
    classname: "alert-danger mb-0",
    variant: "danger",
    icon: <i className="fe fe-slash"></i>,
    show: "Danger!",
  },
];

export const AlertData = [
  {
    id: 1,
    color: "success",
    className: "icon-dimiss",
    icon: (
      <svg
        xmlns="http:www.w3.org/2000/svg"
        height="40"
        width="40"
        viewBox="0 0 24 24"
      >
        <path
          fill="#13bfa6"
          d="M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z"
          opacity=".99"
        />
        <path
          fill="#71d8c9"
          d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z"
        />
      </svg>
    ),
    Title: "Success message",
    description: "You successfully read this important alert message.",
  },
  {
    id: 2,
    color: "info",
    className: "icon-dimiss",
    icon: (
      <svg
        xmlns="http:www.w3.org/2000/svg"
        height="40"
        width="40"
        viewBox="0 0 24 24"
      >
        <path
          fill="#70a9ee"
          d="M20.05713,22H3.94287A3.02288,3.02288,0,0,1,1.3252,17.46631L9.38232,3.51123a3.02272,3.02272,0,0,1,5.23536,0L22.6748,17.46631A3.02288,3.02288,0,0,1,20.05713,22Z"
        />
        <circle cx="12" cy="17" r="1" fill="#1170e4" />
        <path
          fill="#1170e4"
          d="M12,14a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0v4A1,1,0,0,1,12,14Z"
        />
      </svg>
    ),
    Title: "Info message",
    description:
      "This alert needs your attention, but it's not super important.",
  },
  {
    id: 3,
    color: "warning",
    className: "icon-dimiss",
    icon: (
      <svg
        xmlns="http:www.w3.org/2000/svg"
        height="40"
        width="40"
        viewBox="0 0 24 24"
      >
        <path
          fill="#fad383"
          d="M15.728,22H8.272a1.00014,1.00014,0,0,1-.707-.293l-5.272-5.272A1.00014,1.00014,0,0,1,2,15.728V8.272a1.00014,1.00014,0,0,1,.293-.707l5.272-5.272A1.00014,1.00014,0,0,1,8.272,2H15.728a1.00014,1.00014,0,0,1,.707.293l5.272,5.272A1.00014,1.00014,0,0,1,22,8.272V15.728a1.00014,1.00014,0,0,1-.293.707l-5.272,5.272A1.00014,1.00014,0,0,1,15.728,22Z"
        />
        <circle cx="12" cy="16" r="1" fill="#f7b731" />
        <path
          fill="#f7b731"
          d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z"
        />
      </svg>
    ),
    Title: "Warning message",
    description: "Best check yo self, you're not looking too good",
  },
  {
    id: 4,
    color: "danger",
    className: "icon-dimiss",
    icon: (
      <svg
        xmlns="http:www.w3.org/2000/svg"
        height="40"
        width="40"
        viewBox="0 0 24 24"
      >
        <path
          fill="#f07f8f"
          d="M20.05713,22H3.94287A3.02288,3.02288,0,0,1,1.3252,17.46631L9.38232,3.51123a3.02272,3.02272,0,0,1,5.23536,0L22.6748,17.46631A3.02288,3.02288,0,0,1,20.05713,22Z"
        />
        <circle cx="12" cy="17" r="1" fill="#e62a45" />
        <path
          fill="#e62a45"
          d="M12,14a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0v4A1,1,0,0,1,12,14Z"
        />
      </svg>
    ),
    Title: "Danger message",
    description: "Change a few things up and try submitting again.",
  },
];

/* <--- DATA OFFCANVAS ---> */

export const BackDropOptions = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
  {
    name: "Enable backdrop (default)",
    scroll: false,
    backdrop: true,
  },
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

/* <--- OVERLAY TOOLTIP DATA ---> */

export const popoverData = [
  {
    id: "1",
    variant: "primary",

    placement: "top",
  },
  {
    id: "2",
    variant: "success",

    placement: "left",
  },
  {
    id: "3",
    variant: "danger",

    placement: "right",
  },
  {
    id: "4",
    variant: "warning",

    placement: "bottom",
  },
];

export const StaticTooltipData = [
  {
    id: "1",
    variant: "primary",
    classname: "bg-primary text-white",
    placement: "top",
  },
  {
    id: "2",
    variant: "secondary",
    classname: "bg-secondary text-white",
    placement: "bottom",
  },
];

export const ColoredTooltipData = [
  {
    id: "1",
    variant: "primary",
    popoverclass: "bg-primary",
    popheaderclass: "bg-primary text-white",
    placement: "top",
  },
  {
    id: "2",
    variant: "secondary",
    popoverclass: "bg-secondary",
    classname: "bg-secondary text-white",
    placement: "bottom",
  },
];
