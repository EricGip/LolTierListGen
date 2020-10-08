# League of Legends Tier list Generator

# [Demo](https://ericgip.github.io/LolTierListGen/)

// [img]

# Inspiration

From the #100daysofcode challenge, a lot of industry professionals were recommending that you create a Kanban board / Trello clone to learn React. I wanted to level up my frontend game, so I decided to listen to the UI/UX experts and use it for a project that I would actually use.

I initially made the drag and drop function in CSS with the help of stackoverflow, but it wasn't as clean as I wanted it to be; I searched for more resources and found the React DnD module was popularly used and covered many more edge cases since it has been in development more, no point of reinventing the wheel.

# Future Development

   * I would like to make this app responsive and work on mobile devices, but while testing on larger phones you can still only see around 2-5 icons per row and doesn't make sense from a UX standpoint. I'll be thinking of solutions.

   * Apart from tier list, I use this to keep track of my teammate's comfort champions during draft for our tournaments. I want to see if I can add a backend and sockets to allow for teams to collaborate on a single board together. 
   
   * Search function for champions for better user experience. 

# Issues. 

I spent about 11 hours looking for a deployment bug until external help finally figured out that **comments** were breaking React's `build` and compiled the JavaScript incorrectly. 
