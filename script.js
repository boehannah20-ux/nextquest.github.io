async function loadQuests() {
    try {
        const response = await fetch('quests.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
                
        const data = await response.json();
                
        
        console.log(data)
        


        const listContainer = document.getElementById('quest-list');

        let questMap = data.quests.map(quest => `
            <div class="quest" uuid="${quest.uuid}">
                <div class="quest-header">
                    <img src="pfp.png" alt="Widget Image" class="quest-img">
                    <p><strong>Requester: </strong> ${quest.requester}<br>
                    <strong>Level: </strong> ${quest.level}</p>
                </div>
                    <h3>${quest.title}</h3>
                    <p>${quest.description}</p>
                    <h4>Reward/s:</h4>
                    <p>${quest.rewards}</p>
            </div>
                `).join('');
        console.log(questMap)

        listContainer.innerHTML = questMap

                /*
        listContainer.innerHTML = data.quests.map(quest => `
            <div class="quest" uuid="${quest.uuid}">
                    <h4>${quest.title}</h4>
                    <h6>Level: ${quest.level}</h6>
                    <h6>Requester: ${quest.requester}</h6>
                    <h3>Description:</h3>
                    <p>${quest.description}</p>
                `).join('');
        */

    } catch (error) {
        console.error("Could not fetch or parse JSON data:", error);
        //document.getElementById('main-heading').textContent = "Failed to load content.";
    }
}

// Run the function when the page loads
window.addEventListener('DOMContentLoaded', loadQuests);
document.body.addEventListener('click', (event) => {

    /* Search for currently selected element and toggle it off when clicked*/
    const el = document.querySelector(".quest.expanded")
    console.log(el)
    if(el) {
        el.classList.toggle('expanded')
    }

    const quest = event.target.closest('.quest')
    console.log(quest)
    if(quest){
        console.log('quest clicked :) ', quest);
        quest.classList.toggle('expanded');
    }
    


});