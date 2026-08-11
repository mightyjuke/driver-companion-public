---
name: RoadCue
description: A direction-aware camera alert system expressed as a calm roadside instrument.
colors:
  canvas: "#0d1214"
  canvas-raised: "#141a1d"
  bone: "#f4f0e5"
  bone-muted: "#b9b4a8"
  line: "rgba(244, 240, 229, 0.68)"
  line-muted: "rgba(244, 240, 229, 0.16)"
  signal-red: "#f04432"
  signal-red-dark: "#c92e21"
  active-amber: "#ffb000"
  active-amber-hover: "#ffc33b"
  status-green: "#53d391"
typography:
  display:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 7.35vw, 8.2rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(3.6rem, 7vw, 7.6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.032em"
  title:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "1.7rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.08em"
rounded:
  square: "0"
  compact: "7px"
  control: "12px"
  handset: "24px"
  device: "34px"
  capsule: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "22px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.active-amber}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.square}"
    padding: "0 22px"
    height: "68px"
  button-primary-hover:
    backgroundColor: "{colors.active-amber-hover}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.square}"
    padding: "0 22px"
    height: "68px"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.square}"
    padding: "14px 0 8px"
  status-chip:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.capsule}"
    padding: "9px 12px"
  console-step:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.square}"
    padding: "28px 32px"
  console-step-active:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.square}"
    padding: "28px 32px"
  device-screen:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.bone}"
    rounded: "{rounded.device}"
    padding: "32px 26px 22px"
---

# Design System: RoadCue

## Overview

**Creative North Star: "Approach Corridor"**

RoadCue is built as an engineered roadside instrument rather than a generic app-marketing surface. Matte charcoal fields, bone lettering, fine rules, vector paths, distance readouts, and signal geometry make direction and closing distance visible before the copy explains them. The atmosphere is calm and authoritative: technical enough to be credible, restrained enough to keep the warning legible.

The system is mostly flat and rectilinear. Contrast, scale, linework, and state color establish hierarchy; depth is reserved for device-shaped product surfaces nested inside the instrument field. The camera-location icon, route corridor, and signal arcs provide the recurring geometry. Police imagery, radar-gun motifs, generic map pins, gradient-led decoration, and fear-based visual drama are outside this world.

**Key Characteristics:**

- Matte charcoal fields with bone text and hairline engineering rules.
- Oswald compression for commands and readouts; Inter for explanation.
- Signal red marks camera hazards; amber is reserved for active intent and focus.
- Direction, distance, and alignment graphics turn product logic into interface.
- Flat layouts yield to soft depth only for nested device surfaces.

## Colors

The palette behaves like a night-driving instrument panel: low-reflectance charcoal and warm bone carry the structure, while three tightly assigned signal colors communicate hazard, action, and monitoring.

### Primary

