export default function PlantForm({onSubmitCreatePlant}) {

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        data.fertiliserSeason = formData.getAll("fertiliserSeason");
        onSubmitCreatePlant(data);
        event.target.reset();
      }

    return (
        <>
        
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="name">Plant Name: *</label><br></br>
                <input type="text" id="name" name="name" placeholder="Plant Name" required />
            </div>
            <div>
                <label htmlFor="botanicalName">Botanical Name: *</label><br></br>
                <input type="text" id="botanicalName" name="botanicalName" placeholder="Botanical Name" required />
            </div>
            <div>
                <label htmlFor="description">Description:</label><br></br>
                <textarea id="description" name="description" rows="10" placeholder="Plant Description"></textarea>
            </div>
            <div>
                <label htmlFor="lightNeed">Light Need: *</label>
                <input type="radio" id="lightNeed1" name="lightNeed" value="full sun" required/>
                <label htmlFor="lightNeed1">Full Sun</label>
                <input type="radio" id="lightNeed2" name="lightNeed" value="partial shade"/>
                <label htmlFor="lightNeed2">Partial Shade</label>
                <input type="radio" id="lightNeed3" name="lightNeed" value="full shade"/>
                <label htmlFor="lightNeed3">Full Shade</label>            
            </div>
            <div>
                <label htmlFor="waterNeed">Water Need: *</label>
                <input type="radio" id="waterNeed1" name="waterNeed" value="low" required/>
                <label htmlFor="waterNeed1">Low</label>
                <input type="radio" id="waterNeed2" name="waterNeed" value="medium"/>
                <label htmlFor="waterNeed2">Medium</label>
                <input type="radio" id="waterNeed3" name="waterNeed" value="high"/>
                <label htmlFor="waterNeed3">High</label>            
            </div>
            <div>
                <label htmlFor="fertiliserSeason">Fertiliser Season:</label>
                <input type="checkbox" id="fertiliserSeason1" name="fertiliserSeason" value="spring"/>
                <label htmlFor="fertiliserSeason1">Spring</label>
                <input type="checkbox" id="fertiliserSeason2" name="fertiliserSeason" value="summer"/>
                <label htmlFor="fertiliserSeason2">Summer</label>
                <input type="checkbox" id="fertiliserSeason3" name="fertiliserSeason" value="autumn"/>
                <label htmlFor="fertiliserSeason3">Autumn</label>            
                <input type="checkbox" id="fertiliserSeason4" name="fertiliserSeason" value="winter"/>
                <label htmlFor="fertiliserSeason3">Winter</label>            
            </div>

        <button type="submit" id="create" name="create" >Create</button>
        </form>
        
        </>

    );
}