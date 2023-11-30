## Nikolay Hoft

<img align="right" width="64" height="64" title="Author logo" src="http://daytec.ru/img/Ranjy-96.svg">

### Contacts:

[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](https://discord.gg/mr.hoft) 
[![Telegram](https://img.shields.io/badge/-Telegram-0088cc?style=flat-square&logo=Telegram&logoColor=white)](https://t.me/mrHoft)

### About me:

I am a frontend/game developer and C++/Python practitioner with over 5 years of experience from the black sea region.
But I want to become a good fullstack (preferentially frontend) developer to work in a product company that makes handy services. I appreciate the friendly relations in the team and with the management. My strengths: diligence, desire to improve and good soft skills.

### Tech Stack:

- HTML5
- CSS3, SCSS, SASS
- JavaScript, TypeScript
- Node.js, Express.js
- React, Redux, Styled Components
- Next, NextAuth
- Webpack, Lerna, Vite, Rollup
- Chai, Mocha, Jest
- SQL, Postgres
- Linux, Docker, Nginx

### Experience:

| Period | Description |
| --- | --- |
| 2022 - 2023 | Я.Practicum<br/>Middle frontend-developer.<br/>[web-messenger](https://github.com/mrHoft/pet-chat)<br/>[web-game](https://github.com/fastPaws-game/fastPaws)|
| 2011 - now  | Freelance<br/>Fulfilling orders for development, write books, working on personal projects.<br/>[Hoft AddOns : ESOUI](https://www.esoui.com/downloads/author-23287.html) 10kk+ downloads|
| 2010 - 2011 | IE Bilko<br/>Installation and administration of server rooms based on Windows NT, networks, video surveillance, 1C. |
| 2001 - 2007 | Mobitel, Picadon, Sunrise<br/>Sales manager, director.<br/>Wholesale and retail trade in computer equipment, mobile phones, software. |

### Education:
- RSSchool. Frontend 2023Q4. (in progress)
- RSSchool. Frontend 2023Q2.
- Y.Practicum. Middle frontend-developer.
- PSKhK УТ-1 470695. The “programmer” certificate was received along with a diploma of a geodesist at the initiative of a computer science teacher for winning Olympiads (PSKhK).
- ESCC. English B1.
- Self-development: W3Schools, EnglishClass101, freecodecamp.org, codewars.com, learn.javascript, javascript.info and other. My hand book is MDN Web Docs.

### React hook code examle:

```ts
export const useAudio = () => {
  const resource = Resource.get()
  const [audioList, setAudioList] = useState<Record<string, HTMLAudioElement>>({})
  let audioEnabled = useAppSelector(SettingsSelectors.getAudioEnabled)

  const createAudio = (name: string) => {
    const audioType = name.split('.')[0] as TAudio
    if (Object.keys(AudioVolume).includes(audioType)) {
      const audio = getValue(resource.audio, name) as HTMLAudioElement
      audio.muted = false
      audio.volume = AudioVolume[audioType] / 10
      audio.loop = audioType === 'music'

      const list = audioList
      list[name] = audio
      setAudioList(list)
    } else {
      console.warn('Wrong audio name:', name)
    }
  }

  const playAudio = (name: string) => {
    if (!audioEnabled) return
    if (!audioList[name]) createAudio(name)

    if (!Object.keys(audioList).length || !audioList[name]) return

    audioList[name].play().catch((e: Error) => {
      console.warn(e.message)
    })
  }

  return playAudio
}
```
