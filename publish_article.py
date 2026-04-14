#!/usr/bin/env python3
"""
Elips Studio — Auto Blog Publisher
Genere et publie un article SEO dans Supabase, puis notifie via Telegram.
Usage: python3 publish_article.py "Titre" "slug" "meta description" "categorie" "mot-cle" "contenu HTML"
"""

import sys
import json
import urllib.request
import urllib.error

SUPABASE_URL = "https://nxdsnklqnahmifyptgmm.supabase.co/rest/v1/blog_posts"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZHNua2xxbmFobWlmeXB0Z21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNDk4MjUsImV4cCI6MjA5MDYyNTgyNX0.kJJcouEPDujWHKKNlG-aJDt_8M1zCKZMAMuatbi3OXA"
TELEGRAM_TOKEN = "8632890648:AAHHc7r5Nv2I-606PRPhy6ciX3ctHwY4mn0"
TELEGRAM_CHAT_ID = "1104258037"


def get_existing_articles():
    """Recupere les articles existants pour eviter les doublons."""
    url = SUPABASE_URL + "?select=title,slug,category"
    req = urllib.request.Request(url)
    req.add_header("apikey", SUPABASE_KEY)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read().decode())
    except Exception as e:
        print(f"Erreur lecture articles: {e}")
        return []


def publish_article(title, slug, meta_description, category, image_url, content):
    """Publie un article dans Supabase."""
    data = json.dumps({
        "title": title,
        "slug": slug,
        "meta_description": meta_description,
        "category": category,
        "image_url": image_url,
        "content": content
    }).encode("utf-8")

    req = urllib.request.Request(SUPABASE_URL, data=data, method="POST")
    req.add_header("apikey", SUPABASE_KEY)
    req.add_header("Authorization", f"Bearer {SUPABASE_KEY}")
    req.add_header("Content-Type", "application/json")
    req.add_header("Prefer", "return=representation")

    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode())
            if result and len(result) > 0 and "id" in result[0]:
                print(f"Article publie avec succes! ID: {result[0]['id']}")
                return True
            else:
                print(f"Reponse inattendue: {result}")
                return False
    except urllib.error.HTTPError as e:
        error_body = e.read().decode()
        print(f"Erreur HTTP {e.code}: {error_body}")
        return False
    except Exception as e:
        print(f"Erreur publication: {e}")
        return False


def send_telegram(message):
    """Envoie une notification Telegram."""
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    data = json.dumps({
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message
    }).encode("utf-8")

    req = urllib.request.Request(url, data=data, method="POST")
    req.add_header("Content-Type", "application/json")

    try:
        with urllib.request.urlopen(req) as resp:
            print("Notification Telegram envoyee!")
            return True
    except Exception as e:
        print(f"Erreur Telegram: {e}")
        return False


def main():
    """Point d'entree principal — utilise avec un fichier JSON."""
    if len(sys.argv) < 2:
        print("Usage: python3 publish_article.py <fichier.json>")
        print("Le fichier JSON doit contenir: title, slug, meta_description, category, image_url, content, keyword")
        sys.exit(1)

    json_file = sys.argv[1]

    with open(json_file, "r", encoding="utf-8") as f:
        article = json.load(f)

    title = article["title"]
    slug = article["slug"]
    meta_description = article["meta_description"]
    category = article["category"]
    image_url = article.get("image_url", "")
    content = article["content"]
    keyword = article.get("keyword", "")

    # Verifier les doublons
    existing = get_existing_articles()
    existing_slugs = [a["slug"] for a in existing]
    if slug in existing_slugs:
        msg = f"Article avec slug '{slug}' existe deja. Publication annulee."
        print(msg)
        send_telegram(f"⚠️ Blog Elips Studio\n\n{msg}")
        sys.exit(1)

    # Publier
    success = publish_article(title, slug, meta_description, category, image_url, content)

    if success:
        msg = (
            f"✅ Nouvel article publie !\n\n"
            f"📝 {title}\n"
            f"📂 {category}\n"
            f"🔑 Mot-cle : {keyword}\n\n"
            f"🔗 https://elips-studio.vercel.app/article.html?slug={slug}"
        )
        send_telegram(msg)
    else:
        send_telegram(f"❌ Erreur publication article: {title}")
        sys.exit(1)


if __name__ == "__main__":
    main()
