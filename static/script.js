
const wrkout = document.querySelector(".workoutcards");
const routine = document.querySelector(".workout-list");
const showListButton = document.getElementById("showListButton")

showListButton.addEventListener('click', ()=>{
    routine.classList.toggle('hidden');
});
wrkout.addEventListener("click", (event) => {
    if(event.target.classList.contains("button")){
        const card = event.target.closest(".contents");
        const workoutName = card.querySelector("h4").textContent;

        addExercise(workoutName);
    }
});

function calculateVolume(sets, reps, weight) {
    return sets * reps * weight;
}
function addExercise(exercise) {
    // Implementation to add an exercise
    const list = routine.querySelectorAll("li");
    for (const item of list){
        if(item.dataset.exercise === exercise){
            return;
        }
    }

    const listItem = document.createElement("li");
    listItem.dataset.exercise = exercise;
    listItem.textContent = exercise;
    listItem.style.backgroundColor = "#2a2d56";
    listItem.style.padding = "5px";
    listItem.style.margin = "5px 0";
    listItem.style.borderRadius = "5px";

    const removeButton = document.createElement("button");
    removeButton.textContent = "❌";
    removeButton.style.marginLeft = "10px";

    removeButton.addEventListener("click", () => {
        listItem.remove();
    });

    routine.appendChild(listItem);
    listItem.appendChild(removeButton);
    
    
}

function filterExercises(workouts){
    //learn to filer
}
function findExercise(name) {
    //learn to find
}
function createArray() {
    // Implementation to create an array
}
