#!/bin/bash

# Image Optimization Script for Roberto Leonarduzzi Portfolio
# Optimizes images in public/images directory

set -e

IMAGES_DIR="public/images"
BACKUP_DIR="public/images-backup"
LOG_FILE="optimization.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

# Check required tools
check_tools() {
    log "Checking required tools..."

    if ! command -v cwebp &> /dev/null; then
        error "cwebp not found. Please install webp tools: brew install webp"
        exit 1
    fi

    success "WebP tools found"
}

# Create backup
create_backup() {
    if [ ! -d "$BACKUP_DIR" ]; then
        log "Creating backup directory: $BACKUP_DIR"
        cp -r "$IMAGES_DIR" "$BACKUP_DIR"
        success "Backup created"
    else
        warning "Backup already exists, skipping backup creation"
    fi
}

# Calculate directory size
calculate_size() {
    local dir="$1"
    du -sh "$dir" 2>/dev/null | cut -f1 || echo "0B"
}

# Optimize large PNG files (>1MB) to WebP
optimize_large_pngs() {
    log "Optimizing large PNG files to WebP..."

    find "$IMAGES_DIR" -name "*.png" -size +1M | while read -r file; do
        local original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo 0)
        local webp_file="${file%.*}.webp"

        log "Processing: $file ($(numfmt --to=iec $original_size))"

        # Convert to WebP with 85% quality
        if cwebp -q 85 "$file" -o "$webp_file" 2>/dev/null; then
            local new_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null || echo 0)
            local savings=$((original_size - new_size))
            local savings_percent=$(( savings * 100 / original_size ))

            if [ $savings_percent -gt 20 ]; then
                success "Converted $file → ${webp_file##*/} ($(numfmt --to=iec $new_size), saved ${savings_percent}%)"
                # Keep original for compatibility, but note the WebP version exists
            else
                warning "WebP conversion didn't provide significant savings for $file"
                rm "$webp_file"
            fi
        else
            error "Failed to convert $file to WebP"
        fi
    done
}

# Optimize very large files by resizing and compressing
optimize_oversized_images() {
    log "Optimizing oversized images (>5MB)..."

    find "$IMAGES_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -size +5M | while read -r file; do
        local original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo 0)
        local webp_file="${file%.*}_optimized.webp"

        warning "Very large file detected: $file ($(numfmt --to=iec $original_size))"

        # Convert to WebP with more aggressive compression for very large files
        if cwebp -q 75 -resize 2048 0 "$file" -o "$webp_file" 2>/dev/null; then
            local new_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null || echo 0)
            local savings=$((original_size - new_size))
            local savings_percent=$(( savings * 100 / original_size ))

            success "Created optimized version: ${webp_file##*/} ($(numfmt --to=iec $new_size), saved ${savings_percent}%)"
            warning "Consider replacing original with optimized version: $file → $webp_file"
        else
            error "Failed to optimize $file"
        fi
    done
}

# Convert suitable images to WebP format
convert_suitable_images() {
    log "Converting suitable images to WebP format..."

    # Convert JPEGs over 200KB to WebP
    find "$IMAGES_DIR" -name "*.jpg" -o -name "*.jpeg" | while read -r file; do
        local original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo 0)

        if [ $original_size -gt 204800 ]; then # 200KB
            local webp_file="${file%.*}.webp"

            if [ ! -f "$webp_file" ]; then
                log "Converting JPEG: $file"
                if cwebp -q 85 "$file" -o "$webp_file" 2>/dev/null; then
                    local new_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file" 2>/dev/null || echo 0)
                    local savings=$((original_size - new_size))
                    local savings_percent=$(( savings * 100 / original_size ))

                    success "Created WebP version: ${webp_file##*/} (saved ${savings_percent}%)"
                fi
            fi
        fi
    done
}

# Generate optimization report
generate_report() {
    log "Generating optimization report..."

    local original_size=$(calculate_size "$BACKUP_DIR")
    local current_size=$(calculate_size "$IMAGES_DIR")

    echo "
╔══════════════════════════════════════╗
║        OPTIMIZATION REPORT           ║
╠══════════════════════════════════════╣
║ Original Size:     $original_size                 ║
║ Current Size:      $current_size                 ║
║                                      ║
║ Large PNGs found and processed       ║
║ WebP versions created for suitable   ║
║ images to improve loading times      ║
║                                      ║
║ Next Steps:                          ║
║ 1. Update image references in code   ║
║ 2. Implement WebP fallbacks          ║
║ 3. Consider progressive JPEG         ║
║ 4. Add lazy loading                  ║
╚══════════════════════════════════════╝
" | tee -a "$LOG_FILE"
}

# Main execution
main() {
    log "Starting image optimization process..."

    check_tools
    create_backup
    optimize_large_pngs
    optimize_oversized_images
    convert_suitable_images
    generate_report

    success "Image optimization completed! Check $LOG_FILE for details."
}

# Run main function
main "$@"