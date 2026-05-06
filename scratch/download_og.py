import os
import requests

ASSETS_DIR = 'public/assets/images'
# We have images from different folders
URLS = [
    'https://upside-vila-ema.online/wp-content/uploads/2026/04/Logo_Upside_Vila-Ema-1.png',
    'https://upside-vila-ema.online/wp-content/uploads/2025/09/UP_SIDE_VIEW_VILA_EMA.webp'
]

if not os.path.exists(ASSETS_DIR):
    os.makedirs(ASSETS_DIR)

for url in URLS:
    img = url.split('/')[-1]
    target_path = os.path.join(ASSETS_DIR, img)
    
    if os.path.exists(target_path):
        print(f"Skipping {img}, already exists.")
        continue
        
    print(f"Downloading {img}...")
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(target_path, 'wb') as f:
                f.write(response.content)
            print(f"Success: {img}")
        else:
            print(f"Failed: {img} (Status: {response.status_code})")
    except Exception as e:
        print(f"Error downloading {img}: {e}")

print("Done.")
