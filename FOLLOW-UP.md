# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

I used moment.js. It is an intuitive library for formatting and parsing human readable times.
If I had more time, I would have not used it for better performance.

### Q) What's the command to start the application locally?

(Default) `npm start`

---

# General:

### Q) If you had more time, what further improvements or new features would you add?

I would have broken the Card component into more granular components to be more DRY.
I would have made the styling more consisten with mroe selectors in the SCSS files.
I also would have handled props and conditional styling in the SCSS files with more time.
In general more styling. I would have also separated out more utility functions and imported
them where I needed them instead of having them grouped all together in the React components.

### Q) Which parts are you most proud of? And why?

I am proud of the way the card looks mostly, and that all the information is correct.
I used the built in `fetch` API to save space instead of axios. If I had more time
I would be more proud at how elegant I could make the code but I had to rush a little bit
towards the end. I will reflect on this and continue to work towards perfectionm.

I am a little bit proud of the React hooks but once again, they could be better and more
efficient, but for the most part I used `useEffect` for component Mount.

### Q) Which parts did you spend the most time with? What did you find most difficult?

A lot of specific styling took me the most time. I had never used Backpack so I think
I spent too much time reading through their API when I ended up using what I am more familiar
with which was some inline react stying and vanilla classes inside the SASS/SCSS style sheets.

I think I underestimated how long some parts would take me to style towards the end, so I could
have spent my earlier planning time working quicker.

I should have thought more about the Legs to Itineraries data structure implementation, because
is was a little bit tricky to parse and match the legs of each trip. If I had planned out my
approach better from the start, I wouldn't have spent so much time debugging the itineraries
and making sure the data was being passed in the correct props. As you can probably tell in my
`Card.jsx` I ended up adding a lot of props to receive from the parent to ensure I had the correct data.

### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.

It was really fun actually. I loved it. The README and docs were really helpful and well written.
