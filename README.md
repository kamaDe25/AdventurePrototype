 A simple adventure game by Kamalika De based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: forest, undergroundLair, lakeBottom, fairyShrine
- **2+ scenes *not* based on `AdventureScene`**: myIntro, badEnding, goodEnding, badEnding2
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: gainItemTrash() - removes trash from inventory and puts it in the Trash Inventory
    - Enhancement 2: hasAllItemTrash() - checks if the trash inventory is full
    - Enhacement 3: trashInventory - inventory specifically for the trash can

Experience requirements:
- **4+ locations in the game world**: forest, forestSlope, underground, lakeBottom, fairyShrine
- **2+ interactive objects in most scenes**: empty bottle to be thrown away in forest scene, medallion to be picked up in lakeBottom scene, different ways to leave each scene
- **Many objects have `pointerover` messages**: empty bottles in forest scenes have a pointerover message; medallion in lakeBottom scene also has pointerover message, etc
- **Many objects have `pointerdown` effects**: empty bottles can be taken to trash cans in forest scene; medallions can be picked up in lakeBottom scene, etc 
- **Some objects are themselves animated**: bottles and medallion tween to dissapear

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

-badEnding.jpg
-fairyShrine.jpg (not used in final project)
-forest.jpg
-forestSlope.jpg (not used in final project)
    - Taken by me on my iphone


Assets below were not used in final project.

-bottom of ocean.jpg
    -Taken from [aoml.noaa.gov](https://www.aoml.noaa.gov/deep-sea-is-slowing-warming/)

-empty bottle.png
    -Taken from [pngegg.com](https://www.pngegg.com/en/search?q=empty+bottle#google_vignette)

-lost_sea.jpg
    -Taken from [Smart Water Magazine](https://smartwatermagazine.com/blogs/magical-water-destinations/lost-sea-americas-largest-underground-lake)

-Trash Can.jpg
    -Taken from [rawpixel.com](https://www.rawpixel.com/search/trash%20bin%20vintage?page=1&path=1522&sort=curated)

-Medallion.jpg
    -Taken from [look and learn.com](https://www.lookandlearn.com/history-images/YM0464659/Medallion)


Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.