
var final = document.createElement('div');
final.setAttribute('class','container-fluid');

var box = document.createElement('div');
box.setAttribute('class','box');








 
 async function getdata(){
    var data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
    var datares = await data.json();
    

    // for(let i=0;i<15;i++){
    //     var res = datares[i].brand+" "+datares[i].name+" "+datares[i].price+" "+datares[i].api_featured_image+" "+datares[i].product_link+" "+datares[i].description ;
    //     console.log(res)
    // }

    for(let i=0;i<50;i++){

      var image = document.createElement('img');
      image.setAttribute('src',datares[i].image_link);

 var brand = document.createElement('h3');
 brand.setAttribute('class','cname');
 brand.innerHTML='Brand :'+' '+datares[i].brand;

 var name1 = document.createElement('h3');
 name1.setAttribute('class','cname1');
 name1.innerHTML='Name :'+' '+datares[i].name;

 var price = document.createElement('h3');
 price.setAttribute('class','cname2');
 price.innerHTML='Price :'+' '+datares[i].price;

 var product = document.createElement('h3');
 product.setAttribute('class','cname3');
 product.innerHTML='Product Link :'+' '+datares[i].product_link;

 var description = document.createElement('h3');
 description.setAttribute('class','cname4');
 description.innerHTML='Description :'+' '+datares[i].description;
 
 


 box.append(image,brand,name1,price,product,description);
  
 final.append(box);
 document.body.append(final);

    }

}
getdata();