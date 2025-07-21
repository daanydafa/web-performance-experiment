import os
import json
import csv
import argparse

# Setup argumen CLI
parser = argparse.ArgumentParser(description="Ekstrak metrik Core Web Vitals dari semua subfolder Lighthouse JSON.")
parser.add_argument(
    "--input-root",
    type=str,
    default="results",
    help="Folder akar tempat semua hasil disimpan (default: 'results')"
)
args = parser.parse_args()

INPUT_ROOT = args.input_root
OUTPUT_FOLDER = "extracted_results"

# Metrik yang diambil
metrics_to_extract = [
    "first-contentful-paint",
    "largest-contentful-paint",
    "cumulative-layout-shift",
    "total-blocking-time"
]

# Header CSV
headers = ["filename", "framework", "strategy", "timestamp"] + metrics_to_extract

if not os.path.exists(INPUT_ROOT):
    print(f"❌ Folder '{INPUT_ROOT}' tidak ditemukan.")
    exit(1)

os.makedirs(OUTPUT_FOLDER, exist_ok=True)

print(f"🔍 Memindai subfolder dalam: {INPUT_ROOT}")

for subfolder in sorted(os.listdir(INPUT_ROOT)):
    sub_path = os.path.join(INPUT_ROOT, subfolder)
    if os.path.isdir(sub_path):
        meta_file = os.path.join(sub_path, "meta.json")
        if not os.path.exists(meta_file):
            print(f"⚠️  Melewati '{subfolder}' (tidak ada meta.json)")
            continue

        try:
            with open(meta_file, 'r', encoding='utf-8') as f:
                meta = json.load(f)
                framework = meta.get("framework", "NA")
                strategy = meta.get("strategy", "NA")
                timestamp = meta.get("timestamp", "NA")
        except Exception as e:
            print(f"❌ Gagal membaca metadata {meta_file}: {e}")
            continue

        rows = []

        for filename in sorted(os.listdir(sub_path)):
            if filename.startswith("run_") and filename.endswith(".json"):
                filepath = os.path.join(sub_path, filename)
                print(f"📄 Memproses: {subfolder}/{filename}")
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        if not isinstance(data, dict) or "audits" not in data:
                            print(f"⚠️  File tidak valid atau bukan hasil Lighthouse: {filename}")
                            continue

                        audits = data["audits"]

                        row = [filename, framework, strategy, timestamp]
                        for metric in metrics_to_extract:
                            value = audits.get(metric, {}).get("numericValue", "NA")
                            if value == "NA":
                                print(f"⚠️  Metrik '{metric}' tidak ditemukan di {filename}")
                            row.append(value)
                        rows.append(row)
                except Exception as e:
                    print(f"❌ Gagal memproses {filename}: {e}")

        if rows:
            output_filename = f"{framework}_{strategy}.csv"
            output_path = os.path.join(OUTPUT_FOLDER, output_filename)

            print(f"💾 Menyimpan hasil ke: {output_path}")
            with open(output_path, "w", newline="", encoding="utf-8") as f:
                writer = csv.writer(f)
                writer.writerow(headers)
                writer.writerows(rows)

            print(f"✅ Ekstraksi selesai untuk: {output_filename}. Total file: {len(rows)}")
        else:
            print(f"⚠️  Tidak ada file valid ditemukan untuk: {framework}_{strategy}")
