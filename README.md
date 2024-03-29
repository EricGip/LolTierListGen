# League of Legends Tier list Generator

# [Demo](https://ericgip.github.io/LolTierListGen/) Link here

<img src="https://github.com/EricGip/LolTierListGen/blob/master/src/data/imgs/TierListExample.png" alt="Example of usage for tier list" height="300">. 
  
<img src="https://github.com/EricGip/LolTierListGen/blob/master/src/data/imgs/DraftExample.png" alt="Example of usage for draft" height="400">. 

# Inspiration

I initially made the drag and drop function in CSS with the help of stackoverflow, but it wasn't as clean as I wanted it to be; I searched for more resources and found the React DnD module was popularly used and covered many more edge cases since it has been in development more, no point of reinventing the wheel.

I wanted to learn a lower level language, but I haven't mastered JavaScript yet so I met in the middle and tried a project with TypeScript.  

I kept accidentally swiping left on my touchpad and refreshing the whole page, removing my whole board so I added local storage. 

# Future Development

   * I would like to make this app responsive and work on mobile devices, but while testing on larger phones you can still only see around 2-5 icons per row and doesn't make sense from a UX standpoint. I'll be thinking of solutions.

   * Apart from tier list, I use this to keep track of my teammate's comfort champions during draft for our tournaments. I want to see if I can add a backend and sockets to allow for teams to collaborate on a single board together. 
   
   * Search function for champions to either highlight and/or generate a new icon to allow a champion to flex a position or present that they can fill multiple roles. 
   
Overall, this app works perfectly for my needs as an IGL
