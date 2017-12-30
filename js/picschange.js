var arr =["/images/pics/IMG_1176.JPG","/images/pics/IMG_7017.JPG", "/images/pics/IMG_7034.JPG"
,"/images/pics/IMG_7040.JPG", "/images/pics/IMG_7112.JPG", "/images/pics/IMG_7173.JPG", "/images/pics/IMG_7205.JPG", "/images/pics/IMG_7213.JPG", "/images/pics/IMG_7322.JPG", "/images/pics/IMG_7338.JPG", "/images/pics/IMG_7346.JPG", "/images/pics/IMG_7537.JPG", "/images/pics/IMG_7605.JPG", "/images/pics/IMG_7646.JPG"];
var num = 0;
function interval()
{
    setInterval(picstofront,60000);
}
function picstofront ()
{
   
    var img=document.getElementById("image");
    
    if(num < arr.length-1)
    {
        num++;
        img.src = "http://localhost/meineWebsite"+ arr[num];
        

    }
    else
    {
        num = 0;
        img.src = "http://localhost/meineWebsite"+ arr[num];
    }
    

}