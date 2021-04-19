# Programming Exercise: Modifying Images

#### Part 1

Write a JavaScript program that modifies an image by putting three vertical stripes on it ­ a red stripe on the left one third, a green stripe in the middle, and a blue stripe on the right one third. For example, if your program ran on Drew’s picture shown on the left, the resulting image would have red, green and blue vertical stripes as shown in the image on the right.

The **red** stripe is made by changing the **red component** o f all the pixels in the **left vertical third** to 255, while leaving the green and blue components as their values in the original image. The green and blue stripes are made similarly, but instead of modifying the red component of each pixel in the correct part of the image you will modify the green or blue component.

Let’s consider what steps your program will need to take in order to modify this image.

1. Start with the image you want to change. 
2. Figure out the width of the image.
3. For each pixel in the image:

-   Get the x­coordinate for that pixel

-   If the pixel’s x­coordinate is less than one­third of the image’s width, set the pixel’s red

  value to 255.

-  If the pixel’s x­coordinate is between one­third and two­thirds of the image’s width, set

  the pixel’s green value to 255.

```javascript
var image = new SimpleImage("hilton.jpg");
var imgWidth = image.getWidth();
for (var pixel of image.values()){
    if(pixel.getX() < imgWidth/3){
        pixel.setRed(255);
    }else if(pixel.getX() < imgWidth/3*2){
        pixel.setGreen(255);
    }else{
        pixel.setBlue(255);
    }
}
print(image);
```

![hilton](/Users/fish/Desktop/Cousera/DukeJS/Week2/Picture/hilton.png)![Threecolors](/Users/fish/Desktop/Cousera/DukeJS/Week2/Picture/Threecolors.png)



#### Part 2

Write a JavaScript function named swapRedGreen with one parameter pixel (representing a single pixel). This function should swap the red and green values of the pixel. For example, if you have a pixel with red = 255, green = 100, blue = 150, after calling swapRedGreen on that pixel its new RGB values would be red = 100, green = 255, blue = 150.

To test your function, you should choose an image and apply the swapRedGreen function to every pixel in the image. The choice of your image is important. For some images you may not notice any change. What would happen if you used a completely black image, or a completely white image? What about an image with lots of red and not a lot of green? Think about what type of image you should use for testing your function. After choosing an image and applying the swapRedGreen function to every pixel in the image, make sure you print the resulting image so you can see whether your function worked correctly.

```javascript
function swapRedGreen(p){
    var tempR = p.getRed();
    p.setRed(p.getGreen);
    p.setGreen(tempR);
    return p;
}
var img = new SimpleImage("smallhands.png");
for (var pixel of img.values()){
    var answer = swapRedGreen(pixel);
}
print(img);

```

![smallhands](/Users/fish/Desktop/Cousera/DukeJS/Week2/Picture/smallhands.png)![SRGsmallhands](/Users/fish/Desktop/Cousera/DukeJS/Week2/Picture/SRGsmallhands.png)



#### Part 4

Write code to change the Duke blue devil (the image below on the left) to be yellow (as in the image below on the right).

Start by working this smaller example by hand. You want to turn the image below on the left into the image below on the right. What are the steps you will need to take? Once you have worked through this example by hand to determine the steps you will need to take, you can translate your algorithm into code.

Hint: You need to somehow identify the blue pixels. What makes the blue pixels different from the white pixels? What are some conditions you could use to identify the blue pixels?

```javascript
var image = new SimpleImage("duke_blue_devil.png");

for (var pixel of image.values()){
    if (pixel.getRed() != 255){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
print(image);
```

![duke_evil_blue](/Users/fish/Desktop/Cousera/DukeJS/Week2/Picture/duke_evil_blue.png)![duke_evil_yellow](/Users/fish/Desktop/Cousera/DukeJS/Week2/Picture/duke_evil_yellow.png)