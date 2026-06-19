exercises = [{
    'name': 'Bench Press',
    'muscle': 'Chest'
},
{
    'name': 'Squat',
    'muscle': 'Legs'
}]

def get_exercise_by_muscle(muscle):
    for exercise in exercises:
        if exercise['muscle'] == muscle:
            return exercise['name']
    return None
def get_exercise_by_name(name):
    for exercise in exercises:
        if exercise['name'] == name:
            return exercise['muscle']
    return None
def filter_exercises_by_muscle(muscle):
    filered = []
    for exercise in exercises:
        if exercise['muscle'] == muscle:
            filered.append(exercise)
    return filered
def search_exercise(name):
    for exercise in exercises:
        if exercise['name'] == name:
            return exercise
    return None

