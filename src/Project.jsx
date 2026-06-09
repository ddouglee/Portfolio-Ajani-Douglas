export default function Project(){
    return(
        <div>
            {/*Project List: */}
            <h1>My Projects</h1>
            <li>
                <ul><a href="/TeamProjectPart C.pdf" download="Team Project Part C">
                    SRS for Appointment Reminder System</a> 
                        <li>
                            <ul>Role: Lead the project, assigning roles to each member of the team and myself</ul>
                            <ul>Project was finished, examples of code were done by genAI, given a final grade of 8.75/10</ul>
                        </li>
                        <img src="0.png" alt="state diagram"></img>
                </ul>
                <ul><a href="/NIMGame.zip" download="NIMGame">
                    NIMGame</a> 
                    <li>
                        <ul>Role: Solo Project, Programmer and Debugger</ul>
                        <ul>Project was finished and given a perfect score</ul>
                    </li>
                        <img src="NIMExample.png" alt="nimexample" style={{width: '50%', height: '50%'}}></img>
                </ul>
                <ul><a href="/LottoPicker.zip" download="LottoPicker">
                    Lotto Ticket Picker</a> 
                    <li>
                        <ul>Role: Solo Project, Programmer and Debugger</ul>
                        <ul>Project was finished and given a perfect score</ul>
                    </li>
                    <img src="LottoPickerExample.png" alt="lotto picker example" style={{width: '50%', height: '50%'}}></img>
                </ul>
            </li> 
        </div>
    );
}