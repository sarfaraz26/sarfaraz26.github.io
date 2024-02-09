var hadithText = document.querySelector('#hadith-text');
var hadithChapter = document.querySelector('#hadith-chapter');
var hadithRef = document.querySelector('#hadith-ref');


async function GetHadith()
{
    try
    {
        const response = await fetch('https://random-hadith-generator.vercel.app/bukhari/')
        const {data} = await response.json();
        
        hadithText.innerHTML = data.hadith_english;
        hadithChapter.innerHTML = data.chapterName;
        hadithRef.innerHTML = "References : "+data.refno

    }
    catch
    {
        console.error('Error 500 : ')
    }


}

GetHadith();
