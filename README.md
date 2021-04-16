# Aid-scripts

I merged Community Scripts for Ai Dungeon. 
Scripts are written in JS.
Also add my star wars world that I am doing.

What is AI Dungeon?
AI Dungeon is an AI-assisted text adventure game created by Latitude and based on the research of OpenAI. Some people have compared it to playing Dungeons & Dragons with an AI as the dungeon master. For more information, see:

https://wiki.aidungeon.io/wiki/Main_Page
https://play.aidungeon.io/main/frequentlyAskedQuestions

## Play AI Dungeon in your [browser](https://play.aidungeon.io/) or via [Google Play](https://play.google.com/store/apps/details?id=com.aidungeon) or [Apple AppStore](https://apps.apple.com/us/app/ai-dungeon/id1491268416)

Also, my user in AID is https://play.aidungeon.io/main/profile?username=AureJ

Instruccionts for use the scripts in aid:

Scenario Setting <br />

This is a scenario that uses the simple context, character-sheet, Inventory and more scripts. <br />
This gives a more customizable scenario possible, <br />
you can (/hide) or (/show) the hud of the mod, <br />
you can change the direction of the story for example where are you at with (/at) <br />
or changue who you are <br />
with (/you), <br />
you can change all that i put here using the same command. <br />
You can also change what you like in Author's note or (/remember). <br />

I use default commands in Prompt that you can change later: <br />

/genre space fantasy, space opera. <br />
/author George Lucas. <br />
/note This is a story set in the galaxy of Star wars legends. <br />
/title star wars legends. <br />
/style detailed, vivid. <br />
/hide <br />
<br />
the /hide is in default for hide the WI only. <br />
Use /show at start to make the hud appear without the world information, and use the commands in Story. <br />
<br />
Command: Focus
Focus is separate from the other three areas as it is pushed to the near front of the queue. If no input is entered into the prompt the focus will take priority as if it was the last line entered. Great for forcing the a scene to progress a certain way.
<br />
Command: Think
Situated six positions from the front of the queue, the think command is the mid-strength option for reinforcing plot points.
<br />
Use for the inventory mod:
<br />
"/invAdd <item> <number>" (for add item) <br />
"/invRemove <item> <number>" <br />
"/invEquip <item>" <br />
"/invCheck" <br />
"/invDebugWi" <br />
<br />
For the promp using Character Sheet mod, This script works with placeholders. Your prompt will need to have the player's characteristics between brackets, or the script won't work. All of this data needs to be in brackets, an in a correct order so the script parses them and insert them into context:
 For example
[Kevin] [male] [human] [mage] [20] [stubborn,bad humored,jokester,naughty,grumpy] [light brown] [short] [blond] [178] [60] [slender,rough facial features,scars,quick,fast,acrobat,athletic] [Kevin is a human from the city of Den. He was born to poor parents that died in the street due to diseases when he was young, so he had to grow up on his own by begging or stealing. He managed to get by, but he got arrested multiple times for stealing. But he trained his craft, and learned to act stealthly so he wouldn't get caught. He's heading for the city of San francisco now, as the heard about the Thieves Guild.]

or,

The name of the main character is [${character.name}], and the gender is [${Enter the character's gender...}]. The race is: [${Enter the character's race: human, humanoid, near-humans, red sith}]. The class is: [${Enter the character's class: mercenary, spacer, smuggler, merchant, soldier, assassin, slaver, crime lord, bounty hunter, androids, sith, jedi, mandalorian}] that has just arrived. [${Enter the character's age...}] years old, and the personality traits are: [${Enter the character's three main personality traits separated by commas...}]. The eyes are [${Enter the character's eye color...}], and the hair is of the style [${Enter the character's hair style...}] and of color [${Enter the character's hair color...}]. [${Enter the character's height in centimeters...}] centimeters tall, and the weigh is [${Enter the character's weight in kilos...}] kg. The physical features are: [${Enter the character's three main physical features...}].

Script Credits
Simple Context by OnePunchVAM
https://github.com/OnePunchVAM/aid-simple-context

Encounters by Gnurro
https://github.com/Gnurro/AIDscripts/tree/main/Encounters

Inventory and Character Sheet by Thaalessalves (javaman)
https://github.com/thaalesalves

Merge encounters and SC by Lion
https://github.com/l-io-n






Disclaimer: I am not associated with Latitude or AI Dungeon in any way. This is not an official resource nor is it intended to replace the official documentation or any of the vastly superior community resources referenced or linked herein. The sole purpose of this document is to somewhat better ease inexperienced users into more advanced usage of AI Dungeon without having to scour all corners of the web or community forums for answers to questions that have been answered multiple times.
I do not claim to have all the answers and will not respond to any specific questions or personal issues.
