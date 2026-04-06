

## Rebalance the Studio / People section layout

### Problem
The current 2-column grid for the photo + "Together" text creates a large empty gap in the left column because `items-end` pushes the short paragraph to the bottom of the tall photo. The section feels visually unbalanced.

### Proposed layout restructure

**Top area** — keep as-is: label, heading, subtitle stacked vertically.

**Photo + intro area** — switch to a layout where the photo spans wider (roughly 7/12) on the left, and the "Together" text sits on the right, vertically centered beside it. This eliminates the dead space.

**Bios grid** — keep the 2-column grid for An and Vincent, but align items to `start` instead of relying on equal-height columns.

### Technical changes

**File: `src/components/Studio.tsx`**

1. Change the photo+text grid from `grid-cols-2 items-end` to `grid-cols-[7fr_5fr] items-center`
2. Swap column order back: photo first (left), "Together" text second (right) — this puts the visual weight on the left and the text on the right, creating a more natural reading flow
3. Reduce the `mb-14` gap between the photo row and the bios to `mb-10` for tighter cohesion
4. Keep everything else (typography, fade delays, bios content) unchanged

