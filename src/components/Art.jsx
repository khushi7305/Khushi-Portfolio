
const artwork = {
  basket: {
    icon: '🛒',
    title: 'Smart Grocery Shopping',
    subtitle: 'Compare Prices · Save More',
  },
  resume: {
    icon: '📄',
    title: 'AI Resume Assistant',
    subtitle: 'Create · Customize · Apply',
  },
  shelf: {
    icon: '📦',
    title: 'Smart Inventory',
    subtitle: 'Scan · Track · Manage',
  },
  desk: {
    icon: '🖥️',
    title: 'Desk Reservation',
    subtitle: 'Book · Manage · Automate',
  },
  retail: {
    icon: '🏬',
    title: 'Retail Management',
    subtitle: 'Products · Orders · Sales',
  },
  portfolio: {
    icon: '💻',
    title: 'Developer Portfolio',
    subtitle: 'Projects · Skills · Experience',
  },
}

export default function Art({ kind }) {
  const item = artwork[kind] || artwork.portfolio

  return (
    <div
      className="art"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '250px',
        padding: '24px',
        gap: '12px',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontSize: '76px',
          lineHeight: 1.2,
        }}
      >
        {item.icon}
      </span>

      <strong
        style={{
          fontSize: '20px',
          color: '#402820',
        }}
      >
        {item.title}
      </strong>

      <span
        style={{
          fontSize: '14px',
          color: '#765C52',
        }}
      >
        {item.subtitle}
      </span>
    </div>
  )
}
