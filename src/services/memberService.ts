interface Member {
  discordLink: string;
  discordName: string;
  accountName: string;
  rank: string;
  entryDate: string;
}

export const fetchMemberList = async (): Promise<Member[]> => {
  return getRealMemberData();
};

// Real member data from NAC WvW website
const getRealMemberData = (): Member[] => {
  return [
    {
      discordLink: "https://discord.com/users/596331134217093141",
      discordName: "[NAC] Dracarti",
      accountName: "Dracarti.3041",
      rank: "Anführer",
      entryDate: "03.01.2015 19:42"
    },
    {
      discordLink: "https://discord.com/users/597370096910073887",
      discordName: "[NAC] mampfifred",
      accountName: "whiteman.8475",
      rank: "Veteran",
      entryDate: "09.01.2015 19:18"
    },
    {
      discordLink: "https://discord.com/users/548569219566927903",
      discordName: "[NAC] Sonnenläufer",
      accountName: "Nimapi.7012",
      rank: "Offizier",
      entryDate: "09.01.2015 20:56"
    },
    {
      discordLink: "https://discord.com/users/356131270104711168",
      discordName: "[NAC] grimph",
      accountName: "gnash.7584",
      rank: "Veteran",
      entryDate: "18.07.2018 21:07"
    },
    {
      discordLink: "https://discord.com/users/1315358055633911839",
      discordName: "[NAC] Varda",
      accountName: "Varda.3204",
      rank: "Veteran",
      entryDate: "02.11.2018 10:45"
    },
    {
      discordLink: "https://discord.com/users/596417729250983966",
      discordName: "[NAC] Hawo",
      accountName: "Hawo.4908",
      rank: "Offizier",
      entryDate: "03.11.2018 08:17"
    },
    {
      discordLink: "https://discord.com/users/298437017648234496",
      discordName: "[NAC] Zwiebel",
      accountName: "Nightclaw.8749",
      rank: "Offizier",
      entryDate: "20.02.2021 22:56"
    },
    {
      discordLink: "https://discord.com/users/617399791701196801",
      discordName: "[NAC] Churus",
      accountName: "Churus.6054",
      rank: "Veteran",
      entryDate: "07.07.2021 09:49"
    },
    {
      discordLink: "https://discord.com/users/1190945812126113852",
      discordName: "[NAC] Nong Bua",
      accountName: "MALI CHA.6192",
      rank: "Veteran",
      entryDate: "07.07.2021 09:52"
    },
    {
      discordLink: "https://discord.com/users/460523193082445835",
      discordName: "[NAC] Jarn",
      accountName: "Jarn.1726",
      rank: "Veteran",
      entryDate: "08.07.2021 07:50"
    },
    {
      discordLink: "https://discord.com/users/342358930535743490",
      discordName: "[NAC] Ventris",
      accountName: "Ventris.5680",
      rank: "Offizier",
      entryDate: "09.07.2021 07:59"
    },
    {
      discordLink: "https://discord.com/users/531194445488455700",
      discordName: "[NAC] Lasoxa",
      accountName: "Lasoxa.9623",
      rank: "Veteran",
      entryDate: "14.02.2022 07:56"
    },
    {
      discordLink: "https://discord.com/users/351297969259282433",
      discordName: "[NAC] Sasara",
      accountName: "Sasara.7426",
      rank: "Veteran",
      entryDate: "27.03.2022 18:47"
    },
    {
      discordLink: "https://discord.com/users/869935929467502593",
      discordName: "[NAC] poki",
      accountName: "poki.4309",
      rank: "Veteran",
      entryDate: "02.12.2022 09:43"
    },
    {
      discordLink: "https://discord.com/users/1117743876426436668",
      discordName: "[NAC] Neem",
      accountName: "Neem.1284",
      rank: "Veteran",
      entryDate: "02.12.2022 09:44"
    },
    {
      discordLink: "https://discord.com/users/740258889693397003",
      discordName: "[NAC] Hook",
      accountName: "Hook.4896",
      rank: "Offizier",
      entryDate: "24.01.2023 09:30"
    },
    {
      discordLink: "https://discord.com/users/300306974925651969",
      discordName: "[NAC] Tank Driver",
      accountName: "TankDriverDA.1508",
      rank: "Offizier",
      entryDate: "26.04.2023 08:38"
    },
    {
      discordLink: "https://discord.com/users/715262932354596865",
      discordName: "[NAC] Callista",
      accountName: "Callista.4239",
      rank: "Veteran",
      entryDate: "08.06.2023 07:58"
    },
    {
      discordLink: "",
      discordName: "",
      accountName: "Apollo.6138",
      rank: "Zweitaccount",
      entryDate: "08.06.2023 07:58"
    },
    {
      discordLink: "https://discord.com/users/521262567490846721",
      discordName: "[NAC] Gracchus/Leonard",
      accountName: "Wiesel.3096",
      rank: "Veteran",
      entryDate: "08.06.2023 07:58"
    },
    {
      discordLink: "https://discord.com/users/1085150237477314590",
      discordName: "[NAC] Nicole",
      accountName: "NiBe.9107",
      rank: "Veteran",
      entryDate: "08.06.2023 07:59"
    },
    {
      discordLink: "https://discord.com/users/225268493052805121",
      discordName: "[NAC] febrinia",
      accountName: "febrinia.5149",
      rank: "Veteran",
      entryDate: "08.06.2023 09:45"
    },
    {
      discordLink: "https://discord.com/users/324251591932641281",
      discordName: "[NAC] norune",
      accountName: "Nopiki.8352",
      rank: "Veteran",
      entryDate: "15.06.2023 08:10"
    },
    {
      discordLink: "https://discord.com/users/185109890933587968",
      discordName: "[NAC] Knut",
      accountName: "danielc.1240",
      rank: "Veteran",
      entryDate: "26.09.2023 07:56"
    },
    {
      discordLink: "https://discord.com/users/1021078839083937812",
      discordName: "[NAC] Giftschnalle",
      accountName: "Apollon.9618",
      rank: "Veteran",
      entryDate: "04.12.2023 08:46"
    },
    {
      discordLink: "https://discord.com/users/519152947159105537",
      discordName: "[NAC] Keralos",
      accountName: "Omagor.2089",
      rank: "Veteran",
      entryDate: "12.12.2023 10:47"
    },
    {
      discordLink: "https://discord.com/users/299885377207140353",
      discordName: "[NAC] Silia/Que",
      accountName: "Silia.8290",
      rank: "Veteran",
      entryDate: "02.01.2024 09:42"
    },
    {
      discordLink: "https://discord.com/users/474097666586836992",
      discordName: "[NAC] Belkala",
      accountName: "Zokora.1604",
      rank: "Veteran",
      entryDate: "07.01.2024 20:00"
    },
    {
      discordLink: "https://discord.com/users/596348702331895839",
      discordName: "[NAC] Kashmey Kat",
      accountName: "Kashmey.6398",
      rank: "Veteran",
      entryDate: "11.01.2024 19:39"
    },
    {
      discordLink: "https://discord.com/users/285884926325293056",
      discordName: "[NAC] MarichuSH",
      accountName: "MarichuSH.9718",
      rank: "Veteran",
      entryDate: "06.05.2024 08:16"
    },
    {
      discordLink: "https://discord.com/users/1110121010528784436",
      discordName: "[NAC] raik",
      accountName: "Raik.9421",
      rank: "Veteran",
      entryDate: "24.05.2024 09:18"
    },
    {
      discordLink: "https://discord.com/users/212604483845226497",
      discordName: "[NAC] Stompifex | Marc",
      accountName: "MajorMarcson.1578",
      rank: "Veteran",
      entryDate: "29.05.2024 08:43"
    },
    {
      discordLink: "https://discord.com/users/565876233334947841",
      discordName: "[NAC] Nuris",
      accountName: "Nuris.7830",
      rank: "Veteran",
      entryDate: "26.06.2024 09:09"
    },
    {
      discordLink: "https://discord.com/users/340009808751230979",
      discordName: "[NAC] Shai12345",
      accountName: "Magnezone.7130",
      rank: "Veteran",
      entryDate: "16.07.2024 09:31"
    },
    {
      discordLink: "https://discord.com/users/218501333274198018",
      discordName: "[NAC] Anke",
      accountName: "Shantra.4976",
      rank: "Veteran",
      entryDate: "08.08.2024 18:54"
    },
    {
      discordLink: "https://discord.com/users/441576654230519818",
      discordName: "[NAC] Luna Orcus",
      accountName: "Peacemaker.8671",
      rank: "Veteran",
      entryDate: "27.08.2024 21:21"
    },
    {
      discordLink: "https://discord.com/users/241728559679406080",
      discordName: "[NAC] Gorasa",
      accountName: "Gorasa.9042",
      rank: "Veteran",
      entryDate: "24.09.2024 21:16"
    },
    {
      discordLink: "https://discord.com/users/288384438491021312",
      discordName: "[NAC] Arganto",
      accountName: "Arganto.9638",
      rank: "Ninja",
      entryDate: "04.10.2024 19:57"
    },
    {
      discordLink: "https://discord.com/users/1202161652225540136",
      discordName: "[NAC] grimmbold",
      accountName: "grimmbold.4602",
      rank: "Ninja",
      entryDate: "08.10.2024 07:02"
    },
    {
      discordLink: "https://discord.com/users/551001524973862922",
      discordName: "[NAC] linchi",
      accountName: "linchpin.7489",
      rank: "Ninja",
      entryDate: "23.10.2024 07:48"
    },
    {
      discordLink: "https://discord.com/users/624669327391719434",
      discordName: "[NAC] Anamvarius",
      accountName: "Anamvarius.1205",
      rank: "Ninja",
      entryDate: "20.02.2025 11:05"
    },
    {
      discordLink: "https://discord.com/users/590292364220825616",
      discordName: "[NAC] Gabriel",
      accountName: "versys.3649",
      rank: "Ninja",
      entryDate: "26.03.2025 11:09"
    },
    {
      discordLink: "https://discord.com/users/196677823614812161",
      discordName: "[NAC] DomiGoesTicTac",
      accountName: "DomiGoesTicTac.3479",
      rank: "Ninja",
      entryDate: "27.03.2025 20:48"
    },
    {
      discordLink: "https://discord.com/users/286877689070092289",
      discordName: "[NAC] brigado",
      accountName: "brigado.6831",
      rank: "Ninja",
      entryDate: "11.04.2025 08:01"
    },
    {
      discordLink: "https://discord.com/users/445532928701628417",
      discordName: "[NAC] Simnax  | Sascha",
      accountName: "Simnax.4760",
      rank: "Ninja",
      entryDate: "21.04.2025 10:30"
    },
    {
      discordLink: "https://discord.com/users/455409073882529794",
      discordName: "[NAC] wiesel",
      accountName: "wiesel.2074",
      rank: "Veteran",
      entryDate: "24.04.2025 19:12"
    },
    {
      discordLink: "https://discord.com/users/876144768827154432",
      discordName: "[NAC] Amsterdam (Frank)",
      accountName: "Restit.3214",
      rank: "Ninja",
      entryDate: "28.04.2025 08:25"
    },
    {
      discordLink: "https://discord.com/users/313776026541096970",
      discordName: "[NAC] Holy Cyanide | Max",
      accountName: "Max.9705",
      rank: "Ninja",
      entryDate: "28.04.2025 08:26"
    },
    {
      discordLink: "https://discord.com/users/814844181801205792",
      discordName: "[NAC] Wolverine",
      accountName: "Eilean Donan.4086",
      rank: "Ninja",
      entryDate: "28.04.2025 20:22"
    },
    {
      discordLink: "https://discord.com/users/358673992829239297",
      discordName: "[NAC] Kazzoo",
      accountName: "Kazoo.5074",
      rank: "Ninja",
      entryDate: "29.04.2025 08:06"
    },
    {
      discordLink: "https://discord.com/users/575744159785287701",
      discordName: "[NAC] Blubba",
      accountName: "blubbablubba.6912",
      rank: "Ninja",
      entryDate: "23.06.2025 16:48"
    },
    {
      discordLink: "https://discord.com/users/366513874066866181",
      discordName: "[NAC] Gaius Aurelia",
      accountName: "JFSmith.9823",
      rank: "Ninja",
      entryDate: "26.06.2025 16:34"
    },
    {
      discordLink: "https://discord.com/users/189022632140734464",
      discordName: "[NAC] AllemYo",
      accountName: "AllemWirdBest.9643",
      rank: "Ninja",
      entryDate: "19.07.2025 20:33"
    },
    {
      discordLink: "",
      discordName: "",
      accountName: "Ollie.5641",
      rank: "Zweitaccount",
      entryDate: "27.07.2025 18:44"
    },
    {
      discordLink: "",
      discordName: "",
      accountName: "Mali.8612",
      rank: "Zweitaccount",
      entryDate: "28.07.2025 10:18"
    },
    {
      discordLink: "https://discord.com/users/1256485883020840980",
      discordName: "[NAC] Rabiatha",
      accountName: "Sven Adurna.1029",
      rank: "Veteran",
      entryDate: "28.07.2025 14:05"
    },
    {
      discordLink: "https://discord.com/users/417751768005476357",
      discordName: "[NAC] Tela",
      accountName: "Tela.3198",
      rank: "Ninja",
      entryDate: "28.07.2025 21:24"
    },
    {
      discordLink: "",
      discordName: "",
      accountName: "Amber.1608",
      rank: "Zweitaccount",
      entryDate: "29.07.2025 21:02"
    },
    {
      discordLink: "https://discord.com/users/183141579937021952",
      discordName: "[NAC] Niveà",
      accountName: "Xathes.2549",
      rank: "Ninja",
      entryDate: "14.08.2025 21:13"
    },
    {
      discordLink: "https://discord.com/users/183931805940842496",
      discordName: "[NAC] Nyath",
      accountName: "Nyath.7940",
      rank: "Ninja",
      entryDate: "14.08.2025 21:14"
    },
    {
      discordLink: "",
      discordName: "",
      accountName: "SgtBonez.9205",
      rank: "Zweitaccount",
      entryDate: "22.08.2025 07:49"
    }
  ];
};