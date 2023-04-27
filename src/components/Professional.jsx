import "./Professional.css";


function Professional() {
    
    return (
        
        <div class="container">
            <div class="c1">
	<h1>PROFESSIONAL EXPERIENCE</h1>
    </div>
    <br></br><br></br>
        <table>
            <tr class="table-header">
                <div class="header__item" ><a id="join_date" class="filter__link" href="#">Joining Date</a></div>
                <div class="header__item"><a id="join_designation" class="filter__link filter__link--number" href="#">Joining Designation</a></div>
                <div class="header__item"><a id="date_of_declaration" class="filter__link filter__link--number" href="#">Date of Declaration</a></div>
                <div class="header__item"><a id="promotion_date" class="filter__link filter__link--number" href="#">Promotion date</a></div>
                <div class="header__item"><a id="promotion_designation" class="filter__link filter__link--number" href="#">Promotion Designation</a></div>
                <div class="header__item"><a id="remarks" class="filter__link filter__link--number" href="#">Remarks</a></div>
            </tr>
            <div class="table-content">	
                <div class="table-row">		
                    <div class="table-data">01-06-2000</div>
                    <div class="table-data">Assistant Prof</div>
                    <div class="table-data">17-10-2007</div>
                    <div class="table-data">nil</div>
                    <div class="table-data">nil</div>
                    <div class="table-data">nil</div>
                </div>
                <div class="table-row">
                    <div class="table-data">17-11-2007</div>
                    <div class="table-data">Assistant Prof</div>
                    <div class="table-data">10-11-2011</div>
                    <div class="table-data">20-02-2013</div>
                    <div class="table-data">Professor</div>
                    <div class="table-data">nil</div>
                </div>
                <div class="table-row">
                    <div class="table-data">10-02-2012</div>
                    <div class="table-data">Professor</div>
                    <div class="table-data">20-07-2018</div>
                    <div class="table-data">nil</div>
                    <div class="table-data">nil</div>
                    <div class="table-data">nil</div>
                </div>
            </div>	
        </table>
        <button onClick={() => window.location.href = 'http://localhost:3000/Addprofession'}>
  
        <div class="spinner">Add
</div></button>
    
    </div>
    
    )
}

export default Professional;