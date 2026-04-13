'use client'
function Palette() {
    const colors = [
    { name: 'primary', value: '#0B0B0B', label: 'Black' },
    { name: 'textPrimary', value: '#242424', label: '' },
    { name: 'textSecondary', value: '#666666', label: '' },
    { name: 'borders', value: '#E5E5E5', label: 'Soft Gray' },
    { name: 'surface', value: '#F5F5F5', label: 'Light Gray' },
    { name: 'background', value: '#FFFFFF', label: 'White' },
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