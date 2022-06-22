var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/Gp9M8YgV/cartoon-cute-little-girl-waving-hand-353337-429.webp", "https://i.postimg.cc/rp1nTgvG/c29b3b0bc2055e8447e39ca1e2a14e2a.jpg", "https://i.postimg.cc/449GcTkB/image.png" , "https://i.postimg.cc/g2GhTWvK/1630269569-181417.png", "https://i.postimg.cc/bJ5X4mXy/220-2201098-grandma-clipart-png-grandmother-clipart.jpg", "https://i.postimg.cc/vm1kdQ39/download.png"];
var names = ["Family Book","Vidhi Naresh", "Bhavya Naresh", "Kapila Tandel", "Naresh Revia", "Rami Lalu" , "Revia Soma"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
