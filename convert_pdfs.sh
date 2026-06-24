#!/usr/bin/env bash
# Convert paper PDFs to high-res PNGs for the website.
# Uses pdftoppm (poppler) at 300 DPI. Output goes to public/figures/.

set -euo pipefail

MEDIA="/Users/piyush/Downloads/research-projects/tara-arxiv-april-2026/media"
SUPP="/Users/piyush/Downloads/research-projects/tara-arxiv-april-2026/supp-media"
OUT="$(dirname "$0")/public/figures"
mkdir -p "$OUT"

convert_pdf() {
  local src="$1"
  local dest="$2"
  local tmp
  tmp="$(mktemp -d)"
  pdftoppm -r 300 -png "$src" "$tmp/page"
  # pdftoppm names output page-1.png, page-2.png, etc.
  # We only want the first page for single-page figures.
  mv "$tmp/page-1.png" "$dest"
  rm -rf "$tmp"
  echo "  ✓ $(basename "$src") → $(basename "$dest")"
}

echo "Converting PDFs to high-res PNG (300 DPI)..."

# Teaser
convert_pdf "$MEDIA/teaser-with-tsne-v3.pdf"          "$OUT/teaser.png"

# Method
convert_pdf "$MEDIA/nli-nuance-v3.pdf"                "$OUT/nli-nuance.png"
convert_pdf "$MEDIA/text-proc-v3.pdf"                 "$OUT/text-proc.png"

# Temporal results
convert_pdf "$MEDIA/qual-chiral-v1.pdf"               "$OUT/qual-chiral.png"
convert_pdf "$MEDIA/tsne-chiral-v3.pdf"               "$OUT/tsne-chiral.png"
convert_pdf "$MEDIA/cia-retrieval-samples-v1.pdf"     "$OUT/cia-retrieval-samples.png"

# Negation results
convert_pdf "$MEDIA/qual-negbench-v1.pdf"             "$OUT/qual-negbench.png"

# Multimodal results
convert_pdf "$MEDIA/qual-covr-v2.pdf"                 "$OUT/qual-covr.png"
convert_pdf "$SUPP/line-search-val-v1.pdf"            "$OUT/line-search.png"

# Standard / ablations
convert_pdf "$MEDIA/datasize-v1.pdf"                  "$OUT/datasize.png"

# Analysis — modality gap
convert_pdf "$MEDIA/modality-gap-compressed-v2.pdf"   "$OUT/modgap-main.png"
convert_pdf "$SUPP/tarsier2-modgap-v12.pdf"           "$OUT/tarsier2-modgap.png"
convert_pdf "$MEDIA/video-text-logits-132360.pdf"     "$OUT/video-text-logits.png"

echo "Done. Files in $OUT:"
ls -lh "$OUT"/*.png
