#!/bin/bash
# run_lighthouse_batch.sh - EMULATED MODE ONLY
# Simplified version for emulated device testing only

URL=$1
RUNS=${2:-30}
FRAMEWORK=$3
STRATEGY=$4

# Validasi parameter
if [ -z "$URL" ]; then
  echo "❌ URL tidak boleh kosong"
  echo "Usage: $0 <URL> [runs] [framework] [strategy]"
  exit 1
fi

# Set default values jika parameter kosong
FRAMEWORK=${FRAMEWORK:-"unknown"}
STRATEGY=${STRATEGY:-"unknown"}

BASE_OUT_DIR="results"
TIMESTAMP=$(date +"%Y-%m-%dT%H-%M")
SUBFOLDER="${FRAMEWORK}_${STRATEGY}_${TIMESTAMP}"
OUT_DIR="$BASE_OUT_DIR/$SUBFOLDER"
LOG_FILE="$OUT_DIR/run.log"

mkdir -p "$OUT_DIR"

# Simpan metadata eksperimen
META_FILE="$OUT_DIR/meta.json"
cat > "$META_FILE" <<EOF
{
  "framework": "$FRAMEWORK",
  "strategy": "$STRATEGY",
  "timestamp": "$TIMESTAMP",
  "url": "$URL",
  "runs": $RUNS
}
EOF

# Inisialisasi log
echo "📝 Log eksperimen - $TIMESTAMP" > "$LOG_FILE"
echo "Framework: $FRAMEWORK | Strategy: $STRATEGY | Runs: $RUNS" >> "$LOG_FILE"
echo "URL: $URL" >> "$LOG_FILE"
echo "-----------------------------------------" >> "$LOG_FILE"

# Function untuk mendapatkan flag lighthouse
get_lighthouse_flags() {
  local output_path=$1
  echo "--only-categories=performance --output=json --output-path=$output_path --quiet --disable-full-page-screenshot --form-factor=mobile --throttling-method=simulate --chrome-flags=\"--headless\""
}

# Main execution loop
for i in $(seq 1 $RUNS); do
  echo "▶ Running Lighthouse ($i/$RUNS) - Emulated Mode"
  echo "[$(date +"%H:%M:%S")] Run $i/$RUNS" >> "$LOG_FILE"
  
  # Get lighthouse flags
  FLAGS=$(get_lighthouse_flags "$OUT_DIR/run_$i.json")
  
  # Run lighthouse with timeout
  timeout 300 bash -c "lighthouse $URL $FLAGS" 2>> "$LOG_FILE"
  
  if [ $? -eq 0 ]; then
    echo "✅ Run $i berhasil" >> "$LOG_FILE"
  else
    echo "❌ Run $i gagal atau timeout" >> "$LOG_FILE"
  fi
  
  # Small delay between runs
  sleep 1
  
  echo "-----------------------------------------" >> "$LOG_FILE"
done

echo "✅ Completed $RUNS runs in emulated mode. Results saved to $OUT_DIR" | tee -a "$LOG_FILE"