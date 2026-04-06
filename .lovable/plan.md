

## Restructure Studio/People section to match v4 layout

### New layout structure

The uploaded HTML shows a different composition than what we currently have:

1. **Top area**: 2-column grid (`1fr 1fr`, `align-items: end`, gap 64px, mb 72px)
   - Left: heading + subtitle (intro text in mono, not body font)
   - Right: team photo with `aspect-ratio: 3/2`
2. **Bios grid**: 2-column grid (`1fr 1fr`, gap 64px) — each person has border-top, name, role in **green** uppercase mono, bio, and "when stuck" line with lower opacity
3. **"Together" paragraph**: appears *below* the bios grid (not beside the photo), styled as Outfit/heading font at 20px weight-500, with "Founded in 2019." in muted smaller text

### Technical changes — `src/components/Studio.tsx`

1. **Restructure top grid**: Change from `grid-cols-[7fr_5fr] items-center` to `grid-cols-1 md:grid-cols-2 gap-16 items-end mb-[72px]`
   - Left column: eyebrow label + heading + subtitle (change subtitle to `font-mono text-sm text-orville-mid`)
   - Right column: photo with `aspect-ratio-[3/2]` and `object-cover`

2. **Bios grid**: Change gap from `gap-12` to `gap-16`, keep `grid-cols-2`
   - Make role text green (`text-orville-green`) instead of muted
   - Add `mb-5` spacing after role
   - "When stuck" line: add `opacity-60` instead of italic styling

3. **Move "Together" text below bios**: Add as a new block after the bios grid with `mt-[72px]`, styled with `font-heading font-medium text-xl leading-[1.5] max-w-[640px]`, and "Founded in 2019." wrapped in a `<span>` with muted color and smaller size

4. **Remove** the current "Together" text from the top grid area

5. **Responsive**: On mobile, both grids collapse to single column with reduced gaps

