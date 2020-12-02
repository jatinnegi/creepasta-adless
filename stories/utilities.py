import requests
from bs4 import BeautifulSoup


def get_stories(page):
    URL = f"https://www.creepypasta.com/?_page={page}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
    }

    response = requests.get(URL, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    stories = soup.find_all(class_="pt-cv-ifield")
    data = get_data(stories)

    return data

def get_story(title):
    URL = f"https://www.creepypasta.com/{title}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
    }

    response = requests.get(URL, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    p_tags = soup.find_all('p')
    if(p_tags.__len__() == 0):
        return 0
    img_tag = str(soup.find(class_="post-thumb-img-content post-thumb"))
    thumbnail = img_tag.split('src="')[1].split('"')[0]

    content = []
    story = {}

    for count, p_tag in enumerate(p_tags):
        try:
            tag = str(p_tag)
            paragraph = tag.split('<p>')[1].split('</p>')[0]
            paragraph = paragraph.split('<br/>')[1]
            paragraph = paragraph.split('<div')[0]
            content.append(paragraph)
        except:
            print(count)
    
    story['content'] = content
    story['thumbnail'] = thumbnail

    return story


def get_data(stories):
    data = []
    not_found = 0

    for story in stories:
        try:
            story = str(story)

            summary = story.split('class="pt-cv-content">')[1].split("<")[0]
            link = story.split('href="')[1].split('"')[0]
            thumbnail = story.split('src="')[1].split('"')[0]
            title = story.split('class="pt-cv-title">')[1].split('target="_self">')[1].split('<')[0]
            date_published = story.split('datetime="')[1].split('"')[0]

            data.append({
                'title': title,
                'summary': summary,
                'link': link,
                'thumbnail': thumbnail,
                'date_published': date_published,
            })

        except:
            not_found = not_found + 1

    return data
