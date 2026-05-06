import requests
import os

filename = 'Upside-Vila-Ema-Fachada-Principal-1024x576.webp'
dates = ['2026/04/', '2026/01/', '2025/12/', '2025/09/', '2025/08/']
base_url = 'https://upside-vila-ema.online/wp-content/uploads/'

for date in dates:
    url = base_url + date + filename
    print(f"Trying {url}...")
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200 and len(response.content) > 1000:
            print(f"Found! Size: {len(response.content)}")
            with open(f'public/assets/images/{filename}', 'wb') as f:
                f.write(response.content)
            print("Successfully updated the image.")
            break
        else:
            print(f"Not found or too small (Status: {response.status_code}, Size: {len(response.content) if response.status_code == 200 else 'N/A'})")
    except Exception as e:
        print(f"Error: {e}")
