var table = document.getElementById('table');
var rows = table.getElementsByTagName("td");
for(i = 0; i < rows.length; i++)
    {
        if ( rows[i].innerHTML == "FAILED")
        {
            rows[i].style.color = "red"
        }
        else if ( rows[i].innerHTML == "PENDING")
        {
            rows[i].style.color = "yellow"
        }
        else if (rows[i].innerHTML == "SUCCESS")
        {
            rows[i].style.color = "lawngreen"
        }

    }