import os
import requests

ASSETS_DIR = 'public/assets/images'
BASE_URL = 'https://upside-vila-ema.online/wp-content/uploads/2026/04/'

images = [
    # Hero
    'Decorado_UP_SIDE_VIEW_VILA_EMA_SALA-scaled-2-2.webp',
    'Decorado_UP_SIDE_VIEW_VILA_EMA_QUARTO-scaled-1-1.webp',
    'Upside_View_Vila_Ema_Baner-1.webp',
    
    # Ficha Tecnica
    'Upside-Vila-Ema-Fachada-Principal-1024x576.webp',
    
    # Galeria Condominio
    'Upside_Vila_Ema_gourmet-1.webp',
    'Upside_Vila_Ema_-beauty-1.webp',
    'Upside_View_Vila_Ema_brinquedoteca-1.webp',
    'Upside_View_Vila_Ema_03-Hall-1.webp',
    'Upside_View_Vila_Ema_-coworking-1.webp',
    'Up_side_Vila_Ema_quadra-1.webp',
    'Up_side_Vila_Ema_playground-1.webp',
    'Up_side_Vila_Ema_gourmet-1.webp',
    'Up_side_Vila_Ema_fitness-1.webp',
    'Up_side_Vila_Ema_churrasqueira-1.webp',
    'Up_side_View_Vila_Ema_piscina_infantil-1.webp',
    'Upside_Vila_Ema_portaria-1.webp',
    'Upside_Vila_Ema_piscina_adulto_2-1.webp',
    'Upside_Vila_Ema_piscina_adulto-1.webp',
    'Upside_Vila_Ema_mini-market-1.webp',
    'Upside_Vila_Ema_lavanderia-1.webp',
    'Upside_View_Vila_Ema_delivery-1.webp',
    'Upside_Vila_Ema_game-room-1.webp',
    'Upside_View_Vila_Ema_bicicletario-1.webp',
    'Upside_View_Vila_Ema_academia-1.webp',
    
    # Galeria Decorado
    'Decorado-View-71-scaled-1-1.webp',
    'UPSIDE_VILA_EMA_SALA-scaled-1-1.webp',
    'UP_SIDE_VILA_EMA_QUARTO_2-scaled-1-1.webp',
    'Decorado_UPSIDE_VILA_EMA_JANTAR-scaled-1-1.webp',
    'Decorado_UPSIDE_VIEW_VILA_EMA_QUARTO_2-scaled-1-1.webp',
    'Decorado_UPSIDE_VIEW_VILA_EMA_COZINHA-scaled-1-1.webp',
    'Decorado_UPSIDE_VIEW_VILA_EMA_bANHEIRO-scaled-1-1.webp',
    'Decorado_UPSIDE_VIEW_VILA_EMA_QUARTO-scaled-1-1.webp',
    'Decorado_UPSIDE_VIEW_VILA_EMA_SALA-scaled-2-2.webp', # Repeated but with diff name sometimes? 
    'Decorado_UPSIDE_VIEW_VILA_EMA_JANTAR-scaled-1-1.webp',
    'Decorado_UPSIDE_VIEW_VILA_EMA_CHURRASQUEIRA-scaled-1-1.webp',
    'Decorado-View-67-scaled-1-1.webp',
    'Decorado-View-64-scaled-1-1.webp',
    'Decorado-View-61-scaled-1-1.webp',
    'Decorado-View-58-scaled-1-1.webp',
    'Decorado-View-55-scaled-1-1.webp',
    'Decorado-View-52-scaled-1-1.webp',
    'Decorado-View-49-scaled-1-1.webp',

    # Plantas
    'UpSide_View_Vila_Ema_Planta_2_Dormitorios_47m-scaled-1-1.webp',
    'UpSide_View_Vila_Ema_Planta_2_Dormitorios_48m-scaled-1-1.webp',
    'Up_Side_Vila_Ema_Planta_2_Dormitorios_805m-scaled-1-1.webp',
    'UpSide_Vila_Ema_Planta_3_Dormitorios_805m-scaled-1-1.webp',
    'UpSide_Vila_Ema_Planta_3_Dormitorios_92m-scaled-1-1.webp',

    # Logo
    'Logo_Upside_Vila-Ema-1.png'
]

# Unique images to avoid redundant downloads
images = list(set(images))

if not os.path.exists(ASSETS_DIR):
    os.makedirs(ASSETS_DIR)

for img in images:
    url = BASE_URL + img
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
