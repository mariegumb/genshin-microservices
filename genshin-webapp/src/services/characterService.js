import axios from 'axios'

const characters = [{"name":"albedo","vision":"Geo","weapon":"Sword","rarity":5,"description":"A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.","nationId":3},{"name":"amber","title":"Champion Glider","vision":"Pyro","weapon":"Bow","gender":"Female","specialDish":"Outrider's Champion Steak!","rarity":4,"description":"Always energetic and full of life, Amber's the best - albeit only - Outrider of the Knights of Favonius.","nationId":3},{"name":"ayaka","vision":"Cryo","weapon":"Sword","rarity":5,"description":"Daughter of the Yashiro Commission's Kamisato Clan. Dignified and elegant, as well as wise and strong.","nationId":1},{"name":"barbara","vision":"Hydro","weapon":"Catalyst","rarity":4,"description":"Every denizen of Mondstadt adores Barbara. However, she learned the word \"idol\" from a magazine.","nationId":3},{"name":"beidou","vision":"Electro","weapon":"Claymore","rarity":4,"description":"Captain of her crew, The Crux. She's quite an unbound and forthright woman.","nationId":2},{"name":"bennett","vision":"Pyro","weapon":"Sword","rarity":4,"description":"A righteous and good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.","nationId":3},{"name":"chongyun","vision":"Cryo","weapon":"Claymore","rarity":4,"description":"A young exorcist from a family of exorcists. He does everything he can to suppress his abundance of yang energy.","nationId":2},{"name":"diluc","vision":"Pyro","weapon":"Claymore","rarity":5,"description":"The tycoon of a winery empire in Mondstadt, unmatched in every possible way.","nationId":3},{"name":"diona","vision":"Cryo","weapon":"Bow","rarity":4,"description":"A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat's Tail tavern.","nationId":3},{"name":"eula","vision":"Cryo","weapon":"Claymore","rarity":5,"description":"The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company. The reason for which a descendant of the ancient nobles might join the Knights remains a great mystery in Mondstadt to this very day.","nationId":3},{"name":"fischl","vision":"Electro","weapon":"Bow","rarity":4,"description":"A mysterious girl who calls herself \"Prinzessin der Verurteilung\" and travels with a night raven named Oz.","nationId":3},{"name":"ganyu","vision":"Cryo","weapon":"Bow","rarity":5,"description":"The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.","nationId":2},{"name":"hu-tao","vision":"Pyro","weapon":"Polearm","rarity":5,"description":"The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.","nationId":2},{"name":"jean","vision":"Anemo","weapon":"Sword","rarity":5,"description":"The righteous and rigorous Dandelion Knight, and Acting Grand Master of Mondstadt's Knights of Favonius","nationId":3},{"name":"kaeya","vision":"Cryo","weapon":"Sword","rarity":4,"description":"A thinker in the Knights of Favonius with a somewhat exotic appearance.","nationId":3},{"name":"kazuha","vision":"Anemo","weapon":"Sword","rarity":5,"description":"If one's heart is empty, all under heaven is empty. But if one's heart is pure, all under heaven is pure.","nationId":1},{"name":"keqing","vision":"Electro","weapon":"Sword","rarity":5,"description":"The Yuheng of the Liyue Qixing. Has much to say about Rex Lapis' unilateral approach to policymaking in Liyue - but in truth, gods admire skeptics such as her quite a lot.","nationId":2},{"name":"klee","vision":"Pyro","weapon":"Catalyst","rarity":5,"description":"An explosives expert and a regular at the Knights of Favonius' confinement room. Also known as Fleeing Sunlight.","nationId":3},{"name":"kokomi","vision":"Hydro","weapon":"Catalyst","rarity":5,"description":"The Divine Priestess of Watatsumi Island. All of the island's affairs are at this young lady's fingertips.","nationId":1},{"name":"lisa","vision":"Electro","weapon":"Catalyst","rarity":4,"description":"The languid but knowledgeable Librarian of the Knights of Favonius who was deemed by Sumeru Academia to be their most distinguished graduate in the past two centuries.","nationId":3},{"name":"mona","vision":"Hydro","weapon":"Catalyst","rarity":5,"description":"A mysterious young astrologer who proclaims herself to be \"Astrologist Mona Megistus,\" and who possesses abilities to match the title. Erudite, but prideful.","nationId":3},{"name":"ningguang","vision":"Geo","weapon":"Catalyst","rarity":4,"description":"The Tianquan of Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.","nationId":2},{"name":"noelle","vision":"Geo","weapon":"Claymore","rarity":4,"description":"A maid who faithfully serves the Knights of Favonius that dreams of joining their ranks someday.","nationId":3},{"name":"qiqi","vision":"Cryo","weapon":"Sword","rarity":5,"description":"An apprentice and herb gatherer at Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.","nationId":2},{"name":"raiden","vision":"Electro","weapon":"Polearm","rarity":5,"description":"Her Excellency, the Almighty, Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.","nationId":1},{"name":"razor","vision":"Electro","weapon":"Claymore","rarity":4,"description":"A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.","nationId":3},{"name":"rosaria","vision":"Cryo","weapon":"Polearm","rarity":4,"description":"A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.","nationId":3},{"name":"sara","vision":"Electro","weapon":"Bow","rarity":4,"description":"A general of the Tenryou Commission. Bold, decisive, and skilled in battle.","nationId":3},{"name":"sayu","vision":"Anemo","weapon":"Claymore","rarity":4,"description":"A pint-sized ninja attached to the Shuumatsuban, who always seems to be lacking sleep.","nationId":1},{"name":"sucrose","vision":"Anemo","weapon":"Catalyst","rarity":4,"description":"An alchemist filled with curiosity about all things. She researches bio-alchemy.","nationId":3},{"name":"tartaglia","vision":"Hydro","weapon":"Bow","rarity":5,"description":"No. 11 of The Harbingers, also known as \"Childe\". His name is highly feared on the battlefield.","nationId":3},{"name":"venti","vision":"Anemo","weapon":"Bow","rarity":5,"description":"One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.","nationId":3},{"name":"xiangling","vision":"Pyro","weapon":"Polearm","rarity":4,"description":"A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.","nationId":2},{"name":"xiao","vision":"Anemo","weapon":"Polearm","rarity":5,"description":"A yaksha adeptus that defends Liyue. Also heralded as the \"Conqueror of Demons\" and \"Vigilant Yaksha.\"","nationId":2},{"name":"xingqiu","vision":"Hydro","weapon":"Sword","rarity":4,"description":"A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.","nationId":2},{"name":"xinyan","vision":"Pyro","weapon":"Claymore","rarity":4,"description":"Liyue's sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.","nationId":2},{"name":"yanfei","vision":"Pyro","weapon":"Catalyst","rarity":4,"description":"A well-known legal adviser active in Liyue Harbor. A brilliant young lady in whose veins runs the blood of an illuminated beast.","nationId":2},{"name":"yoimiya","vision":"Pyro","weapon":"Bow","rarity":5,"description":"Owner of Naganohara Fireworks. Known as the \"Queen of the Summer Festival,\" she excels in her craft of creating fireworks that symbolize people's hopes and dreams.","nationId":1},{"name":"zhongli","vision":"Geo","weapon":"Polearm","rarity":5,"description":"A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.","nationId":2}]

