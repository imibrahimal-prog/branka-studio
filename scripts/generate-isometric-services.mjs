import fs from "fs";
import path from "path";

const outDir = "d:/branka-studio/public/images/services";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 4. Apps & Systems (apps.svg)
const appsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1600" width="1600" height="1600">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#faf6f0"/>
      <stop offset="100%" stop-color="#f2ebe0"/>
    </radialGradient>
    <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(30,16,10,0.22)"/>
      <stop offset="60%" stop-color="rgba(30,16,10,0.06)"/>
      <stop offset="100%" stop-color="rgba(30,16,10,0)"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5e1b8"/>
      <stop offset="45%" stop-color="#c7a46a"/>
      <stop offset="100%" stop-color="#8c6b38"/>
    </linearGradient>
    <linearGradient id="phoneBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a1e1a"/>
      <stop offset="50%" stop-color="#19110e"/>
      <stop offset="100%" stop-color="#0f0907"/>
    </linearGradient>
    <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdfbf8"/>
      <stop offset="100%" stop-color="#f3ece2"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f5efe6"/>
    </linearGradient>
    <linearGradient id="accentTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4ade80"/>
      <stop offset="100%" stop-color="#16a34a"/>
    </linearGradient>
    <linearGradient id="accentCoral" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fb923c"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#1e100a" flood-opacity="0.18"/>
    </filter>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#1e100a" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="1600" height="1600" fill="url(#bgGrad)" />

  <!-- Ground Contact Shadow -->
  <ellipse cx="800" cy="1280" rx="550" ry="160" fill="url(#groundShadow)" />

  <g transform="translate(0, -30)">
    <!-- 3D Tablet Dashboard in Background -->
    <g transform="matrix(0.866 -0.35 0.866 0.35 180 520)" filter="url(#cardShadow)">
      <!-- Tablet Frame -->
      <rect x="0" y="0" width="460" height="320" rx="28" fill="#1e1410" stroke="#c7a46a" stroke-width="4"/>
      <!-- Tablet Screen -->
      <rect x="18" y="18" width="424" height="284" rx="18" fill="url(#screenGrad)"/>
      <!-- Dashboard Bars -->
      <rect x="45" y="160" width="35" height="110" rx="8" fill="url(#goldGrad)"/>
      <rect x="95" y="110" width="35" height="160" rx="8" fill="#2a1e1a"/>
      <rect x="145" y="80" width="35" height="190" rx="8" fill="url(#goldGrad)"/>
      <rect x="195" y="130" width="35" height="140" rx="8" fill="#2a1e1a"/>
      <rect x="245" y="60" width="35" height="210" rx="8" fill="url(#accentTeal)"/>
      <!-- Header lines -->
      <rect x="45" y="40" width="120" height="16" rx="8" fill="#2a1e1a"/>
      <rect x="180" y="40" width="60" height="16" rx="8" fill="url(#goldGrad)"/>
      <circle cx="395" cy="48" r="14" fill="#c7a46a"/>
    </g>

    <!-- Fanned Out 3D Floating UI Card (Left) -->
    <g transform="matrix(0.866 -0.35 0 0.95 240 760)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="280" height="380" rx="24" fill="url(#cardGrad)" stroke="#e4d7c5" stroke-width="3"/>
      <circle cx="50" cy="50" r="22" fill="url(#goldGrad)"/>
      <rect x="90" y="40" width="130" height="14" rx="7" fill="#2a1e1a"/>
      <rect x="90" y="62" width="80" height="10" rx="5" fill="#a89279"/>
      <!-- UI Chart card inside -->
      <rect x="25" y="105" width="230" height="140" rx="16" fill="#1e1410"/>
      <path d="M 45 200 Q 90 140 140 170 T 235 130" fill="none" stroke="url(#goldGrad)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="235" cy="130" r="8" fill="#ffffff" stroke="#c7a46a" stroke-width="3"/>
      <!-- Switch Toggle -->
      <rect x="25" y="275" width="100" height="40" rx="20" fill="url(#accentTeal)"/>
      <circle cx="95" cy="295" r="14" fill="#ffffff"/>
      <rect x="140" y="285" width="115" height="20" rx="10" fill="#e4d7c5"/>
    </g>

    <!-- Central 3D Smartphone (Hero Element) -->
    <g transform="translate(680, 420)" filter="url(#softGlow)">
      <!-- Outer Phone Bezel -->
      <rect x="0" y="0" width="400" height="740" rx="60" fill="url(#phoneBody)" stroke="url(#goldGrad)" stroke-width="8"/>
      <!-- Inner Screen Bezel -->
      <rect x="18" y="18" width="364" height="704" rx="46" fill="url(#screenGrad)"/>
      <!-- Dynamic Island -->
      <rect x="140" y="32" width="120" height="28" rx="14" fill="#140a06"/>
      <circle cx="235" cy="46" r="6" fill="#2a1e1a"/>

      <!-- App Header Profile Widget -->
      <rect x="42" y="85" width="316" height="85" rx="22" fill="#ffffff" stroke="#e8dfd2" stroke-width="2"/>
      <circle cx="85" cy="127" r="26" fill="url(#goldGrad)"/>
      <rect x="125" y="112" width="120" height="16" rx="8" fill="#1e1410"/>
      <rect x="125" y="136" width="75" height="10" rx="5" fill="#a89279"/>
      <circle cx="320" cy="127" r="14" fill="url(#accentTeal)"/>

      <!-- Main Interactive Metric Card -->
      <rect x="42" y="195" width="316" height="230" rx="28" fill="#1c120e" stroke="url(#goldGrad)" stroke-width="2"/>
      <rect x="68" y="225" width="110" height="14" rx="7" fill="#f5e1b8"/>
      <rect x="68" y="250" width="160" height="36" rx="8" fill="#ffffff"/>
      <!-- Smooth Area Graph inside card -->
      <path d="M 68 380 Q 130 290 190 330 T 330 280 L 330 395 L 68 395 Z" fill="url(#goldGrad)" opacity="0.35"/>
      <path d="M 68 380 Q 130 290 190 330 T 330 280" fill="none" stroke="url(#goldGrad)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="330" cy="280" r="8" fill="#ffffff" stroke="#c7a46a" stroke-width="4"/>

      <!-- 2-Column Feature Cards -->
      <rect x="42" y="450" width="148" height="150" rx="22" fill="#ffffff" stroke="#e8dfd2" stroke-width="2"/>
      <circle cx="80" cy="490" r="20" fill="url(#goldGrad)"/>
      <rect x="65" y="525" width="80" height="14" rx="7" fill="#1e1410"/>
      <rect x="65" y="550" width="100" height="24" rx="12" fill="#22c55e" opacity="0.2"/>
      <rect x="75" y="557" width="50" height="10" rx="5" fill="#16a34a"/>

      <rect x="210" y="450" width="148" height="150" rx="22" fill="#ffffff" stroke="#e8dfd2" stroke-width="2"/>
      <circle cx="248" cy="490" r="20" fill="#1e1410"/>
      <rect x="233" y="525" width="80" height="14" rx="7" fill="#1e1410"/>
      <rect x="233" y="550" width="100" height="24" rx="12" fill="url(#goldGrad)" opacity="0.25"/>
      <rect x="243" y="557" width="60" height="10" rx="5" fill="#8c6b38"/>

      <!-- Bottom Nav Bar -->
      <rect x="42" y="625" width="316" height="65" rx="26" fill="#1c120e"/>
      <circle cx="100" cy="657" r="14" fill="url(#goldGrad)"/>
      <circle cx="200" cy="657" r="14" fill="#ffffff" opacity="0.4"/>
      <circle cx="300" cy="657" r="14" fill="#ffffff" opacity="0.4"/>
    </g>

    <!-- Floating 3D Stat Pill (Right) -->
    <g transform="translate(1080, 680)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="220" height="85" rx="26" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="3"/>
      <circle cx="45" cy="42" r="22" fill="url(#goldGrad)"/>
      <text x="45" y="49" font-family="sans-serif" font-size="20" font-weight="bold" fill="#140a06" text-anchor="middle">✓</text>
      <rect x="80" y="26" width="110" height="14" rx="7" fill="#1e1410"/>
      <rect x="80" y="48" width="70" height="10" rx="5" fill="#22c55e"/>
    </g>

    <!-- Floating 3D Speed Pill (Right Lower) -->
    <g transform="translate(1040, 840)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="240" height="95" rx="28" fill="#1e1410" stroke="url(#goldGrad)" stroke-width="3"/>
      <circle cx="50" cy="47" r="22" fill="url(#accentTeal)"/>
      <rect x="88" y="32" width="120" height="14" rx="7" fill="#ffffff"/>
      <rect x="88" y="54" width="80" height="10" rx="5" fill="url(#goldGrad)"/>
    </g>
  </g>
</svg>`;

// 5. Video & Motion (motion.svg)
const motionSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1600" width="1600" height="1600">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#faf6f0"/>
      <stop offset="100%" stop-color="#f2ebe0"/>
    </radialGradient>
    <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(30,16,10,0.22)"/>
      <stop offset="60%" stop-color="rgba(30,16,10,0.06)"/>
      <stop offset="100%" stop-color="rgba(30,16,10,0)"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5e1b8"/>
      <stop offset="45%" stop-color="#c7a46a"/>
      <stop offset="100%" stop-color="#8c6b38"/>
    </linearGradient>
    <linearGradient id="cameraBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#352620"/>
      <stop offset="50%" stop-color="#1e1410"/>
      <stop offset="100%" stop-color="#0f0907"/>
    </linearGradient>
    <linearGradient id="lensGlass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="40%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0c4a6e"/>
    </linearGradient>
    <linearGradient id="clapperWood" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fdfbf8"/>
      <stop offset="100%" stop-color="#eedfcb"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#1e100a" flood-opacity="0.18"/>
    </filter>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#1e100a" flood-opacity="0.14"/>
    </filter>
  </defs>

  <rect width="1600" height="1600" fill="url(#bgGrad)" />
  <ellipse cx="800" cy="1290" rx="560" ry="160" fill="url(#groundShadow)" />

  <g transform="translate(0, -30)">
    <!-- 3D Ultra-wide Video Monitor in Background -->
    <g transform="translate(350, 360)" filter="url(#softGlow)">
      <!-- Monitor Frame -->
      <rect x="0" y="0" width="900" height="460" rx="36" fill="url(#cameraBody)" stroke="url(#goldGrad)" stroke-width="6"/>
      <!-- Screen Display -->
      <rect x="22" y="22" width="856" height="416" rx="24" fill="#120a08"/>
      <!-- Cinematic Viewport Inside Monitor -->
      <rect x="50" y="50" width="520" height="260" rx="16" fill="#251712" stroke="#c7a46a" stroke-width="2"/>
      <!-- Color grading curve on right -->
      <rect x="600" y="50" width="230" height="160" rx="16" fill="#1a100c"/>
      <path d="M 620 180 C 670 180, 710 80, 810 70" fill="none" stroke="url(#goldGrad)" stroke-width="6" stroke-linecap="round"/>
      <circle cx="810" cy="70" r="8" fill="#f5e1b8"/>
      <!-- Color Wheels -->
      <circle cx="650" cy="260" r="32" fill="url(#goldGrad)"/>
      <circle cx="730" cy="260" r="32" fill="#38bdf8"/>
      <circle cx="810" cy="260" r="32" fill="#f43f5e"/>

      <!-- NLE Multi-Track Timeline (Bottom of Monitor) -->
      <rect x="50" y="330" width="800" height="90" rx="16" fill="#1a100c"/>
      <rect x="70" y="345" width="220" height="24" rx="8" fill="url(#goldGrad)"/>
      <rect x="305" y="345" width="160" height="24" rx="8" fill="url(#goldGrad)"/>
      <rect x="480" y="345" width="280" height="24" rx="8" fill="#38bdf8"/>
      <!-- Audio Track -->
      <rect x="70" y="380" width="700" height="24" rx="8" fill="#2a1e1a"/>
      <!-- Red/Gold Playhead -->
      <line x1="380" y1="320" x2="380" y2="420" stroke="#f59e0b" stroke-width="5"/>
      <polygon points="370,320 390,320 380,336" fill="#f59e0b"/>
    </g>

    <!-- 3D Cinema Camera (Left Foreground) -->
    <g transform="translate(240, 680)" filter="url(#cardShadow)">
      <!-- Main Camera Body -->
      <rect x="0" y="60" width="340" height="260" rx="36" fill="url(#cameraBody)" stroke="url(#goldGrad)" stroke-width="5"/>
      <!-- Top Handle -->
      <path d="M 60 60 L 60 0 L 260 0 L 260 60" fill="none" stroke="url(#cameraBody)" stroke-width="32" stroke-linejoin="round"/>
      <path d="M 60 60 L 60 0 L 260 0 L 260 60" fill="none" stroke="url(#goldGrad)" stroke-width="6" stroke-linejoin="round"/>
      <!-- Lens Base Barrel -->
      <rect x="320" y="100" width="160" height="180" rx="20" fill="#221612" stroke="url(#goldGrad)" stroke-width="4"/>
      <!-- Lens Matte Box Hood -->
      <polygon points="460,70 560,40 560,340 460,310" fill="#140a06" stroke="url(#goldGrad)" stroke-width="4"/>
      <!-- Lens Glass Reflection -->
      <ellipse cx="480" cy="190" rx="35" ry="75" fill="url(#lensGlass)"/>
      <ellipse cx="475" cy="180" rx="15" ry="40" fill="#ffffff" opacity="0.6"/>
      <!-- Gold Focus Knobs -->
      <circle cx="120" cy="190" r="38" fill="url(#goldGrad)" stroke="#1e1410" stroke-width="6"/>
      <circle cx="120" cy="190" r="18" fill="#1e1410"/>
      <!-- Red Record Button -->
      <circle cx="280" cy="110" r="14" fill="#ef4444"/>
    </g>

    <!-- 3D Film Clapperboard (Center Foreground) -->
    <g transform="translate(680, 820) rotate(-8)" filter="url(#cardShadow)">
      <!-- Bottom Board -->
      <rect x="0" y="70" width="360" height="240" rx="20" fill="url(#clapperWood)" stroke="#1e1410" stroke-width="5"/>
      <!-- Chalkboard lines -->
      <rect x="25" y="95" width="310" height="190" rx="12" fill="#1c120e"/>
      <rect x="45" y="120" width="120" height="16" rx="8" fill="url(#goldGrad)"/>
      <rect x="185" y="120" width="120" height="16" rx="8" fill="#ffffff" opacity="0.6"/>
      <rect x="45" y="160" width="80" height="14" rx="7" fill="#ffffff" opacity="0.4"/>
      <rect x="145" y="160" width="80" height="14" rx="7" fill="#ffffff" opacity="0.4"/>
      <rect x="245" y="160" width="60" height="14" rx="7" fill="url(#goldGrad)"/>

      <!-- Clapper Top Sticks (Angled Open) -->
      <g transform="rotate(-18, 0, 70)">
        <rect x="0" y="0" width="360" height="65" rx="12" fill="#1e1410"/>
        <!-- Diagonal Zebra Chevrons -->
        <polygon points="40,0 75,0 45,65 10,65" fill="url(#goldGrad)"/>
        <polygon points="120,0 155,0 125,65 90,65" fill="url(#goldGrad)"/>
        <polygon points="200,0 235,0 205,65 170,65" fill="url(#goldGrad)"/>
        <polygon points="280,0 315,0 285,65 250,65" fill="url(#goldGrad)"/>
      </g>
      <!-- Gold Hinge -->
      <circle cx="15" cy="65" r="14" fill="url(#goldGrad)" stroke="#1e1410" stroke-width="3"/>
    </g>

    <!-- Floating 3D Gold Play Button (Right) -->
    <g transform="translate(1120, 760)" filter="url(#softGlow)">
      <circle cx="90" cy="90" r="90" fill="url(#goldGrad)" stroke="#ffffff" stroke-width="6"/>
      <polygon points="75,55 125,90 75,125" fill="#1e1410"/>
    </g>

    <!-- Floating 4K Badge -->
    <g transform="translate(1160, 620)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="160" height="65" rx="20" fill="#1e1410" stroke="url(#goldGrad)" stroke-width="3"/>
      <circle cx="35" cy="32" r="10" fill="#ef4444"/>
      <rect x="60" y="24" width="75" height="16" rx="8" fill="url(#goldGrad)"/>
    </g>
  </g>
</svg>`;

// 6. Marketing & Campaigns (marketing.svg)
const marketingSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1600" width="1600" height="1600">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#faf6f0"/>
      <stop offset="100%" stop-color="#f2ebe0"/>
    </radialGradient>
    <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(30,16,10,0.22)"/>
      <stop offset="60%" stop-color="rgba(30,16,10,0.06)"/>
      <stop offset="100%" stop-color="rgba(30,16,10,0)"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f7e6c4"/>
      <stop offset="45%" stop-color="#d4af37"/>
      <stop offset="100%" stop-color="#8c6b38"/>
    </linearGradient>
    <linearGradient id="hornBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbf4e6"/>
      <stop offset="40%" stop-color="#e8cfa1"/>
      <stop offset="100%" stop-color="#b8893d"/>
    </linearGradient>
    <linearGradient id="growthGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4ade80"/>
      <stop offset="100%" stop-color="#15803d"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#1e100a" flood-opacity="0.18"/>
    </filter>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#1e100a" flood-opacity="0.14"/>
    </filter>
  </defs>

  <rect width="1600" height="1600" fill="url(#bgGrad)" />
  <ellipse cx="800" cy="1290" rx="550" ry="160" fill="url(#groundShadow)" />

  <g transform="translate(0, -30)">
    <!-- 3D Stepped Bar Chart Podium in Background -->
    <g transform="translate(260, 780)" filter="url(#cardShadow)">
      <!-- Step 1 -->
      <rect x="0" y="160" width="120" height="220" rx="20" fill="#1e1410" stroke="#c7a46a" stroke-width="3"/>
      <!-- Step 2 -->
      <rect x="140" y="90" width="120" height="290" rx="20" fill="url(#goldGrad)" stroke="#ffffff" stroke-width="3"/>
      <!-- Step 3 -->
      <rect x="280" y="20" width="120" height="360" rx="20" fill="#1e1410" stroke="url(#goldGrad)" stroke-width="3"/>
      <!-- Step 4 (Highest) -->
      <rect x="420" y="-70" width="140" height="450" rx="24" fill="url(#growthGreen)" stroke="#ffffff" stroke-width="4"/>
      <!-- Star on Top Step -->
      <circle cx="490" cy="-115" r="28" fill="url(#goldGrad)"/>
    </g>

    <!-- Soaring 3D Growth Arrow -->
    <g transform="translate(240, 480)" filter="url(#softGlow)">
      <path d="M 80 500 C 220 480, 360 220, 680 80" fill="none" stroke="url(#growthGreen)" stroke-width="36" stroke-linecap="round"/>
      <polygon points="650,20 740,60 690,140" fill="#15803d"/>
      <polygon points="655,30 730,65 690,130" fill="url(#growthGreen)"/>
    </g>

    <!-- Giant 3D Golden Megaphone (Hero Element) -->
    <g transform="translate(560, 480) rotate(-18)" filter="url(#softGlow)">
      <!-- Megaphone Cone -->
      <polygon points="120,180 440,40 440,360 120,240" fill="url(#hornBody)" stroke="#ffffff" stroke-width="5"/>
      <!-- Megaphone Rim Flare -->
      <ellipse cx="440" cy="200" rx="35" ry="160" fill="url(#goldGrad)" stroke="#ffffff" stroke-width="6"/>
      <ellipse cx="440" cy="200" rx="18" ry="120" fill="#1e1410"/>
      <!-- Megaphone Center Capsule -->
      <rect x="20" y="160" width="120" height="95" rx="24" fill="#1e1410" stroke="url(#goldGrad)" stroke-width="5"/>
      <circle cx="20" cy="207" r="47" fill="url(#goldGrad)"/>
      <!-- Handle -->
      <path d="M 90 250 L 90 380 L 150 380 L 150 240" fill="#1e1410" stroke="url(#goldGrad)" stroke-width="4"/>
      <!-- Trigger button -->
      <rect x="75" y="290" width="25" height="40" rx="8" fill="url(#goldGrad)"/>
    </g>

    <!-- Floating 3D Soundwaves / Energy Arcs -->
    <g transform="translate(1020, 380)" filter="url(#softGlow)">
      <path d="M 0 60 A 140 140 0 0 1 0 300" fill="none" stroke="url(#goldGrad)" stroke-width="16" stroke-linecap="round"/>
      <path d="M 70 20 A 200 200 0 0 1 70 340" fill="none" stroke="url(#goldGrad)" stroke-width="14" stroke-linecap="round" opacity="0.75"/>
      <path d="M 140 -20 A 260 260 0 0 1 140 380" fill="none" stroke="url(#goldGrad)" stroke-width="12" stroke-linecap="round" opacity="0.45"/>
    </g>

    <!-- Floating 3D Target & Result Card (Right) -->
    <g transform="translate(1060, 680)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="280" height="150" rx="30" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="4"/>
      <circle cx="60" cy="60" r="30" fill="url(#growthGreen)"/>
      <text x="60" y="69" font-family="sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">↑</text>
      <rect x="110" y="42" width="130" height="18" rx="9" fill="#1e1410"/>
      <rect x="110" y="70" width="90" height="14" rx="7" fill="url(#goldGrad)"/>
      <rect x="30" y="110" width="220" height="14" rx="7" fill="#e8dfd2"/>
    </g>

    <!-- Floating ROI Multiplier Pill -->
    <g transform="translate(320, 420)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="220" height="85" rx="26" fill="#1e1410" stroke="url(#goldGrad)" stroke-width="3"/>
      <circle cx="45" cy="42" r="22" fill="url(#goldGrad)"/>
      <rect x="80" y="28" width="110" height="14" rx="7" fill="#ffffff"/>
      <rect x="80" y="50" width="70" height="10" rx="5" fill="url(#growthGreen)"/>
    </g>
  </g>
</svg>`;

// 7. Social Media Management (social.svg)
const socialSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1600" width="1600" height="1600">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#faf6f0"/>
      <stop offset="100%" stop-color="#f2ebe0"/>
    </radialGradient>
    <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(30,16,10,0.22)"/>
      <stop offset="60%" stop-color="rgba(30,16,10,0.06)"/>
      <stop offset="100%" stop-color="rgba(30,16,10,0)"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5e1b8"/>
      <stop offset="45%" stop-color="#c7a46a"/>
      <stop offset="100%" stop-color="#8c6b38"/>
    </linearGradient>
    <linearGradient id="phoneBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a1e1a"/>
      <stop offset="50%" stop-color="#1c120e"/>
      <stop offset="100%" stop-color="#0f0907"/>
    </linearGradient>
    <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f5efe6"/>
    </linearGradient>
    <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fb7185"/>
      <stop offset="100%" stop-color="#e11d48"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#1e100a" flood-opacity="0.18"/>
    </filter>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#1e100a" flood-opacity="0.14"/>
    </filter>
  </defs>

  <rect width="1600" height="1600" fill="url(#bgGrad)" />
  <ellipse cx="800" cy="1290" rx="550" ry="160" fill="url(#groundShadow)" />

  <g transform="translate(0, -30)">
    <!-- 3D Monthly Content Calendar (Left Background) -->
    <g transform="matrix(0.92 -0.25 0 0.95 240 680)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="360" height="420" rx="28" fill="#ffffff" stroke="#e8dfd2" stroke-width="4"/>
      <!-- Calendar Header Binder Rings -->
      <rect x="0" y="0" width="360" height="90" rx="28" fill="#1e1410"/>
      <circle cx="60" cy="30" r="14" fill="url(#goldGrad)"/>
      <circle cx="140" cy="30" r="14" fill="url(#goldGrad)"/>
      <circle cx="220" cy="30" r="14" fill="url(#goldGrad)"/>
      <circle cx="300" cy="30" r="14" fill="url(#goldGrad)"/>
      <!-- Calendar Days Grid -->
      <g transform="translate(30, 115)">
        <rect x="0" y="0" width="85" height="85" rx="14" fill="#faf6f0"/>
        <circle cx="42" cy="35" r="18" fill="url(#goldGrad)"/>
        <rect x="15" y="62" width="55" height="8" rx="4" fill="#2a1e1a"/>

        <rect x="105" y="0" width="85" height="85" rx="14" fill="#1e1410"/>
        <circle cx="147" cy="35" r="18" fill="#ffffff"/>
        <rect x="120" y="62" width="55" height="8" rx="4" fill="url(#goldGrad)"/>

        <rect x="210" y="0" width="85" height="85" rx="14" fill="#faf6f0"/>
        <circle cx="252" cy="35" r="18" fill="url(#heartGrad)"/>
        <rect x="225" y="62" width="55" height="8" rx="4" fill="#2a1e1a"/>

        <rect x="0" y="105" width="85" height="85" rx="14" fill="#faf6f0"/>
        <circle cx="42" cy="140" r="18" fill="url(#goldGrad)"/>
        <rect x="15" y="167" width="55" height="8" rx="4" fill="#2a1e1a"/>

        <rect x="105" y="105" width="85" height="85" rx="14" fill="#faf6f0"/>
        <circle cx="147" cy="140" r="18" fill="#22c55e"/>
        <rect x="120" y="167" width="55" height="8" rx="4" fill="#2a1e1a"/>

        <rect x="210" y="105" width="85" height="85" rx="14" fill="#1e1410"/>
        <circle cx="252" cy="140" r="18" fill="url(#goldGrad)"/>
        <rect x="225" y="167" width="55" height="8" rx="4" fill="#ffffff"/>
      </g>
    </g>

    <!-- Central 3D Smartphone (Hero Element) -->
    <g transform="translate(680, 420)" filter="url(#softGlow)">
      <rect x="0" y="0" width="400" height="740" rx="60" fill="url(#phoneBody)" stroke="url(#goldGrad)" stroke-width="8"/>
      <rect x="18" y="18" width="364" height="704" rx="46" fill="url(#screenGrad)"/>
      <rect x="140" y="32" width="120" height="28" rx="14" fill="#140a06"/>

      <!-- Profile Header -->
      <circle cx="85" cy="120" r="38" fill="url(#goldGrad)" stroke="#ffffff" stroke-width="4"/>
      <rect x="140" y="98" width="130" height="18" rx="9" fill="#1e1410"/>
      <rect x="140" y="125" width="85" height="12" rx="6" fill="#8c6b38"/>
      <circle cx="320" cy="120" r="18" fill="url(#goldGrad)"/>

      <!-- Story Highlights Bubbles -->
      <circle cx="70" cy="205" r="24" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="4"/>
      <circle cx="135" cy="205" r="24" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="4"/>
      <circle cx="200" cy="205" r="24" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="4"/>
      <circle cx="265" cy="205" r="24" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="4"/>
      <circle cx="330" cy="205" r="24" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="4"/>

      <!-- 2x2 Grid Posts -->
      <rect x="35" y="255" width="155" height="155" rx="18" fill="#1e1410"/>
      <circle cx="112" cy="332" r="32" fill="url(#goldGrad)"/>

      <rect x="210" y="255" width="155" height="155" rx="18" fill="url(#goldGrad)"/>
      <rect x="240" y="295" width="95" height="75" rx="12" fill="#1e1410"/>

      <rect x="35" y="430" width="155" height="155" rx="18" fill="url(#goldGrad)"/>
      <rect x="65" y="470" width="95" height="75" rx="12" fill="#ffffff"/>

      <rect x="210" y="430" width="155" height="155" rx="18" fill="#1e1410"/>
      <circle cx="287" cy="507" r="32" fill="url(#heartGrad)"/>

      <!-- Bottom Nav Bar -->
      <rect x="35" y="620" width="330" height="65" rx="26" fill="#1e1410"/>
      <circle cx="85" cy="652" r="14" fill="url(#goldGrad)"/>
      <circle cx="155" cy="652" r="14" fill="#ffffff" opacity="0.4"/>
      <circle cx="245" cy="652" r="14" fill="#ffffff" opacity="0.4"/>
      <circle cx="315" cy="652" r="14" fill="#ffffff" opacity="0.4"/>
    </g>

    <!-- Floating 3D Heart / Like Bubble (Top Right) -->
    <g transform="translate(1040, 460)" filter="url(#softGlow)">
      <rect x="0" y="0" width="220" height="110" rx="36" fill="url(#heartGrad)" stroke="#ffffff" stroke-width="4"/>
      <!-- Heart Icon -->
      <path d="M 60 55 C 60 40, 40 30, 30 45 C 20 30, 0 40, 0 55 C 0 80, 30 95, 30 95 C 30 95, 60 80, 60 55 Z" fill="#ffffff" transform="translate(30, 0) scale(1)"/>
      <rect x="110" y="38" width="85" height="16" rx="8" fill="#ffffff"/>
      <rect x="110" y="62" width="60" height="12" rx="6" fill="#ffffff" opacity="0.8"/>
    </g>

    <!-- Floating 3D Comment Bubble (Right Middle) -->
    <g transform="translate(1080, 640)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="240" height="120" rx="36" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="4"/>
      <circle cx="50" cy="60" r="26" fill="url(#goldGrad)"/>
      <rect x="95" y="42" width="115" height="16" rx="8" fill="#1e1410"/>
      <rect x="95" y="68" width="80" height="12" rx="6" fill="#8c6b38"/>
      <!-- Bubble tail -->
      <polygon points="40,115 20,145 60,115" fill="#ffffff"/>
    </g>
  </g>
</svg>`;

// 8. Google Services (google.svg)
const googleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1600" width="1600" height="1600">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#faf6f0"/>
      <stop offset="100%" stop-color="#f2ebe0"/>
    </radialGradient>
    <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(30,16,10,0.22)"/>
      <stop offset="60%" stop-color="rgba(30,16,10,0.06)"/>
      <stop offset="100%" stop-color="rgba(30,16,10,0)"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f5e1b8"/>
      <stop offset="45%" stop-color="#c7a46a"/>
      <stop offset="100%" stop-color="#8c6b38"/>
    </linearGradient>
    <linearGradient id="pinRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f87171"/>
      <stop offset="50%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f5efe6"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#1e100a" flood-opacity="0.18"/>
    </filter>
    <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#1e100a" flood-opacity="0.14"/>
    </filter>
  </defs>

  <rect width="1600" height="1600" fill="url(#bgGrad)" />
  <ellipse cx="800" cy="1290" rx="560" ry="160" fill="url(#groundShadow)" />

  <g transform="translate(0, -30)">
    <!-- 3D Isometric Search Browser in Background -->
    <g transform="translate(340, 360)" filter="url(#softGlow)">
      <rect x="0" y="0" width="920" height="480" rx="36" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="6"/>
      <!-- Header bar with 3 dots -->
      <rect x="0" y="0" width="920" height="75" rx="36" fill="#1e1410"/>
      <circle cx="45" cy="38" r="10" fill="#ef4444"/>
      <circle cx="75" cy="38" r="10" fill="#f59e0b"/>
      <circle cx="105" cy="38" r="10" fill="#22c55e"/>

      <!-- Search Input Bar inside window -->
      <rect x="180" y="18" width="580" height="40" rx="20" fill="#2a1e1a"/>
      <circle cx="210" cy="38" r="10" fill="url(#goldGrad)"/>
      <rect x="235" y="32" width="220" height="12" rx="6" fill="#ffffff" opacity="0.8"/>

      <!-- Search Result Cards inside browser -->
      <g transform="translate(60, 110)">
        <rect x="0" y="0" width="520" height="155" rx="20" fill="#faf6f0" stroke="#e8dfd2" stroke-width="2"/>
        <circle cx="40" cy="40" r="18" fill="url(#goldGrad)"/>
        <rect x="75" y="28" width="260" height="16" rx="8" fill="#1e1410"/>
        <rect x="75" y="52" width="160" height="12" rx="6" fill="#16a34a"/>
        <rect x="25" y="85" width="460" height="12" rx="6" fill="#2a1e1a" opacity="0.6"/>
        <rect x="25" y="108" width="380" height="12" rx="6" fill="#2a1e1a" opacity="0.4"/>
      </g>

      <!-- Knowledge Panel on Right of Browser -->
      <g transform="translate(620, 110)">
        <rect x="0" y="0" width="240" height="330" rx="22" fill="#1e1410" stroke="url(#goldGrad)" stroke-width="3"/>
        <rect x="20" y="20" width="200" height="100" rx="14" fill="url(#goldGrad)"/>
        <rect x="20" y="140" width="140" height="16" rx="8" fill="#ffffff"/>
        <!-- 5 Star Rating -->
        <g transform="translate(20, 170)">
          <polygon points="10,0 13,8 21,8 15,13 17,21 10,16 3,21 5,13 -1,8 7,8" fill="#f59e0b"/>
          <polygon points="35,0 38,8 46,8 40,13 42,21 35,16 28,21 30,13 24,8 32,8" fill="#f59e0b"/>
          <polygon points="60,0 63,8 71,8 65,13 67,21 60,16 53,21 55,13 49,8 57,8" fill="#f59e0b"/>
          <polygon points="85,0 88,8 96,8 90,13 92,21 85,16 78,21 80,13 74,8 82,8" fill="#f59e0b"/>
          <polygon points="110,0 113,8 121,8 115,13 117,21 110,16 103,21 105,13 99,8 107,8" fill="#f59e0b"/>
        </g>
        <rect x="20" y="210" width="180" height="12" rx="6" fill="#e8dfd2"/>
        <rect x="20" y="235" width="140" height="12" rx="6" fill="#e8dfd2"/>
        <!-- Call CTA button -->
        <rect x="20" y="268" width="200" height="42" rx="21" fill="url(#goldGrad)"/>
      </g>
    </g>

    <!-- 3D Folded Map Grid (Left Foreground) -->
    <g transform="matrix(0.92 -0.2 0 0.9 220 840)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="460" height="320" rx="30" fill="#faf5ee" stroke="url(#goldGrad)" stroke-width="4"/>
      <!-- Map Roads and Routes -->
      <path d="M 0 120 Q 140 180 260 100 T 460 220" fill="none" stroke="#e0d1bc" stroke-width="28"/>
      <path d="M 180 0 Q 190 140 320 320" fill="none" stroke="#e0d1bc" stroke-width="24"/>
      <path d="M 0 120 Q 140 180 260 100 T 460 220" fill="none" stroke="#ffffff" stroke-width="16"/>
      <path d="M 180 0 Q 190 140 320 320" fill="none" stroke="#ffffff" stroke-width="14"/>
    </g>

    <!-- Giant 3D Location Map Pin (Hero Foreground Center) -->
    <g transform="translate(680, 720)" filter="url(#softGlow)">
      <!-- Pin Radar Rings -->
      <ellipse cx="120" cy="350" rx="110" ry="40" fill="url(#goldGrad)" opacity="0.35"/>
      <ellipse cx="120" cy="350" rx="55" ry="20" fill="url(#pinRed)" opacity="0.4"/>
      <!-- Pin Head & Pointer -->
      <path d="M 120 350 C 60 250, 0 180, 0 120 A 120 120 0 1 1 240 120 C 240 180, 180 250, 120 350 Z" fill="url(#pinRed)" stroke="#ffffff" stroke-width="6"/>
      <circle cx="120" cy="120" r="48" fill="#ffffff"/>
      <circle cx="120" cy="120" r="32" fill="url(#goldGrad)"/>
    </g>

    <!-- Floating 3D Search Rank #1 Badge -->
    <g transform="translate(1040, 760)" filter="url(#cardShadow)">
      <rect x="0" y="0" width="280" height="130" rx="30" fill="#ffffff" stroke="url(#goldGrad)" stroke-width="4"/>
      <circle cx="55" cy="55" r="28" fill="url(#goldGrad)"/>
      <text x="55" y="65" font-family="sans-serif" font-size="28" font-weight="bold" fill="#140a06" text-anchor="middle">#1</text>
      <rect x="105" y="36" width="145" height="18" rx="9" fill="#1e1410"/>
      <rect x="105" y="65" width="105" height="14" rx="7" fill="#16a34a"/>
      <rect x="25" y="98" width="230" height="12" rx="6" fill="#e8dfd2"/>
    </g>
  </g>
</svg>`;

fs.writeFileSync(path.join(outDir, "apps.svg"), appsSvg, "utf8");
fs.writeFileSync(path.join(outDir, "motion.svg"), motionSvg, "utf8");
fs.writeFileSync(path.join(outDir, "marketing.svg"), marketingSvg, "utf8");
fs.writeFileSync(path.join(outDir, "social.svg"), socialSvg, "utf8");
fs.writeFileSync(path.join(outDir, "google.svg"), googleSvg, "utf8");

console.log("Successfully generated all 5 3D Isometric SVG illustrations!");
