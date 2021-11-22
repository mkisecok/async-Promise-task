// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const section = document.querySelector('.modal');
const close=document.querySelector('.close');
console.log(close);
function spendsTimeInPage(time)
{
    return new Promise((resolve) =>
    {
        setTimeout(()=>
        {
            resolve(true);
        }, time)
    })
}

spendsTimeInPage(60000).then((occur) =>
{
    if(occur)
    {
        section.style.display = 'block';
    }
} );

close.addEventListener('click',e=>
{
    section.style.display = 'none';
})