const operation = 'выдать';

let docInfo = {

    info: {
        title: 'Текстовый документ',
        author: '',
        subject: '',
        keywords: ''
    },
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [50, 50, 30, 60],

    footer: function (currPage) {
        return {
            text: currPage.toString(),
            alignment: 'center',
            fontSize: 10,
            opacity: 0.5
        }
    },

    content: [
        {
            text: `ЗАЯВЛЕНИЕ`,
            alignment: 'center',
            fontSize: 14,
            bold: true
        },
        {
            text: `о выдаче (замене, обновлении) карты водителя`,
            alignment: 'center',
            fontSize: 14,
            bold: true
        },
        {
            text: '',
            alignment: 'center',
            fontSize: 14,
            style: 'bold'
        },
        {
            text: `Прошу ${operation.trim()} (заменить1, обновить2) (нужное подчеркнуть) карту водителя, соответствующую Требованиям к тахографам, устанавливаемым на транспортные средства, удтвержденные приказом Минтранса России от 13 февраля 2013 г. №36.`,
            alignment: 'justify',
            fontSize: 13,
            lineHeight: 1.5,
            style: 'normal',
            leadingIndent: 20
        }
    ]
}

let btn = document.querySelector('.generate');

btn.addEventListener('click', () => {
    let operation = document.getElementById('operationChoiceGive');
    if (operation.getAttribute()) {}
})

