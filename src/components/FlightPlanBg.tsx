export default function FlightPlanBg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1400 800"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* VOR radials / range arcs */}
      <g fill="none" stroke="rgba(245,244,240,0.35)" strokeWidth="0.5">
        <circle cx="950" cy="420" r="180" />
        <circle cx="950" cy="420" r="280" />
        <circle cx="180" cy="680" r="200" />
        <circle cx="180" cy="680" r="130" />
        <circle cx="1250" cy="150" r="150" />
        <circle cx="600" cy="650" r="160" />
      </g>

      {/* Radial lines from VOR stations */}
      <g stroke="rgba(245,244,240,0.2)" strokeWidth="0.4">
        <line x1="950" y1="420" x2="1150" y2="280" />
        <line x1="950" y1="420" x2="820" y2="250" />
        <line x1="950" y1="420" x2="1050" y2="620" />
        <line x1="950" y1="420" x2="750" y2="480" />
        <line x1="950" y1="420" x2="1100" y2="500" />
        <line x1="180" y1="680" x2="360" y2="610" />
        <line x1="180" y1="680" x2="60" y2="530" />
        <line x1="180" y1="680" x2="310" y2="780" />
        <line x1="180" y1="680" x2="50" y2="750" />
        <line x1="1250" y1="150" x2="1100" y2="80" />
        <line x1="1250" y1="150" x2="1350" y2="280" />
        <line x1="1250" y1="150" x2="1400" y2="100" />
        <line x1="600" y1="650" x2="500" y2="520" />
        <line x1="600" y1="650" x2="750" y2="720" />
      </g>

      {/* VOR station symbols — small hexagons */}
      <g fill="none" stroke="rgba(245,244,240,0.5)" strokeWidth="0.8">
        <polygon points="950,410 957,415 957,425 950,430 943,425 943,415" />
        <polygon points="180,670 187,675 187,685 180,690 173,685 173,675" />
        <polygon points="1250,140 1257,145 1257,155 1250,160 1243,155 1243,145" />
        <polygon points="600,640 607,645 607,655 600,660 593,655 593,645" />
      </g>

      {/* Primary airway */}
      <g fill="none" stroke="rgba(245,244,240,0.6)" strokeWidth="0.8" strokeDasharray="8 6">
        <path d="M -20,750 L 180,680 L 400,620 L 580,540 L 750,470 L 950,420 L 1120,340 L 1250,150 L 1450,120" />
      </g>

      {/* Secondary airways */}
      <g fill="none" stroke="rgba(245,244,240,0.4)" strokeWidth="0.5" strokeDasharray="5 8">
        <path d="M 80,780 L 180,680 L 350,550 L 500,500 L 680,620 L 850,700" />
        <path d="M 750,50 L 950,420 L 1080,580 L 1200,750" />
        <path d="M 200,700 L 600,650 L 950,420" />
      </g>

      {/* Waypoints on primary route */}
      <g>
        {[[400, 620], [580, 540], [750, 470], [1120, 340]].map(([x, y]) => (
          <g key={`${x}-${y}`} transform={`translate(${x},${y})`}>
            <polygon points="0,-6 5.2,3 -5.2,3" fill="none" stroke="rgba(245,244,240,0.5)" strokeWidth="0.7" />
          </g>
        ))}
      </g>

      {/* Waypoints on secondary routes */}
      <g>
        {[[500, 500], [680, 620], [1080, 580]].map(([x, y]) => (
          <g key={`${x}-${y}`} transform={`translate(${x},${y})`}>
            <polygon points="0,-5 4.3,2.5 -4.3,2.5" fill="none" stroke="rgba(245,244,240,0.25)" strokeWidth="0.5" />
          </g>
        ))}
      </g>

      {/* Tiny waypoint labels */}
      <g fontFamily="'IBM Plex Mono', monospace" fontSize="5.5" fill="rgba(245,244,240,0.35)">
        <text x="410" y="616">DEFIN</text>
        <text x="590" y="536">VALID</text>
        <text x="760" y="466">PROTO</text>
        <text x="1130" y="336">ITERA</text>
        <text x="1260" y="146">SHIPT</text>
      </g>

      {/* Scattered small fix markers */}
      <g fill="rgba(245,244,240,0.2)">
        {[[400,450],[620,150],[1050,100],[850,550],[200,650],[1300,500],[550,580],[1000,680],[130,320],[780,130],[350,600],[1100,650],[450,120]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" />
        ))}
      </g>

      {/* Altitude / distance annotations */}
      <g fontFamily="'IBM Plex Mono', monospace" fontSize="4.5" fill="rgba(245,244,240,0.2)">
        <text x="480" y="570" transform="rotate(-22, 480, 570)">FL240</text>
        <text x="830" y="440" transform="rotate(-12, 830, 440)">127.4</text>
        <text x="660" y="500" transform="rotate(-8, 660, 500)">84nm</text>
        <text x="1040" y="380" transform="rotate(-18, 1040, 380)">FL180</text>
        <text x="300" y="720" transform="rotate(-20, 300, 720)">56nm</text>
        <text x="700" y="640" transform="rotate(-8, 700, 640)">118.7</text>
      </g>

      {/* Green accent on current position waypoint */}
      <g transform="translate(750,470)">
        <circle r="12" fill="none" stroke="rgba(183,186,25,0.4)" strokeWidth="0.7" />
        <circle r="2" fill="rgba(183,186,25,0.5)" />
      </g>

      {/* Small plane symbol */}
      <g transform="translate(850,445) rotate(-15)">
        <g fill="rgba(183,186,25,0.6)" stroke="none">
          <rect x="-1.5" y="-10" width="3" height="18" rx="1.5" />
          <rect x="-10" y="-3" width="20" height="2.5" rx="1" />
          <rect x="-5" y="6" width="10" height="2" rx="0.8" />
        </g>
      </g>
    </svg>
  );
}