export const loadCharactersFromGameAPI = async () => {
    let { data } = await axios.get(`${import.meta.env.VITE_APP_GAME_API}/characters`)

    const skippedCharacters = ['aloy', 'traveler-geo', 'traveler-anemo', 'traveler-electro']

    for (const name of data.filter(d => !skippedCharacters.includes(d))){
        const res = await axios.get(`${import.meta.env.VITE_APP_GAME_API}/characters/` + name)
        const character = res.data

        delete character.affiliation
        delete character.constellations
        delete character.constellation
        delete character.birthday
        delete character.passiveTalents
        delete character.skillTalents
        delete character.weapon_type
        delete character.vision_key

        character.name = name

        switch (character.nation.toLowerCase()) {
            case 'inazuma':
                character.nationId = 1
                break
            case 'liyue':
                character.nationId = 2
                break
            case 'mondstadt':
                character.nationId = 3
                break
            default:
                character.nationId = 3
                break
        }

        delete character.nation

        saveCharacter(character)
    }
}

export const saveCharacter = async (character) => {
    const res = await axios.post(`${import.meta.env.VITE_APP_CHARACTER_API}/characters`, {
        ...character
    })
}

export const flushCharacters = async () => {
    const res = await axios.delete(`${import.meta.env.VITE_APP_CHARACTER_API}/characters`)
}

export const removeCharacter = async (id) => {
    await axios.delete(`${import.meta.env.VITE_APP_CHARACTER_API}/characters/${id}`)
}

export const updateCharacter = async (updated) => {
    const res = await axios.put(`${import.meta.env.VITE_APP_CHARACTER_API}/characters/${updated.id}`, {
        ...updated
    })
}

export const getCharacter = async (id) => {
    const res = await axios.get(`${import.meta.env.VITE_APP_CHARACTER_API}/characters/${id}`)
    return res.data
}