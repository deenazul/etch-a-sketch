# etch-a-sketch

The color changing part was very difficult for me. I had to keep on looking on how to change the
background of each grid in div.
Firstly, I used: 
this.style.background = color;
but it didn't change. Then I changed this into document.querySelector('.container').grid.style.backgroundColor and it didn't work.
Until I found out how to use ForEach to go through the grid item one by one.

7/11: add size input, fix ui