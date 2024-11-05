export default function PlantForm() {
    return (
        <>
        
        <form > 
            <div>
                <label htmlFor="plantName">Plant Name: *</label><br></br>
                <input type="text" id="plantName" name="plantName"  required />
            </div>
            <div>
                <label htmlFor="botanicalName">Botanical Name: *</label><br></br>
                <input type="text" id="botanicalName" name="botanicalName"  required />
            </div>
            <div>
                <label htmlFor="description">Description:</label><br></br>
                <textarea id="description" name="description" rows="10"></textarea>
            </div>
            <div>
                <label htmlFor="lightNeed">Light Need: *</label>
                <input type="radio" id="lightNeed1" name="lightNeed" value="full sun"/>
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
                <input type="checkbox" id="fertiliserSeason1" name="spring" value="spring"/>
                <label htmlFor="fertiliserSeason1">Spring</label>
                <input type="checkbox" id="fertiliserSeason2" name="fertiliserSeason" value="summer"/>
                <label htmlFor="fertiliserSeason2">Summer</label>
                <input type="checkbox" id="fertiliserSeason3" name="fertiliserSeason" value="autumn"/>
                <label htmlFor="fertiliserSeason3">Autumn</label>            
                <input type="checkbox" id="fertiliserSeason4" name="fertiliserSeason" value="winter"/>
                <label htmlFor="fertiliserSeason3">Winter</label>            
            </div>

        <button type="submit">Create</button>
        </form>
        
        </>

    );
}