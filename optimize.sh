#!/bin/bash
cd "public" || exit

for img in *.jpg; do
    if [ -f "$img" ]; then
        filename=$(basename "$img" .jpg)
        echo "Processing $img..."
        sips -s format webp -s formatOptions 80 -Z 1200 "$img" --out "${filename}.webp"
    fi
done
