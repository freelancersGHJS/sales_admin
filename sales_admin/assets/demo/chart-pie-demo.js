// Set new default font family and font color to mimic Bootstrap's default styling
      // console.log(it);
 var product_name=[];
 var total_item=[];

firebase.firestore().collection('product_info')
.onSnapshot(  async function(querySnapshot) {    
 var count1=0,c1=0;
        querySnapshot.forEach(async function(doc) {

        product_name[count1++]= await doc.data().name;
                        		total_item[c1++]=0;
                        		console.log(product_name);

             //count1++;
                     	            console.log("main count",count1,c1);


                                  });
    })

       

                	


firebase.firestore().collection('orders_info').where("status","==","Completed")
    .onSnapshot(function(querySnapshot) {       

    	
            querySnapshot.forEach(async function(doc) {
                
                // console.log(doc.data().items);
                var arr=await doc.data().items;
              
                
                
                arr.forEach(async function(value){
                	product_name.forEach(async function(val,index){
                		//console.log("working===>",val,value);
                		if(val==value)
                		{ //console.log(val,"===",value);
                			total_item[index]++; 
                			//console.log(index);
                			console.log(total_item);
                		}
                	})
                });
            });
        });







        
async function drawchart(){ 
	Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
        var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: product_name,
    datasets: [{
      data: total_item,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107','#46F1DD', '#28a745','#42180F', '#FACB82','#7D3C98','#C0FCB3','#34495E'],
    }],
  },
  
 
});
}

setTimeout(drawchart, 3200);






















// Pie Chart Example