- **Signal Red** (#f04432): Marks cameras, hazards, critical readout rules, alert copy, and the strongest editorial emphasis.
- **Deep Signal Red** (#c92e21): Carries red typography when it sits on the bone surface and needs firmer contrast.

### Secondary

- **Active Amber** (#ffb000): Identifies the primary launch action, focus outlines, active route projection, selected text, and the full-width language signal band.
- **Lit Amber** (#ffc33b): Appears only as the primary action's hover response.

### Tertiary

- **Monitoring Green** (#53d391): Confirms live monitoring and the completed route state; it is a small status signal, never a large field color.

### Neutral

- **Matte Charcoal** (#0d1214): The default page and device background.
- **Raised Charcoal** (#141a1d): A subtle nested-device surface used where one dark plane must separate from another.
- **Bone** (#f4f0e5): Primary text, selected console surfaces, and high-contrast light sections.
- **Weathered Bone** (#b9b4a8): Supporting copy, quiet navigation, captions, and metadata.
- **Bone Rule** (rgba(244, 240, 229, 0.68)): Structural dividers and high-confidence borders.
- **Muted Bone Rule** (rgba(244, 240, 229, 0.16)): Quiet dividers, orbits, and map geometry.

### Named Rules

**The Signal Hierarchy Rule.** Red communicates camera hazard, amber communicates action or focus, and green communicates monitoring or completion; do not swap those meanings.

**The Bone, Not White Rule.** Use the warm bone neutral for principal light text and surfaces so the instrument remains calm rather than glaring.

## Typography

**Display Font:** Oswald (with Arial Narrow and sans-serif fallbacks)  
**Body Font:** Inter (with sans-serif fallback)  
**Label Font:** Inter

**Character:** The pairing combines compressed transport-signage force with neutral, highly legible explanation. Oswald carries claims, distances, intersections, numerical proof, and product commands; Inter carries narrative and metadata.

### Hierarchy

- **Display** (700, responsive from 4.5rem to 8.2rem, 0.88 line-height): Monumental hero claims and primary numeric readouts; mobile tightens it to 3.05rem–4rem.
- **Headline** (700, responsive from 3.6rem to 7.6rem, 0.9 line-height): Section declarations, set in uppercase with tightly balanced line breaks.
- **Title** (700, 1.7rem, 1 line-height): Console-step commands and compact instrument titles.
- **Body** (400, 1.02rem, 1.7 line-height): Explanatory copy with an observed maximum measure near 590px or 66ch.
- **Label** (700, 0.68rem, 0.08em tracking): Proof captions, state labels, and technical metadata, usually uppercase.

### Named Rules

**The Instrument Compression Rule.** Use Oswald wherever the interface must read like a command, sign, coordinate, or live measurement; use Inter for every sentence that explains what the product does.

**The Number-Is-Structure Rule.** Large tabular numerals are compositional anchors, not decorative statistics; preserve their alignment and terse unit labels.

## Layout

The page uses a centered fluid frame capped at 1440px, with 32px side gutters at full desktop width, 20px below 1120px, 16px below 820px, and 12px below 540px. Desktop sections favor asymmetric two-column grids divided by one-pixel rules: claim beside route instrument, console track beside steps, app stage beside explanation, and coverage numeral beside caveats. Section spacing is intentionally expansive, commonly 110–170px vertically, while component interiors use an 8/12/18/22/32px rhythm.

At 820px, two-column systems stack, navigation links disappear, sticky content becomes static, and device stages expand to the viewport width. At 540px, the first viewport is explicitly compressed: claim, launch action, proof statistics, and a 238px illustrative route model remain visible as one continuous opening. Full-bleed visual stages extend 12px past the mobile frame, while copy and controls retain the gutter.

**The Corridor Rule.** Give directional information a visible path through the composition: align major blocks to rules, tracks, or vertical movement instead of distributing them as unrelated cards.

## Elevation & Depth

The page is flat by default. Dark and light fields meet directly, separated by tonal contrast, one-pixel rules, grids, and clipping rather than ambient shadow. Soft depth appears only where the implementation depicts a physical device nested in the field: the route phone, app screen, and privacy device core use broad low-opacity shadows. A restrained green glow belongs only to the monitoring dot.

### Shadow Vocabulary

- **Route Handset** (`0 22px 54px rgba(0,0,0,.34)`): Lifts the compact phone readout above the route model.
- **Product Device** (`0 36px 70px rgba(13,18,20,.34)`): Separates the primary app screen from its signal-red stage.
- **Privacy Device** (`0 28px 70px rgba(0,0,0,.3)`): Gives the on-device processing core physical presence inside the orbit diagram.
- **Monitoring Signal** (`0 2px 10px rgba(83,211,145,.38)`): A local glow constrained to the 7px status dot.

### Named Rules

**The Instrument Deck Rule.** Structural surfaces stay flat; shadow is reserved for nested device chassis, never for ordinary sections, rows, or calls to action.

## Shapes

The base form language is square, clipped, and engineered. Buttons, section fields, console rows, regional cells, and disclosure rows have no decorative corner rounding. Thin solid or dashed rules, circular camera ranges, route lines, signal arcs, and pointed vehicle markers supply the geometry.

Rounded forms are semantic exceptions: compact status fields use 7–12px corners, handset simulations use 24–36px radii, and live-status chips use a full capsule. The actual RoadCue icon preserves its own softened square silhouette. Small opposing rotations on device mockups keep them physical without softening the broader system.

**The Chassis Exception Rule.** Round only objects that read as a device, contained status control, signal node, or product icon; keep the surrounding information architecture rectilinear.

## Components

### Buttons

- **Shape:** Square, label-led blocks with no decorative border radius.
- **Primary:** Active amber on matte charcoal with 22px horizontal padding, a 68px desktop minimum height, a bold action line, and a compact uppercase availability line beneath it.
- **Hover / Focus:** Hover shifts to lit amber and lifts 2px over 180ms; keyboard focus uses a 3px amber outline offset by 4px. Reduced-motion preference collapses transitions.
- **Secondary / Ghost:** Text actions remain transparent and use a one-pixel bone underline or a full one-pixel bone border; hover may invert to bone on charcoal.

### Chips

- **Style:** Monitoring chips are transparent capsules with a one-pixel bone rule, compact uppercase metadata, and a small green status dot.
- **State:** Green is reserved for live monitoring or completed passage; red indicates a camera-ahead state inside device UI.

### Cards / Containers

- **Corner Style:** Ordinary content rows are square; simulated handsets use 24px or 34px corners, and the privacy device uses 36px.
- **Background:** Matte or raised charcoal for devices, bone for the active console step, and signal red for the product stage.
- **Shadow Strategy:** Only device-shaped containers use the shadows defined in Elevation & Depth.
- **Border:** One-pixel bone rules at full or muted opacity establish internal structure.
- **Internal Padding:** Dense console rows use 28px by 32px; the main device uses 32px 26px 22px.

### Navigation

The desktop header is an 82px three-column rule: brand left, quiet Inter links centered, and the bold launch action right. Links start in weathered bone and brighten on hover. At 820px the center links disappear, leaving brand and launch action; at 540px the header becomes 66px high and the action copy may collapse to its directional arrow.

### Vector Console

The route-test console pairs a vertical roadway diagram with four full-width button rows. Inactive rows are transparent with bone text; the active row inverts to bone on charcoal while retaining red stage labels. Selection moves the vehicle and collapses the amber sweep over a 600ms emphasized easing curve.

### Approach Instrument

The signature visual combines a faint grid, heavy road bands, a dashed active route, an amber projection, red camera range rings, a tabular distance readout, and a nested handset. Its animation changes distance and vehicle position together; the route dash and camera range pulse stop effectively when reduced motion is requested.

### Disclosure

Coverage caveats use the native details/summary pattern with a one-pixel bottom rule, bold Inter label, and amber plus icon. Opening the disclosure removes the vertical stroke rather than rotating or replacing the symbol.

## Do's and Don'ts

### Do:

- **Do** keep the page grounded in matte charcoal, bone lettering, and engineered one-pixel rules.
- **Do** reserve signal red for camera and hazard meaning, active amber for action and focus, and green for monitoring status.
- **Do** make direction or distance tangible through route lines, vector movement, tabular readouts, and alignment.
- **Do** preserve the Oswald/Inter division between compressed instrument language and explanatory prose.
- **Do** keep the exact RoadCue camera-location icon as the identity anchor.
- **Do** preserve the stacked 820px layout and compact 540px opening composition.

### Don't:

- **Don't** turn the system into a generic card grid, glassmorphic dashboard, or soft rounded app-marketing kit.
- **Don't** use police imagery, radar guns, map-pin clutter, fear-based drama, or fabricated enforcement scenes.
- **Don't** spread amber or green decoratively; their rarity makes their state meaning clear.
- **Don't** add shadows to ordinary sections, rows, buttons, or navigation.
- **Don't** replace the warm bone neutral with stark white or introduce unrelated accent colors.
- **Don't** animate route movement without honoring `prefers-reduced-motion`.
