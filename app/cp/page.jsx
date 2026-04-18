'use client'
function Palette() {
const colors = [
  {
    name: "ink",
    value: "#111111",
    label: "Rich Carbon",
  },
  {
    name: "graphite",
    value: "#2C2C2E",
    label: "Deep Graphite",
  },
  {
    name: "slate",
    value: "#6E6E73",
    label: "Premium Slate",
  },
  {
    name: "mist",
    value: "#D2D2D7",
    label: "Soft Mist",
  },
  {
    name: "cloud",
    value: "#F5F5F7",
    label: "Cloud Surface",
  },
  {
    name: "snow",
    value: "#FFFFFF",
    label: "Pure Snow",
  },
  {
    name: "platinum",
    value: "#E8E8ED",
    label: "Platinum Border",
  },
  {
    name: "silver",
    value: "#A1A1A6",
    label: "Muted Silver",
  },
];

  const copyToClipboard = (name) => {
    navigator.clipboard.writeText(`(--${name})`);
  };

  return (
    <div>
      <h1>eCommerce</h1>
      <section>
        <div className="flex flex-wrap text-gray-700 gap-2">
          {colors.map((color) => (
            <div
              key={color.name}
              onClick={() => copyToClipboard(color.name)}
              className={"cursor-pointer p-4 rounded text-sm font-medium transition hover:opacity-80"}
              style={{ backgroundColor: color.value }}
              title={`Click to copy: var(--${color.name})`}
            >
              <div>{color.name}</div>
              <div className="text-xs opacity-75">{color.value}</div>
              {color.label && <div className="text-xs opacity-75">{color.label}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
  
}

export default Palette;