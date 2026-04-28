import re
import sys

def extract_urls(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract URLs starting with the domain and pointing to uploads
    urls = re.findall(r'https://upside-vila-ema\.online/wp-content/uploads/[\w\-/._%]+', content)
    
    # Remove duplicates and sort
    unique_urls = sorted(list(set(urls)))
    
    for url in unique_urls:
        print(url)

if __name__ == "__main__":
    extract_urls(sys.argv[1])
