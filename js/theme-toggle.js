//JS - Check local saved user preference for theme mode dark/light
const currentTheme = window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : null ;
var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.checked = true;

if(toggleSwitch.checked == true)
document.documentElement.setAttribute('data-theme', 'dark');

if (currentTheme) 
    {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    
//JS - Code for DARK/LIGHT Mode
var getCurrentTheme = window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : null;
//Check local saved user preference for theme mode dark/light
 
if (getCurrentTheme) {

    if (getCurrentTheme == 'dark') 
    {
        toggleSwitch.checked = true;     
    }
    else 
    {
        toggleSwitch.checked = false;
    }
}

function switchTheme(e) {

    if (e.target.checked) 
    {    
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark'); //add this
         
    }
    else 
    {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light'); //add this
         
     }
 }
toggleSwitch.addEventListener('change', switchTheme, false);