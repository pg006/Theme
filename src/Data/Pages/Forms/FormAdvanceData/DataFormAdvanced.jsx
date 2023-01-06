import React, { useRef, useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Dropzone from "react-dropzone";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Compact } from "@uiw/react-color";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { CalendarPickerSkeleton } from "@mui/x-date-pickers/CalendarPickerSkeleton";
import getDaysInMonth from "date-fns/getDaysInMonth";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";
import { ChromePicker, SketchPicker } from "react-color";
import { Button } from "react-bootstrap";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import {
  BasicSelectOption,
  Data,
  dualListOptions,
  groupedOptions,
  selectBoxOptions,
  selectBoxOptions2,
  usersListOption,
} from "./Mock";

// File Upload 1

export const FileUpload = () => {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));

  return (
    <div className="App">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p className="mt-5">Drag and Drop a file here or Click</p>
          </div>
        )}
      </Dropzone>
      <div className="dropzone-main">
        <strong>Files:</strong>
        <ul>
          {fileNames.map((fileName) => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// File Upload 2
export const FileuploadCustomised = () => {
  const [files, setFiles] = React.useState([]);
  console.log(files);
  const handleChange = (File) => {
    setFiles(File);
  };
  return (
    <DropzoneArea
      acceptedFiles={["image/*"]}
      onChange={(e) => {
        handleChange(e);
      }}
      showFileNames
      dropzoneText="Drag and Drop a file here or Click"
      showAlerts={true}
      filesLimit={20}
    />
  );
};

// File Upload 3

export const DisabledFileDropZone = () => {
  const setFileNames = useState;
  const handleDrop = (acceptedFiles) =>
    setFileNames(acceptedFiles.map((file) => file.name));
  return (
    <div className="App">
      <Dropzone onDrop={handleDrop} disabled>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p className="disable-dropzone">
              Drag and Drop a file here or Click
            </p>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

// Multiple Filedropzone

export const CustomFileuploader = () => {
  const [files, setFiles] = React.useState([]);
  console.log(files);
  const handleChange = (File) => {
    setFiles(File);
  };
  return (
    <DropzoneArea
      acceptedFiles={["image/*"]}
      onChange={(e) => {
        handleChange(e);
      }}
      showFileNames
      showAlerts={true}
      filesLimit={100}
      dropzoneText="Drag and Drop a file here or Click"
    />
  );
};

// Select2 elements START

// Basic
export const BasicSelect = () => {
  return (
    <Select
      options={BasicSelectOption}
      placeholder="choose one"
      classNamePrefix="Select"
    />
  );
};

// Basic Select2
export const BasicSelectCustom = () => {
  return <Select options={groupedOptions} classNamePrefix="Select" />;
};

// Basic Select3

export const BasicSelectSearch = () => {
  return (
    <Select
      className="basic-single"
      classNamePrefix="Select"
      defaultValue={Data[0]}
      name="color"
      options={Data}
    />
  );
};

// User List

const animatedComponents = makeAnimated();

export const Userslist = () => {
  return (
    <div>
      <div>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={2}
          isMulti
          options={usersListOption}
          classNamePrefix="Select"
        />
      </div>
    </div>
  );
};

// Select2 elements END

// Time Picker START

// Default Time Picker

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
      height: 40,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 150,
    },
  })
);

export const TimePickers = () => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        label="Default Time Picker"
        id="time"
        type="time"
        defaultValue="00:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
      />
    </form>
  );
};

// Basic Time picker2
// Set the scroll position

