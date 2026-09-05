
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
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";
    listItem.style.justifyContent = "center";
    listItem.style.position = "relative";
    listItem.style.padding = "5px";
    listItem.style.margin = "5px 0";
    listItem.style.borderRadius = "5px";

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "❌";
    removeButton.setAttribute("aria-label", `Remove ${exercise}`);
    removeButton.style.position = "absolute";
    removeButton.style.right = "45px";

    const lineThroughButton = document.createElement("button");
    lineThroughButton.type = "button";
    lineThroughButton.textContent = "✔️";
    lineThroughButton.setAttribute("aria-label", `Mark ${exercise} as completed`);
    lineThroughButton.style.position = "absolute";
    lineThroughButton.style.right = "5px";

    removeButton.addEventListener("click", () => {
        listItem.remove();
    });

    lineThroughButton.addEventListener("click", () => {
        listItem.classList.toggle("line-through");
    });

    

    routine.appendChild(listItem);
    listItem.appendChild(removeButton);
    listItem.appendChild(lineThroughButton);
    
    
}

function filterExercises(workouts){
    // TODO: Implement filtering.
}
function findExercise(name) {
    // TODO: Implement lookup.
}
function createArray() {
    // TODO: Implement array creation.
}
