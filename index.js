var themeSwitcher = "on"
        function dark(){
            switch(themeSwitcher){
                case "on": 
                themeSwitcher = "off"
                document.body.style.background = '#292D3E';
                document.getElementById("nan").style.color = '#15BAEC';
                document.getElementById("nan1").style.color = '#15BAEC';
                document.getElementById("nan2").style.color = '#15BAEC';
                document.getElementById("nan3").style.color = '#15BAEC';
                break

                case "off":
                themeSwitcher = "on"
                document.body.style.background = 'white';
                document.getElementById("nan").style.color = '#0f38a0';
                document.getElementById("nan1").style.color = '#0f38a0';
                document.getElementById("nan2").style.color = '#0f38a0';
                document.getElementById("nan3").style.color = '#0f38a0';
            }
        }
