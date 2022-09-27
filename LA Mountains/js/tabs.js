function openTab(tab) {
    if (tab == 1) {
        document.getElementById("tabs").className = "background-3_A";
        document.getElementById("info-card").innerHTML = "<h2>SCHEDULE</h2><table><tr><td>25 Nov 2016</td><td>Vestibulum viverra</td></tr><tr><td>28 Nov 2016</td><td>Vestibulum viverra</td></tr><tr><td></td><td></td></tr><tr><td>18 Dec 2016</td><td>Vestibulum viverra</td></tr><tr><td></td><td></td></tr><tr><td>7 Jan 2017</td><td>Vestibulum viverra</td></tr></table>";    
    } 
    if (tab == 2) {
        document.getElementById("tabs").className = "background-3_B";
        document.getElementById("info-card").innerHTML = "<h2>SCHEDULE</h2><table><tr><td>17 Nov 2016</td><td>Vestibulum viverra</td></tr><tr><td></td><td></td></tr><tr><td>13 Dec 2016</td><td>Vestibulum viverra</td></tr><tr><td>28 Dec 2016</td><td>Vestibulum viverra</td></tr><tr><td></td><td></td></tr><tr><td>9 Feb 2017</td><td>Vestibulum viverra</td></tr></table>";    
    } 
}