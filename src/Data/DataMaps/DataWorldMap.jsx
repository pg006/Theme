import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Annotation,
  Graticule,
  Line,
  Sphere,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { PatternLines } from "@vx/pattern";
import { texturedata } from "./Mock";

// WORLD MAP
export const MapData = ({ setTooltipContent }) => {
  const [position, setPosition] = React.useState({
    coordinates: [0, 0],
    zoom: 1,
  });

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  return (
    <div>
      <div className="controls">
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() => {
              handleZoomIn();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </Button>
          <Button
            variant="primary"
            className="me-2"
            onClick={() => {
              handleZoomOut();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </Button>
        </ButtonGroup>
      </div>
      <ComposableMap
        className="wd-100p"
        data-tip=""
        projectionConfig={{ scale: 200 }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={texturedata}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#6c5ffc",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export const WorldMap = () => {
  const [content, setContent] = React.useState("");
  return (
    <div>
      <MapData setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

// USA MAP

const AllstateDATA = [
  { id: "AL", val: "01" },
  { id: "AK", val: "02" },
  { id: "AS", val: "60" },
  { id: "AZ", val: "04" },
  { id: "AR", val: "05" },
  { id: "CA", val: "06" },
  { id: "CO", val: "08" },
  { id: "CT", val: "09" },
  { id: "DE", val: "10" },
  { id: "DC", val: "11" },
  { id: "FL", val: "12" },
  { id: "FM", val: "64" },
  { id: "GA", val: "13" },
  { id: "GU", val: "66" },
  { id: "HI", val: "15" },
  { id: "ID", val: "16" },
  { id: "IL", val: "17" },
  { id: "IN", val: "18" },
  { id: "IA", val: "19" },
  { id: "KS", val: "20" },
  { id: "KY", val: "21" },
  { id: "LA", val: "22" },
  { id: "ME", val: "23" },
  { id: "MH", val: "68" },
  { id: "MD", val: "24" },
  { id: "MA", val: "25" },
  { id: "MI", val: "26" },
  { id: "MN", val: "27" },
  { id: "MS", val: "28" },
  { id: "MO", val: "29" },
  { id: "MT", val: "30" },
  { id: "NE", val: "31" },
  { id: "NV", val: "32" },
  { id: "NH", val: "33" },
  { id: "NJ", val: "34" },
  { id: "NM", val: "35" },
  { id: "NY", val: "36" },
  { id: "NC", val: "37" },
  { id: "ND", val: "38" },
  { id: "MP", val: "69" },
  { id: "OH", val: "39" },
  { id: "OK", val: "40" },
  { id: "OR", val: "41" },
  { id: "PW", val: "70" },
  { id: "PA", val: "42" },
  { id: "PR", val: "72" },
  { id: "RI", val: "44" },
  { id: "SC", val: "45" },
  { id: "SD", val: "46" },
  { id: "TN", val: "47" },
  { id: "TX", val: "48" },
  { id: "UM", val: "74" },
  { id: "UT", val: "49" },
  { id: "VT", val: "50" },
  { id: "VA", val: "51" },
  { id: "VI", val: "78" },
  { id: "WA", val: "53" },
  { id: "WV", val: "54" },
  { id: "WI", val: "55" },
  { id: "WY", val: "56" },
];

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

export const USState = () => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke="#fff"
                geography={geo}
                fill="#6c5ffc"
              />
            ))}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = AllstateDATA.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

// South America

const SouthgeoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers = [
  {
    markerOffset: -15,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

export const SouthAmerica = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 400,
      }}
    >
      <Geographies geography={SouthgeoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

// Europe Map

const EuropegeoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

export const EuropeMap = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        scale: 700,
      }}
    >
      <Graticule stroke="#EAEAEC" />
      <Geographies geography={EuropegeoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#9998A3"
              stroke="#EAEAEC"
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

const geoUrl1 =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json";

const markers1 = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] },
];

export const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 400,
      }}
    >
      <Geographies geography={geoUrl1}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers1.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export const MapChartTexture = () => {
  const highlighted = [
    "BRA",
    "VNM",
    "COL",
    "IDN",
    "ETH",
    "HND",
    "IND",
    "UGA",
    "MEX",
    "GTM",
    "PER",
    "NIC",
    "CHN",
    "CIV",
    "CRI",
    "KEN",
    "PNG",
    "TZA",
    "SLV",
    "ECU",
    "CMR",
    "LAO",
    "MDG",
    "GAB",
    "THA",
    "VEN",
    "DOM",
    "HTI",
    "COD",
    "RWA",
    "BDI",
    "PHL",
    "TGO",
    "GIN",
    "YEM",
    "CUB",
    "PAN",
    "BOL",
    "TLS",
    "CAF",
    "NGA",
    "GHA",
    "SLE",
    "AGO",
    "JAM",
    "PRY",
    "MWI",
    "TTO",
    "ZWE",
    "LBR",
  ];
  const generateCircle = (deg) => {
    if (!deg)
      return [
        [-180, 0],
        [-90, 0],
        [0, 0],
        [90, 0],
        [180, 0],
      ];
    return new Array(361).fill(1).map((d, i) => {
      return [-180 + i, deg];
    });
  };
  return (
    <ComposableMap projection="geoEqualEarth">
      <PatternLines
        id="lines"
        height={6}
        width={6}
        stroke="#776865"
        strokeWidth={1}
        background="#F6F0E9"
        orientation={["diagonal"]}
      />
      <Sphere stroke="#DDD" />
      <Graticule stroke="#DDD" />
      <Geographies geography={texturedata} stroke="#FFF" strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isHighlighted = highlighted.indexOf(geo.id) !== -1;
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isHighlighted ? "url('#lines')" : "#F6F0E9"}
                onClick={() => console.log(geo.properties.name)}
              />
            );
          })
        }
      </Geographies>
      <Line coordinates={generateCircle(0)} stroke="#F53" strokeWidth={2} />
      <Line
        coordinates={generateCircle(23)}
        stroke="#776865"
        strokeWidth={1}
        strokeDasharray={[5, 5]}
      />
      <Line
        coordinates={generateCircle(-24)}
        stroke="#776865"
        strokeWidth={1}
        strokeDasharray={[5, 5]}
      />
    </ComposableMap>
  );
};

export const LineMapchart = () => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 420,
        center: [-40, 30],
      }}
    >
      <Graticule stroke="#DDD" />
      <Geographies
        geography={texturedata}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Line
        from={[2.3522, 48.8566]}
        to={[-74.006, 40.7128]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </ComposableMap>
  );
};
