var questMass = [
 questA = {
    q00: 'Как по-простому называются документы, материалы, порочащие чью-нибудь деятельность, репутацию?',
    q1: '1 - Компромат',
    q2: '2 - Компресс',
    q3: '3 - Компрадор',
    q4: '4 - Компост',
    q0: 1
},

 questB = {
    q00: 'Какая из русских машин признана машиной 20-го века?',
    q1: '1 - ГазЕль',
    q2: '2 - "Святогор"',
    q3: '3 - ГАЗ 2410',
    q4: '4 - ВАЗ 2101',
    q0: 4
},



 questC = {
    q00: 'Для чего североамериканские индейцы использовали вигвам?',
    q1: '1 - Для курения',
    q2: '2 - Для жилья',
    q3: '3 - Для еды',
    q4: '4 - Для приветствия',
    q0: 2
},



 questD = {
    q00: 'По мнению пословицы, плох тот солдат который не мечтает стать кем?',
    q1: '1 - Маршалом',
    q2: '2 - Полковником',
    q3: '3 - Дембелем',
    q4: '4 - Генералом',
    q0: 4
},



 questE = {
    q00: 'Как называется крупное политическое и финансовое мошенничество, афера?',
    q1: '1 - Панама',
    q2: '2 - Феска',
    q3: '3 - Шляпа',
    q4: '4 - Кепка',
    q0: 1
},



 questF = {
    q00: 'Каких пятен почти не осталось на географической карте мира?',
    q1: '1 - Красных',
    q2: '2 - Жирных',
    q3: '3 - Родимых',
    q4: '4 - Белых',
    q0: 4
},



 questG = {
    q00: 'Как, по нормам международной дипломатии, определяются отношения волка и зайца из "Ну, погоди"?',
    q1: '1 - Сепаратизм',
    q2: '2 - Нейтралитет',
    q3: '3 - Конфликт',
    q4: '4 - Милитаризм',
    q0: 3
},



 questH = {
    q00: 'Какой овощ, согласно русской пословице, не слаще хрена?',
    q1: '1 - Сельдерей',
    q2: '2 - Морковь',
    q3: '3 - Редька',
    q4: '4 - Репа',
    q0: 3
},



 questI = {
    q00: 'Женщина, которую Шерлок Холмс называл не иначе, как "эта женщина":',
    q1: '1 - Адлер',
    q2: '2 - Мацеста',
    q3: '3 - Дюрсо',
    q4: '4 - Туапсе',
    q0: 1
},



 questJ = {
    q00: 'Что передает друг другу спортсмены одной команды во время эстафеты?',
    q1: '1 - Привет от тренера',
    q2: '2 - Биту',
    q3: '3 - Палочку',
    q4: '4 - Олимпийский огонь',
    q0: 3
}

]












/*var event;

function getQuestA () {
    var questA = {
        q00: 'Как по-простому называются документы, материалы, порочащие чью-нибудь деятельность, репутацию?',
        q1: '1 - Компромат',
        q2: '2 - Компресс',
        q3: '3 - Компрадор',
        q4: '4 - Компост',
        q0: 1
    }
    return event = parseInt(prompt('Выберите правильный ответ (1, 2, 3, 4): ' + questA.q00 + '\n ' + questA.q1 + '\n ' + questA.q2 + '\n ' + questA.q3 + '\n ' + questA.q4 + '\n ' + '0 - выход из игры'));
    
}


function getQuestB () {
    var questB = {
        q00: 'Какая из русских машин признана машиной 20-го века?',
        q1: '1 - ГазЕль',
        q2: '2 - "Святогор"',
        q3: '3 - ГАЗ 2410',
        q4: '4 - ВАЗ 2101',
        q0: 4
}
    return questB.q00 + '\n ' + questB.q1 + '\n ' + questB.q2 + '\n ' + questB.q3 + '\n ' + questB.q4 + '\n ';
    
}


function getQuestC () {
    var questC = {
        q00: 'Для чего североамериканские индейцы использовали вигвам?',
        q1: '1 - Для курения',
        q2: '2 - Для жилья',
        q3: '3 - Для едыДля приветствия',
        q4: '4 - Для приветствия',
        q0: 2
}
    return questC.q00 + '\n ' + questC.q1 + '\n ' + questC.q2 + '\n ' + questC.q3 + '\n ' + questC.q4 + '\n ';
}


function getQuestD () {
    var questD = {
        q00: 'По мнению пословицы, плох тот солдат который не мечтает стать кем?',
        q1: '1 - Маршалом',
        q2: '2 - Полковником',
        q3: '3 - Дембелем',
        q4: '4 - Генералом',
        q0: 4
}
    return questD.q00 + '\n ' + questD.q1 + '\n ' + questD.q2 + '\n ' + questD.q3 + '\n ' + questD.q4 + '\n ';
}


function getQuestE () {
    var questE = {
        q00: 'Как называется крупное политическое и финансовое мошенничество, афера?',
        q1: '1 - Панама',
        q2: '2 - Феска',
        q3: '3 - Шляпа',
        q4: '4 - Кепка',
        q0: 1
}
    return questE.q00 + '\n ' + questE.q1 + '\n ' + questE.q2 + '\n ' + questE.q3 + '\n ' + questE.q4 + '\n ';
}


function getQuestF () {
    var questF = {
        q00: 'Каких пятен почти не осталось на географической карте мира?',
        q1: '1 - Красных',
        q2: '2 - Жирных',
        q3: '3 - Родимых',
        q4: '4 - Белых',
        q0: 3
}
    return questF.q00 + '\n ' + questF.q1 + '\n ' + questF.q2 + '\n ' + questF.q3 + '\n ' + questF.q4 + '\n ';
}


function getQuestG () {
    var questG = {
        q00: 'Как, по нормам международной дипломатии, определяются отношения волка и зайца из "Ну, погоди"?',
        q1: '1 - Сепаратизм',
        q2: '2 - Нейтралитет',
        q3: '3 - Конфликт',
        q4: '4 - Милитаризм',
        q0: 3
}
    return questG.q00 + '\n ' + questG.q1 + '\n ' + questG.q2 + '\n ' + questG.q3 + '\n ' + questG.q4 + '\n ';
}


function getQuestH () {
    var questH = {
        q00: 'Какой овощ, согласно русской пословице, не слаще хрена?',
        q1: '1 - Сельдерей',
        q2: '2 - Морковь',
        q3: '3 - Редька',
        q4: '4 - Репа',
        q0: 3
}
    return questH.q00 + '\n ' + questH.q1 + '\n ' + questH.q2 + '\n ' + questH.q3 + '\n ' + questH.q4 + '\n ';
}


function getQuestI () {
    var questI = {
        q00: 'Женщина, которую Шерлок Холмс называл не иначе, как "эта женщина":',
        q1: '1 - Адлер',
        q2: '2 - Мацеста',
        q3: '3 - Дюрсо',
        q4: '4 - Туапсе',
        q0: 1
}
    return questI.q00 + '\n ' + questI.q1 + '\n ' + questI.q2 + '\n ' + questI.q3 + '\n ' + questI.q4 + '\n ';
}


function getQuestJ () {
    var questJ = {
        q00: 'Что передает друг другу спортсмены одной команды во время эстафеты?',
        q1: '1 - Привет от тренера',
        q2: '2 - Биту',
        q3: '3 - Палочку',
        q4: '4 - Олимпийский огонь',
        q0: 3
}
    return questJ.q00 + '\n ' + questJ.q1 + '\n ' + questJ.q2 + '\n ' + questJ.q3 + '\n ' + questJ.q4 + '\n ';
}
*/