export const BasicTimePicker = () => {
  const [value, setValue] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Set the scroll position"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

// Dynamically Time picker

export const DynamicTimePicker = () => {
  const [value, setValue] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TimePicker
          label="Dynamic Time Picker"
          ampm={false}
          openTo="hours"
          views={["hours", "minutes"]}
          inputFormat="HH:mm"
          mask="__:__"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

// Time Picker END

// Color Picker START

// Basic

export const BasicStyle = () => {
  const [color, setColor] = useState("#6c5ffc");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleChangeComplete = (color) => {
    console.log(color);
  };

  return (
    <div>
      <p className=" mb-1">Same way you select color in Adobe Photoshop.</p>
      <Button
        className="btn-pill"
        size="sm"
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? "Close Color Picker" : "Pick a Color"}
      </Button>
      {showColorPicker && (
        <ChromePicker
          className="mt-3"
          disableAlpha={true}
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
          onChangeComplete={handleChangeComplete}
        />
      )}
    </div>
  );
};

// SketchExample style

export const SketchExample = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({ r: "241", g: "112", b: "19", a: "1" });
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.rgb);
  };
  return (
    <div>
      <p className="mt-4 mb-1">
        Show Adove photoshop with Alphaline and pallete.
      </p>
      <Button
        className="btn-pill"
        variant="primary"
        size="sm"
        onClick={() => {
          handleClick();
        }}
      >
        <ColorLensIcon />
      </Button>
      {displayColorPicker ? (
        <div>
          <div
            onClick={() => {
              handleClose();
            }}
          />
          <SketchPicker
            className="mt-3"
            color={color}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
// Palettes Style

export const PalettesStyle = () => {
  const [hex, setHex] = useState("#fff");
  return (
    <div>
      <p className="mt-4 mb-1">
        Show pallete only. If you'd like, spectrum can show the palettes you
        specify, and nothing else.
      </p>
      <Compact
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    </div>
  );
};

// Color Picker END

// Styled Color Picker START

// Styled Color Picker END

// Date, Month, Year Range Picker START

// Date

export const BasicDatePicker = () => {
  const [value, setValue] = useState();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date Range"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

// Month

export const MonthPicker = () => {
  const [value, setValue] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["month"]}
        label="Month Range"
        minDate={new Date("2012-03-01")}
        maxDate={new Date("2023-06-01")}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
};

export const YearPicker = () => {
  const [value, setValue] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["year"]}
        label="Year Range"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
};

// Date, Month, Year Range Picker END

// Default Date picker

export const DefaultDatePicker = () => {
  const [value, setValue] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date Range"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

// Multiple Months

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const fakeFetch = (date, { signal }) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = getDaysInMonth(date);
      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
};

const initialValue = new Date();

export const MultipleMonths = () => {
  const requestAbortController = useRef();
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [value, setValue] = useState();

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        loading={isLoading}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        onMonthChange={handleMonthChange}
        renderInput={(params) => <TextField {...params} />}
        renderLoading={() => <CalendarPickerSkeleton />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.getDate()) > 0;

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? "🌚" : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

// Dual List Box START

export const DualList = () => {
  const [selected, setSelected] = useState([]);

  const onChange = (selected) => {
    setSelected(selected);
  };

  return (
    <DualListBox
      options={dualListOptions}
      selected={selected}
      allowDuplicates
      simpleValue={false}
      onChange={(e) => {
        onChange(e);
      }}
    />
  );
};

// Dual List Box END

// Select Box START

// Box 1

export const SelectBox = () => {
  let [value, setValue] = useState([]);
  const handleChange = (selected) => {
    setValue(selected);
  };

  return (
    <DualListBox
      canFilter
      selected={value}
      options={selectBoxOptions}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={(e) => {
        handleChange(e);
      }}
    />
  );
};

// Box 2

export const SelectBoxwithLabel = () => {
  const [value, setValue] = useState([]);
  const handleChange = (selected) => {
    setValue(selected);
  };
  return (
    <DualListBox
      canFilter
      selected={value}
      options={selectBoxOptions2}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }
        console.log(option);
        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {
          console.log(word);
          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={(e) => {
        handleChange(e);
      }}
    />
  );
};

// Select Box END

// Country selectorinterface StyledProps

export const CountrySelector = () => {
  return (
    <div>
      <PhoneInput
        country={"us"}
        value="1425652"
        onChange={(phone) => console.log({ phone })}
      />
    </div>
  );
};
