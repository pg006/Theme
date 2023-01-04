import React from "react";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import logo2 from "../../assets/images/Logo/logo2.png";

// Sample Sweet Alerts

export const CongratulationAlert = () => {
  const HandleClick = () => {
    Swal.fire({
      title: "Congratulations!",
      text: "Your message has been succesfully sent",
      allowOutsideClick: false,
      icon: "success",
    });
  };
  return (
    <Button
      className="mt-2 me-2"
      variant="success"
      onClick={() => {
        HandleClick();
      }}
    >
      Success Alert
    </Button>
  );
};

export const WarningAlert = () => {
  const HandleClick = () => {
    Swal.fire({
      title: "Alert",
      text: "Waring alert",
      icon: "warning",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: "Stay on the page",
      cancelButtonText: "Exit",
      confirmButtonColor: "default",
      cancelButtonColor: "#6c5ffc",
    });
  };

  return (
    <Button
      className="mt-2 me-2"
      variant="warning"
      onClick={() => {
        HandleClick();
      }}
    >
      Warning Alert
    </Button>
  );
};

export const DangerAlert = () => {
  const HandleClick = () => {
    Swal.fire({
      title: "Alert",
      text: "Danger alert",
      icon: "error",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: "Stay on the page",
      cancelButtonText: "Exit",
      confirmButtonColor: "default",
      cancelButtonColor: "#6c5ffc",
    });
  };

  return (
    <Button
      className="mt-2 me-2"
      variant="danger"
      onClick={() => {
        HandleClick();
      }}
    >
      Danger Alert
    </Button>
  );
};

export const InfoAlert = () => {
  const HandleClick = () => {
    Swal.fire({
      title: "Alert",
      text: "Info alert",
      icon: "info",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: "Stay on the page",
      cancelButtonText: "Exit",
      confirmButtonColor: "default",
      cancelButtonColor: "#6c5ffc",
    });
  };

  return (
    <Button
      className="mt-2 me-2 mb-2 mb-md-0"
      variant="info"
      onClick={() => {
        HandleClick();
      }}
    >
      Info Alert
    </Button>
  );
};

// Forms Sweet-alert

export const SimpleAlert = () => {
  const HandleClick = () => {
    Swal.fire({ title: "Your message", allowOutsideClick: false });
  };

  return (
    <Button
      className="mt-2 me-2"
      variant="primary"
      onClick={() => {
        HandleClick();
      }}
    >
      Simple Alert
    </Button>
  );
};

export const TitlewithAlert = () => {
  const HandleClick = () => {
    Swal.fire({
      title: "Your message",
      text: "Your message",
      allowOutsideClick: false,
    });
  };

  return (
    <Button
      className="mt-2 me-2"
      variant="secondary"
      onClick={() => {
        HandleClick();
      }}
    >
      Alert with title
    </Button>
  );
};

export const ImagewithAlert = () => {
  const HandleClick = () => {
    Swal.fire({
      title: "Your message",
      text: "Your message",
      imageUrl: logo2,
      imageAlt: "logo",
      allowOutsideClick: false,
    });
  };

  return (
    <Button
      className="mt-2 me-2"
      variant="info"
      onClick={() => {
        HandleClick();
      }}
    >
      Alert with image
    </Button>
  );
};

export const TimmerwithAlert = () => {
  const HandleClick = () => {
    Swal.fire({
      title: "Your message",
      text: "Your message(close after 2 seconds)",
      allowOutsideClick: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <Button
      className="mt-2 me-2"
      variant="warning"
      onClick={() => {
        HandleClick();
      }}
    >
      with timer
    </Button>
  );
};
