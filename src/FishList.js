// function to create Fish object
function Fish(name, location, season, weather, time)
{
    this.name = name;
    this.location = location;
    this.season = season;
    this.weather = weather;
    this.time = time;
}

// this is just for personal reference
var locations = ["Ocean", "Forest River", "Mountain Lake", "Forest River", "Ginger Island Ocean", "Ginger Island Ponds and Rivers", "Cindersap Forest Waterfall", "Mutant Bug Lair", "Pirate Cove", "Town River", "Forest River", "Forest Pond", "Witch's Swamp", "Secret Woods Pond", "Desert", "Mines 20F", "Mines 60F", "Mines 100F", "Volcano Caldera", "Sewers"]
var weather = ["Sun", "Rain"]

export var fish_list = [];

function makeFish(name, location, season, weather, time)
{
    var f = new Fish(name, location, season, weather, time)
    fish_list.push(f)
}

makeFish("Albacore", ["Ocean"], ["Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Anchovy", ["Ocean"], ["Spring", "Fall"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Blue Discus", ["Ginger Island Pond"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Bream", ["Town River", "Forest River"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Bullhead", ["Mountain Lake"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Carp", ["Mountain Lake", "Secret Woods Pond", "Sewers"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Catfish", ["Town River", "Forest River", "Secret Woods Pond", "Witch's Swamp"], ["Spring", "Fall"], ["Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])
makeFish("Chub", ["Forest River", "Mountain Lake"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16, 17, 28, 29, 20, 21, 22, 23, 0, 1])
makeFish("Dorado", ["Forest River"], ["Summer"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
makeFish("Eel", ["Ocean"], ["Spring", "Fall"], ["Rain"], [16, 17, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Flounder", ["Ocean", "Ginger Island Ocean"], ["Spring", "Summer"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
makeFish("Ghostfish", ["Mines 20F", "Mines 60F"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Goby", ["Cindersap Forest Waterfall"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Halibut", ["Ocean"], ["Spring", "Summer", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 19, 20, 21, 22, 23, 0, 1])
makeFish("Herring", ["Ocean"], ["Spring", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Ice Pip", ["Mines 60F"], ["Spring", "Summer", "Fall", "Winter"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 177, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Largemouth Bass", ["Mountain Lake"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
makeFish("Lava Eel", ["Mines 100F", "Volcano Caldera"], ["Spring", "Summer", "Fall", "Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1])
makeFish("Lingcod", ["Town River", "Forest River", "Mountain Lake"], ["Winter"], ["Sun", "Rain"], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1])