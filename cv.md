## Nikolay Hoft

<img align="right" width="64" height="64" title="Author logo" src="http://daytec.ru/img/Ranjy-96.svg">

### Contacts:

[![Discord](https://img.shields.io/badge/Discord-%237289DA.svg?logo=discord&logoColor=white)](https://discord.gg/mr.hoft) 
[![Telegram](https://img.shields.io/badge/-Telegram-0088cc?style=flat-square&logo=Telegram&logoColor=white)](https://t.me/mrHoft)

### About me:

I am a frontend/game developer and C++/Python practitioner with over 5 years of experience from the black sea region.
But I want to become a good fullstack (preferentially frontend) developer to work in a product company that makes handy services. I appreciate the friendly relations in the team and with the management. My strengths: diligence, desire to improve and good soft skills.

### Tech Stack:

- HTML5, CSS3
- JavaScript, TypeScript
- Node.js, Express.js
- React, Redux, Styled Components
- Webpack, Lerna, Vite
- Chai, Mocha, Jest
- SQL, Postgres, Sequelize
- Linux, Docker, Compose
- JavaScript, TypeScript
<!--
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Gimp Gnu Image Manipulation Program](https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF)

![LINUX](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Perl](https://img.shields.io/badge/perl-%2339457E.svg?style=for-the-badge&logo=perl&logoColor=white)
-->
### Experience:

| Period | Description |
| --- | --- |
| 2022 - 2023 | Я.Practicum<br/>Middle frontend-developer.<br/>[web-messenger](https://github.com/mrHoft/pet-chat)<br/>[web-game](https://github.com/fastPaws-game/fastPaws)|
| 2011 - now  | Freelance<br/>Fulfilling orders for development, write books, working on personal projects.<br/>[Hoft AddOns : ESOUI](https://www.esoui.com/downloads/author-23287.html) 10kk+ downloads|
| 2010 - 2011 | IE Bilko<br/>Installation and administration of server rooms based on Windows NT, networks, video surveillance, 1C. |
| 2001 - 2007 | Mobitel, Picadon, Sunrise<br/>Sales manager, director.<br/>Wholesale and retail trade in computer equipment, mobile phones, software. |

### Education:

- Middle frontend-developer course from Я.Practicum.
- The “programmer” certificate was received along with a diploma of a geodesist at the initiative of a computer science teacher for winning Olympiads (PSKhK).
- English B1 (ESCC).
- Self-development: RSSchool, W3Schools, EnglishClass101, freecodecamp.org, codewars.com, learn.javascript.ru and other.

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
