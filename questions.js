//array of questions

let questions = [
    {
        numb:1,
        question: "Jak często stwierdzasz, że korzystasz z internetu dłużej niż zamierzałeś?",
        options: [
            "Zawsze",
            "Często",
            "Czasami",
            "Rzadko",
            "Nigdy"
        ]
    },
    {
        numb:2,
        question: "Jak często zaniedbujesz domowe obowiązki, aby spędzać więcej czasu w Internecie?",
        options: [
            "Zawsze",
            "Często",
            "Czasami",
            "Rzadko",
            "Nigdy"
        ]
    },
    // {
    //     numb:3,
    //     question: "Jak często wybierasz spędzanie czasu w Internecie niż ze swoim partnerem/ką?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:4,
    //     question: "Jak często tworzysz nowe relacje z innymi użytkownikami online?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:5,
    //     question: "Jak często osoby w twoim życiu narzekają na ilość czasu, który spędzasz online?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:6,
    //     question: "Jak często zaniedbujesz szkołe/prace z powodu ilości czasu, który spędzasz online?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:7,
    //     question: "Jak często sprawdzasz pocztę przed czymś innym, co musisz zrobić?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:8,
    //     question: "Jak często twoja produktywność cierpi z powodu Internetu?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:9,
    //     question: "Jak często stajesz się defensywny lub skryty, gdy zostajesz zapytany o swoją aktywność online?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:10,
    //     question: "Jak często korzystasz z internetu w celu polepszenia swojego samopoczucia gdy czujesz się zestresowany/a, smutny/a?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:11,
    //     question: "Jak często wyczekujesz momentu gdy znów zaczniesz korzystać z internetu?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:12,
    //     question: "Jak często obawiasz się, że życie bez Internetu byłoby nudne i puste?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:13,
    //     question: "Jak często irytujesz się, gdy ktoś ci przeszkadza podczas korzystania z Internetu?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:14,
    //     question: "Jak często sypiasz mniej przez Internet?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:15,
    //     question: "Jak często zdarza Ci się myśleć, o korzystaniu z interentu, podczas wykonywania innych czynności",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:16,
    //     question: "Jak często zdarza Ci się mówić „jeszcze tylko kilka minut” w trybie online?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:17,
    //     question: "Jak często bez skutków starasz się ograniczyć ile czasu spędzasz w sieci?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:18,
    //     question: "Jak często próbujesz ukryć jak długo byłeś online?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:19,
    //     question: "Jak często wybierasz Internet od spotkania się ze znajomymi?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:20,
    //     question: "Jak często zdarza się, że twoje złe samopoczucie znika po wróceniu do trybu online?",
    //     options: [
    //         "Zawsze",
    //         "Często",
    //         "Czasami",
    //         "Rzadko",
    //         "Nigdy"
    //     ]
    // },
    // {
    //     numb:21,
    //     question: "Uważam, że jestem osobą wartościową przynajmniej w takim samym stopniu co inni. ",
    //     options: [
    //         "Stanowczo się zgadzam",
    //         "Zgadzam się",
    //         "Nie mam zdania",
    //         "Nie zgadzam się",
    //         "Stanowczo się nie zgadzam"
    //     ]
    // },
    // {
    //     numb:22,
    //     question: "Uważam, że posiadam wiele pozytywnych cech",
    //     options: [
    //         "Stanowczo się zgadzam",
    //         "Zgadzam się",
    //         "Nie mam zdania",
    //         "Nie zgadzam się",
    //         "Stanowczo się nie zgadzam"
    //     ]
    // },
    // {
    //     numb:23,
    //     question: "Ogólnie biorąc jestem skłonny(a) sądzić, że nie wiedzie mi się",
    //     options: [
    //         "Stanowczo się zgadzam.",
    //         "Zgadzam się.",
    //         "Nie mam zdania.",
    //         "Nie zgadzam się.",
    //         "Stanowczo się nie zgadzam."
    //     ]
    // },
    // {
    //     numb:24,
    //     question: "Potrafię robić różne rzeczy tak dobrze, jak większość innych ludzi. ",
    //     options: [
    //         "Stanowczo się zgadzam",
    //         "Zgadzam się",
    //         "Nie mam zdania",
    //         "Nie zgadzam się",
    //         "Stanowczo się nie zgadzam"
    //     ]
    // },
    // {
    //     numb:25,
    //     question: "Uważam, że nie mam wiele powodów, aby być z siebie dumnym ",
    //     options: [
    //         "Stanowczo się zgadzam.",
    //         "Zgadzam się.",
    //         "Nie mam zdania.",
    //         "Nie zgadzam się.",
    //         "Stanowczo się nie zgadzam."
    //     ]
    // },
    // {
    //     numb:26,
    //     question: "Lubię siebie.",
    //     options: [
    //         "Stanowczo się zgadzam",
    //         "Zgadzam się",
    //         "Nie mam zdania",
    //         "Nie zgadzam się",
    //         "Stanowczo się nie zgadzam"
    //     ]
    // },{
    //     numb:27,
    //     question: "Ogólnie rzecz biorąc jestem z siebie zadowolony(a).",
    //     options: [
    //         "Stanowczo się zgadzam",
    //         "Zgadzam się",
    //         "Nie mam zdania",
    //         "Nie zgadzam się",
    //         "Stanowczo się nie zgadzam"
    //     ]
    // },{
    //     numb:28,
    //     question: "Chciałbym (chciałabym) mieć więcej szacunku dla samego(ej) siebie.",
    //     options: [
    //         "Stanowczo się zgadzam.",
    //         "Zgadzam się.",
    //         "Nie mam zdania.",
    //         "Nie zgadzam się.",
    //         "Stanowczo się nie zgadzam."
    //     ]
    // },{
    //     numb:29,
    //     question: "Czasami czuję się bezużyteczny(a).",
    //     options: [
    //         "Stanowczo się zgadzam.",
    //         "Zgadzam się.",
    //         "Nie mam zdania.",
    //         "Nie zgadzam się.",
    //         "Stanowczo się nie zgadzam."
    //     ]
    // },{
    //     numb:30,
    //     question: "Niekiedy uważam, że jestem do niczego.",
    //     options: [
    //         "Stanowczo się zgadzam.",
    //         "Zgadzam się.",
    //         "Nie mam zdania.",
    //         "Nie zgadzam się.",
    //         "Stanowczo się nie zgadzam."
    //     ]
    // },{
    //     numb:31,
    //     question: "Uważam, że jestem osobą",
    //     options: [
    //         "Bardzo nieszczęsliwy/a",
    //         "Trochę nieszczęśliwy/a",
    //         "Obojętny/a",
    //         "Trochę szczęśliwy/a",
    //         "Bardzo szczęśliwy/a"
            
    //     ]
    // }, {
    //     numb: 32,
    //     question: "W porównaniu do osób z mojego otoczenia uważam, że jestem",
    //     options: [
    //         "Bardzo nieszczęsliwy/a",
    //         "Trochę nieszczęśliwy/a",
    //         "Obojętny/a",
    //         "Trochę szczęśliwy/a",
    //         "Bardzo szczęśliwy/a"

    //     ]
    // }, {
    //     numb: 33,
    //     question: "Niektórzy są ogólnie bardzo szczęśliwymi osobami. Cieszą się życia bez względu na wydarzenia, czerpiąc z niego jak najwięcej. Jak bardzo identyfikujesz się z tym opisem?",
    //     options: [
    //         "Zdecydowanie się z nim nie identyfikuję",
    //         "Raczej się z nim nie identyfikuję",
    //         "Nie potrafię określić",
    //         "Uważam, że częściowo mam takie samo nastawienie",
    //         "Zdecydowanie się z nim identyfikuję"
    //     ]
    // }, {
    //     numb: 34,
    //     question: "Niektórzy są ogólnie nieszczęśliwymi osobami. Chociaż nie chorują na depresję, to i tak nigdy nie wydają się tak szczęśliwi, jak mogą być. Jak bardzo identyfikujesz się z tym opisem?",
    //     options: [
    //         "Zdecydowanie się z nim nie identyfikuję.",
    //         "Raczej się z nim nie identyfikuję.",
    //         "Nie potrafię określić.",
    //         "Uważam, że częściowo mam takie samo nastawienie.",
    //         "Zdecydowanie się z nim identyfikuję."
    //     ]
    // },

    
];